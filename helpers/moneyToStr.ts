/*
 Форматированная строка цены
 пример:
 price: 2500.9093
 return: '2 500.91'
 */

export const moneyToStr = (price: number): string => {
  const fixedPrice = Number(price).toFixed(2)
  const separated = String(fixedPrice).split('.')
  if (separated.length > 0) {
    if (separated[0].length > 3) {
      const excess = separated[0].length % 3
      const even = (separated[0].length - excess) / 3
      let result = separated[0].slice(0, excess)
      if (excess > 0) result += ' '
      for (let i = 0; i < even; i++) {
        result += separated[0].slice(excess + i * 3, excess + i * 3 + 3)
        result += ' '
      }
      if (separated.length > 1) result = result.slice(0, -1) + '.' + separated[1]
      return result
    } else return separated.join('.')
  } else return separated.join('.')
}
