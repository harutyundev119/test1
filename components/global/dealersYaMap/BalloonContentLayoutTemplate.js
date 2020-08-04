import Sprite from '@/assets/images/svg.svg'
import LadaPlaceholder from '@/assets/images/dealers/lada-baloon-placeholder.jpeg'
import LadaDetalPlaceholder from '@/assets/images/dealers/lada-detal-baloon-placeholder.jpg'
const svgPhone = `${Sprite}#svg-phone`
const svgMail = `${Sprite}#svg-mail`

const BalloonContentLayoutTemplate = (properties) => {
  // let workTime = ''
  // if (properties['working-time']) {
  //   properties['working-time'].split(',').forEach((time) => {
  //     workTime += time + '<br />'
  //   })
  // }
  let result = '<div class="cardPoint">'
  if (properties.image)
    result += `<div style="background-image: url(${properties.image})" `
  else if (properties.type === 'lada-image')
    result += `<div style="background-image: url(${LadaPlaceholder})" `
  else result += `<div style="background-image: url(${LadaDetalPlaceholder})" `
  result +=
    'class="cardPoint__image" ></div>' +
    '<div class="cardPoint__content">' +
    `<div class="cardPoint__name page-text m-white">${properties.name}</div>` +
    '<div class="cardPoint__address page-text m-fs12">' +
    properties.address +
    '</div>'
  if (properties['working-time']) {
    result +=
      '<div class="cardPoint__address page-text m-fs12">' +
      'Время работы: <span class="page-text m-fs12 m-white">' +
      properties['working-time'] +
      '</span></div>'
  }
  if (properties.phone) {
    result =
      result +
      '<div class="cardPoint__contact">' +
      '<div class="cardPoint__icon">' +
      '<span class="icon m-w16" >' +
      '<svg class="svg svg-phone">' +
      `<use xlink:href="${svgPhone}"></use></svg>` +
      '</span>' +
      '</div>' +
      `<a href="phone:${properties.phone.number}" ` +
      'class="cardPoint__number page-text m-white" >' +
      properties.phone.number +
      '</a>' +
      '</div>'
  }
  if (properties.email) {
    result =
      result +
      '<div class="cardPoint__contact">' +
      '<div class="cardPoint__icon">' +
      '<span class="icon m-w16" >' +
      '<svg class="svg svg-phone">' +
      `<use xlink:href="${svgMail}"></use></svg>` +
      '</span>' +
      '</div>' +
      `<a href="mailto:${properties.email}" ` +
      'class="cardPoint__email page-text m-white" >' +
      properties.email +
      '</a>' +
      '</div>'
  }
  result = result + '</div></div>'
  return result
}
export default BalloonContentLayoutTemplate
