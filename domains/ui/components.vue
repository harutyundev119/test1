<template>
  <div>
    <div class="ui-title">
      Components
    </div>
    <div class="ui-subtitle">
      Ui Back
    </div>
    <div>
      <ui-back :to="{ name: 'ui' }" class="">акций</ui-back>
    </div>
    <div class="ui-subtitle">
      Card New
    </div>
    <div style="width:100%; max-width: 554px;">
      <card-new></card-new>
    </div>
    <div class="ui-subtitle">
      Card New Image
    </div>
    <card-new-image></card-new-image>
    <div class="ui-subtitle">
      SearchMain
    </div>
    <div style="background-color: #F4F4F4;padding: 10px;">
      <search-main></search-main>
    </div>
    <div style="background-color: #23262C; padding: 10px;">
      <search-main class="m-dark"></search-main>
    </div>
    <div class="ui-subtitle">
      Ui calendar
    </div>
    <ui-calendar></ui-calendar>
    <div class="ui-subtitle">
      Header
    </div>
    <div>
      <header-site></header-site>
    </div>
    <div style="background-color: #857FBC;">
      <header-site class="m-light"></header-site>
    </div>
    <div style="background-color: #23262C;">
      <header-site class="m-dark"></header-site>
    </div>
    <div style="background-color: #857FBC;">
      <header-site class="m-dark m-transparent"></header-site>
    </div>
    <div class="ui-subtitle">
      Footer
    </div>
    <div>
      <footer-site></footer-site>
    </div>
    <div style="background-color: #23262C;">
      <footer-site class="m-dark"></footer-site>
    </div>
    <div class="ui-subtitle">
      DealerList
    </div>
    <div>
      <dealer-list></dealer-list>
    </div>
    <div>
      Card Sale
    </div>
    <card-sale></card-sale>
    <div class="ui-subtitle">
      Card Point
    </div>
    <card-point></card-point>
    <div class="ui-subtitle">
      Slider Sale
    </div>
    <div style="padding: 20px;">
      <slider-sale :item="{}"></slider-sale>
    </div>
    <div class="ui-subtitle">
      Card Event
    </div>
    <card-event></card-event>
    <div class="ui-subtitle">
      Card Video
    </div>
    <card-video></card-video>
    <div class="ui-subtitle">
      ContactFeedback
    </div>
    <div style="padding:10px; background-color: #23262C;">
      <contact-feedback></contact-feedback>
    </div>
    <div class="ui-subtitle">
      DealerBlock
    </div>
    <div>
      <dealer-block></dealer-block>
    </div>
    <div class="ui-subtitle">
      Ui Drop
    </div>
    <div
      style="min-height:280px; background-color: #23262C; padding: 10px; margin-top: 30px; position: relative;"
    >
      <ui-drop color="m-white"></ui-drop>
    </div>
    <div
      style="min-height:280px; background-color: #23262C; padding: 10px; margin-top: 30px; position: relative;"
    >
      <ui-drop color="m-white" col="m-col-3"></ui-drop>
    </div>
    <div
      style="min-height:280px background-color: #ffffff; padding: 10px; margin-top: 30px; position: relative;"
    >
      <ui-drop color="m-dark"></ui-drop>
    </div>
    <div class="ui-subtitle">
      Index New
    </div>
    <index-new></index-new>
  </div>
</template>

<script>
import CardNew from '@/components/global/cards/CardNew.vue'
import UiCalendar from '@/components/ui/UiCalendar.vue'
import SearchMain from '@/components/global/search/SearchMain.vue'
import CardNewImage from '@/components/global/cards/CardNewImage.vue'
import HeaderSite from '@/components/global/header/HeaderSite.vue'
import FooterSite from '@/components/global/footer/FooterSite.vue'
import DealerList from '@/components/global/dealerList/DealerList.vue'
import DealerBlock from '@/components/global/dealerBlock/DealerBlock.vue'
import CardSale from '@/components/global/cardSale/CardSale.vue'
import CardPoint from '@/components/global/cardPoint/CardPoint.vue'
import SliderSale from '@/components/global/sliders/SliderSale.vue'
import CardEvent from '@/components/global/cardEvent/CardEvent.vue'
import CardVideo from '@/components/global/cardVideo/CardVideo.vue'
import ContactFeedback from '@/components/global/contactFeedback/ContactFeedback.vue'
import IndexNew from '@/domains/index/components/IndexNew.vue'
export default {
  name: 'UiComponents',
  components: {
    CardNew,
    UiCalendar,
    CardNewImage,
    HeaderSite,
    FooterSite,
    DealerList,
    DealerBlock,
    CardSale,
    CardPoint,
    SliderSale,
    CardEvent,
    CardVideo,
    SearchMain,
    ContactFeedback,
    IndexNew
  }
}
</script>

<style lang="postcss" scoped>
.ui-title {
  font-size: 16px;
  line-height: 45px;
  color: $purple;
  margin-bottom: 15px;
}
.ui-subtitle {
  font-size: 16px;
  line-height: 1.2;
  color: $yellow;
  margin: 15px 0 5px;
}
.ui-items {
  display: flex;
  flex-wrap: wrap;
  margin: -10px -10px 30px;
}
.ui-item {
  display: flex;
  align-items: center;
  padding: 10px;
}
</style>
