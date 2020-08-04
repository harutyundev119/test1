import { FullMonthsSet, MonthsSet } from '~/helpers/dateParser'

export interface CalendarConfigMonth {
  name: string
  fullName: string
  index: number
  weight: number
  selected: boolean
  disabled: boolean
  between: boolean
}

export interface SelectedDate {
  yearIndex: number
  monthIndex: number
  weight: number
}

export interface YearConstructorParams {
  name: number
  startWeight: number
  startMonth?: number | null
  endMonth?: number
}

export class CalendarConfigYear {
  public months: CalendarConfigMonth[]
  public name: number
  constructor(params: YearConstructorParams) {
    const { startWeight, startMonth, endMonth, name } = params
    this.name = name
    let weight = startWeight - 1
    const months = MonthsSet.map(
      (month: string, index: number): CalendarConfigMonth => {
        weight++
        return {
          name: month,
          fullName: FullMonthsSet[index],
          index,
          weight,
          selected: false,
          disabled: false,
          between: false
        }
      }
    )
    if (startMonth) {
      for (let i = 0; i < startMonth - 1; i++) {
        months[i].disabled = true
        months[i].weight = -1
      }
    }
    if (endMonth) {
      for (let i = endMonth; i < months.length; i++) {
        months[i].disabled = true
        months[i].weight = -1
      }
    }
    this.months = months
  }
  public getLastPositiveWeight(): number {
    let lastPositive = 0
    for (let i = 0; i < this.months.length; i++) {
      if (this.months[i].weight > lastPositive)
        lastPositive = this.months[i].weight
    }
    return lastPositive + 1
  }
  public selectDate(
    month: CalendarConfigMonth,
    firstDateWeight?: number
  ): void | null {
    if (month.disabled) return null
    if (!firstDateWeight && firstDateWeight !== 0)
      for (let i = 0; i < this.months.length; i++) {
        if (this.months[i].weight === month.weight) {
          this.months[i].selected = true
          this.months[i].between = false
        } else {
          this.months[i].selected = false
          this.months[i].between = false
        }
      }
    else {
      for (let i = 0; i < this.months.length; i++) {
        if (
          !this.months[i].disabled &&
          this.months[i].weight > firstDateWeight &&
          this.months[i].weight < month.weight &&
          !this.months[i].selected
        ) {
          this.months[i].between = true
        }
        if (this.months[i].weight === month.weight) {
          this.months[i].selected = true
          this.months[i].between = false
        }
      }
    }
  }
  public setToDefault() {
    for (let i = 0; i < this.months.length; i++) {
      if (!this.months[i].disabled) {
        this.months[i].selected = false
        this.months[i].between = false
      }
    }
  }
}

export interface CalendarConstructorParams {
  firstDate: string
  lastDate: string
  startDate: string | null
  endDate: string | null
}

export class CalendarConfig {
  constructor(
    public years: CalendarConfigYear[] = [],
    public startDate: SelectedDate | null = null,
    public endDate: SelectedDate | null = null
  ) {}
  public selectDate(yearIndex: number, monthIndex: number): void | null {
    if (this.years[yearIndex].months[monthIndex].disabled) return null
    if (!this.startDate) {
      this.years[yearIndex].selectDate(this.years[yearIndex].months[monthIndex])
      this.startDate = {
        yearIndex,
        monthIndex,
        weight: this.years[yearIndex].months[monthIndex].weight
      }
    } else if (!this.endDate) {
      if (
        this.startDate.yearIndex > yearIndex ||
        (this.startDate.yearIndex === yearIndex &&
          this.startDate.monthIndex > monthIndex)
      ) {
        this.setToDefault()
        this.selectDate(yearIndex, monthIndex)
        return null
      }
      for (let i = 0; i <= yearIndex; i++) {
        this.years[i].selectDate(
          this.years[yearIndex].months[monthIndex],
          this.startDate.weight
        )
      }
      this.endDate = {
        yearIndex,
        monthIndex,
        weight: this.years[yearIndex].months[monthIndex].weight
      }
    } else {
      this.setToDefault()
      this.selectDate(yearIndex, monthIndex)
    }
  }
  public setToDefault(): void {
    this.endDate = null
    this.startDate = null
    for (let i = 0; i < this.years.length; i++) {
      this.years[i].setToDefault()
    }
  }
  private getStartYear(): CalendarConfigYear | null {
    if (!this.startDate) return null
    return this.years[this.startDate.yearIndex]
  }
  private getEndYear(): CalendarConfigYear | null {
    if (!this.endDate) return null
    return this.years[this.endDate.yearIndex]
  }
  getFullTextValue(): string {
    if (!this.startDate || !this.endDate) return ''
    const start = this.getStartYear()
    const end = this.getEndYear()
    let result = ''
    if (start && end) {
      const startMonth = start.months[this.startDate.monthIndex]
      const endMonth = end.months[this.endDate.monthIndex]
      result = `${startMonth.name} ${start.name}`
      if (start.name === end.name && endMonth.index === startMonth.index)
        return result
      result += ` - ${endMonth.name} ${end.name}`
    }
    return result
  }
  getStartValue(): string {
    if (!this.startDate) return ''
    const start = this.getStartYear()
    let result = ''
    if (start) {
      const month = start.months[this.startDate.monthIndex].index + 1
      let monthText = ''
      if (month < 10) monthText = `0${month}`
      else monthText = `${month}`
      result = `${start.name}-${monthText}-01`
    }
    return result
  }
  getEndValue(): string {
    if (!this.endDate) return ''
    const end = this.getEndYear()
    let result = ''
    if (end) {
      const month = end.months[this.endDate.monthIndex].index + 1
      let monthText = ''
      if (month < 10) monthText = `0${month}`
      else monthText = `${month}`
      const daysInMonth = new Date(end.name, month, 0).getDate()
      result = `${end.name}-${monthText}-${daysInMonth}`
    }
    return result
  }
  getValue() {
    if (!this.startDate || !this.endDate) return null
    else
      return {
        text: this.getFullTextValue(),
        start: this.getStartValue(),
        end: this.getEndValue()
      }
  }
}

