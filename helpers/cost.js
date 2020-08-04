export default (data) => {
  if (data === null) return '-'
  else return Math.floor(data).toLocaleString('ru-RU')
}
