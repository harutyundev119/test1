export interface ParsedDate {
  day: number
  month: number
  year: number
}
export const MonthsSet = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Окт',
  'Ноя',
  'Дек'
]

export const FullMonthsSet = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
]

export const FullSet = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря'
]
export const DateParse = ({
  from,
  to,
  type
}: {
  from: string
  to: string
  type: boolean
}): string | null => {
  if (!from && !to) return null
  const fromDate = new Date(from)
  const toDate = new Date(to)
  if (fromDate > toDate) return null
  const fullFrom = getFullDateParams(fromDate)
  const fullTo = getFullDateParams(toDate)
  if (from === to) return formattedString({ date: fullFrom, type })
  if (fullFrom.year < fullTo.year) {
    return `${formattedString({ date: fullFrom })} - ${formattedString({
      date: fullTo
    })}`
  }
  if (fullFrom.month < fullTo.month) {
    return `${formattedString({
      date: fullFrom,
      showYear: false
    })} - ${formattedString({ date: fullTo })}`
  }
  if (fullTo.day === getDaysInMonth(fullTo) && fullFrom.day !== 1) {
    return formattedString({ date: fullFrom, showDate: false })
  }
  return `${formattedString({
    date: fullFrom,
    showMonth: false,
    showYear: false
  })} - ${formattedString({ date: fullTo })}`
}

const getFullDateParams = (date: Date): ParsedDate => {
  return {
    day: date.getUTCDate(),
    month: date.getUTCMonth(),
    year: date.getUTCFullYear()
  }
}
export const formattedString = ({
  date,
  showYear = true,
  showMonth = true,
  showDate = true,
  type = false
}: {
  date: ParsedDate
  showYear?: boolean
  showMonth?: boolean
  showDate?: boolean
  type?: boolean
}): string => {
  let result = ''
  if (showDate) result = `${date.day}`
  if (showMonth && !type) result = `${result} ${MonthsSet[date.month]}`
  if (showMonth && type) result = `${result} ${FullSet[date.month]}`
  if (showYear) result = `${result} ${date.year}`
  return result
}

const getDaysInMonth = ({ month, year }: ParsedDate): number => {
  return new Date(year, month + 1, 0).getDate()
}