export const CalendarConfigConstructor = (
  params: CalendarConstructorParams
): CalendarConfig => {
  const result = new CalendarConfig()
  const firstDayRow = params.firstDate.split('-')
  const lastDayRow = params.lastDate.split('-')

  let startDayParsed: any = null
  let endDayParsed: any = null

  const lastDayParsed = {
    year: Number(lastDayRow[0]),
    month: Number(lastDayRow[1])
  }

  const firstDayParsed = {
    year: Number(firstDayRow[0]),
    month: Number(firstDayRow[1])
  }

  if (params.startDate) {
    const startDayRow = params.startDate.split('-')
    startDayParsed = {
      year: Number(startDayRow[0]),
      month: Number(startDayRow[1])
    }
  }

  if (params.endDate) {
    const endDayRow = params.endDate.split('-')
    endDayParsed = {
      year: Number(endDayRow[0]),
      month: Number(endDayRow[1])
    }
  }

  if (lastDayParsed.year === firstDayParsed.year) {
    result.years.push(
      new CalendarConfigYear({
        name: firstDayParsed.year,
        startWeight: 0,
        startMonth: firstDayParsed.month,
        endMonth: lastDayParsed.month
      })
    )

    if (startDayParsed && firstDayParsed.year === startDayParsed.year) {
      const startMonthIndex = result.years[0].months.findIndex(
        (month) => month.index + 1 === startDayParsed.month
      )
      if (startMonthIndex > -1) {
        result.selectDate(0, startMonthIndex)
      }
    }

    if (endDayParsed && firstDayParsed.year === endDayParsed.year) {
      const endMonthIndex = result.years[0].months.findIndex(
        (month) => month.index + 1 === endDayParsed.month
      )
      if (endMonthIndex > -1) {
        result.selectDate(0, endMonthIndex)
      }
    }

    return result
  } else {
    result.years.push(
      new CalendarConfigYear({
        name: firstDayParsed.year,
        startWeight: 0,
        startMonth: firstDayParsed.month
      })
    )
    if (startDayParsed) {
      if (startDayParsed.year === result.years[result.years.length - 1].name) {
        const startMonthIndex = result.years[0].months.findIndex(
          (month) => month.index + 1 === startDayParsed.month
        )
        if (startMonthIndex > -1) {
          result.selectDate(result.years.length - 1, startMonthIndex)
        }
      }
    }
    if (endDayParsed) {
      if (endDayParsed.year === result.years[result.years.length - 1].name) {
        const endMonthIndex = result.years[0].months.findIndex(
          (month) => month.index + 1 === endDayParsed.month
        )
        if (endMonthIndex > -1) {
          result.selectDate(result.years.length - 1, endMonthIndex)
        }
      }
    }
  }

  let lastUsedYear: CalendarConfigYear = result.years[0]
  for (let i = firstDayParsed.year + 1; i <= lastDayParsed.year; i++) {
    if (i === lastDayParsed.year)
      result.years.push(
        new CalendarConfigYear({
          name: i,
          startWeight: lastUsedYear.getLastPositiveWeight(),
          endMonth: lastDayParsed.month
        })
      )
    else
      result.years.push(
        new CalendarConfigYear({
          name: i,
          startWeight: lastUsedYear.getLastPositiveWeight()
        })
      )
    lastUsedYear = result.years[result.years.length - 1]

    if (endDayParsed) {
      if (endDayParsed.year === result.years[result.years.length - 1].name) {
        const endMonthIndex = result.years[0].months.findIndex(
          (month) => month.index + 1 === endDayParsed.month
        )
        if (endMonthIndex > -1) {
          result.selectDate(result.years.length - 1, endMonthIndex)
        }
      }
    }
  }
  return result
}
