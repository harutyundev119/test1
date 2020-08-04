<template>
  <ui-depth>
    <div :style="{ backgroundImage: `url(${imageBg})` }" class="cardSale">
      <a href="/sale" class="cardSale__link"></a>
      <div class="cardSale__button">
        <kinesis-element :strength="20" type="depth">
          <ui-button class="m-dark m-block">Узнать больше</ui-button>
        </kinesis-element>
      </div>
      <div class="cardSale__block">
        <div class="cardSale__tag">Спецпредложение2</div>
        <div class="cardSale__title page-h4 m-upp m-medium">
          <span>Весь февраль </span>скидка на&nbsp;литые диски 30%
        </div>
      </div>
    </div>
  </ui-depth>
</template>

<script>
import img from '@/assets/images/sale/wheel.png'
import imgbg from '@/assets/images/sale/bg.png'
export default {
  name: 'CardSaleImage',
  data: () => ({
    image: img,
    imageBg: imgbg
  })
}
</script>

<style lang="postcss"></style>
