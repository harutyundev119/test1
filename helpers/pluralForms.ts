/*
 Окончание для числительных
 пример:
 n = 3
 text_forms = ['товар', 'товара', 'товаров']
 return = 'товара'
 */
export default function(n: number, dictionary: [string, string, string]): string {
  n = Math.abs(n) % 100
  const n1 = n % 10
  if (n > 10 && n < 20) {
    return dictionary[2]
  }
  if (n1 > 1 && n1 < 5) {
    return dictionary[1]
  }
  if (n1 === 1) {
    return dictionary[0]
  }
  return dictionary[2]
}
