<template>
  <div>
    <div class="ui-title">
      Ui Typography
    </div>
    <div class="ui-items">
      <div class="ui-item">
        <div class="page-headline m-medium">Headline / LT CYR 65 Medium</div>
      </div>
      <div class="ui-item">
        <div class="page-headline m-upp">Headline UPP/ LT CYR 55 Roman</div>
      </div>
      <div class="ui-item">
        <div class="page-h1 m-upp">H1 reg upp / LT CYR 55 Roman</div>
      </div>
      <div class="ui-item">
        <div class="page-h2 m-medium">H2 / LT CYR 65 Medium</div>
      </div>
      <div class="ui-item">
        <div class="page-h3 m-medium">H3 / LT CYR 65 Medium</div>
      </div>
      <div class="ui-item">
        <div class="page-h3 m-medium m-upp">H3 upp/ LT CYR 65 Medium</div>
      </div>
      <div class="ui-item">
        <div class="page-h3">H3 reg / LT CYR 55 Roman</div>
      </div>
      <div class="ui-item">
        <div class="page-h4 m-medium m-upp">
          H4 uppercase / LT CYR 65 Medium
        </div>
      </div>
      <div class="ui-item">
        <div class="page-text">Body 1 / LT CYR 55 Roman</div>
      </div>
      <div class="ui-item">
        <div class="page-text m-lh">Body 1 LH 150% / LT CYR 55 Roman</div>
      </div>
      <div class="ui-item">
        <div class="page-text m-medium">Body 1 / Bold LT CYR 65 Medium</div>
      </div>
      <div class="ui-item">
        <div class="page-text m-medium m-fs12">
          Body 4 bold / LT CYR 65 Medium
        </div>
      </div>
      <div class="ui-item">
        <div class="page-text m-fs12">Body 4 / LT CYR 55 Roman</div>
      </div>
      <div class="ui-item">
        <ui-link :to="{ name: 'news' }" :icon="'arrow-xs-right'" class="m-dark"
          >Все новости</ui-link
        >
      </div>
      <div class="ui-item">
        <div style="padding: 20px; background-color: #23262C;">
          <ui-link :to="{ name: 'news' }" :icon="'arrow-xs-right'"
            >Все новости</ui-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiTypography'
}
</script>

<style lang="postcss" scoped>
.ui-title {
  font-size: 16px;
  line-height: 45px;
  color: $purple;
  margin-bottom: 15px;
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
  flex: 0 0 100%;
}
</style>
