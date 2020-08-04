<template>
  <div class="contentQuote">
    <div class="container">
      <div class="contentQuote__content">
        <div v-html="content['text']" class="contentQuote__text"></div>
        <div class="contentQuote__signature page-text m-medium m-fs12">
          {{ content['sub-text'] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentQuote',
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="postcss">
.contentQuote {
  background: $dark;
  padding-top: 75px;
  padding-bottom: 69px;
  @media (--s) {
    padding-top: 64px;
    padding-bottom: 88px;
  }
  &__content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    &:before {
      content: '“';
      color: #c6cccf;
      font-size: 96px;
      line-height: 96px;
      font-family: $f-1;
      position: absolute;
      left: 0;
      top: -48px;
      @media (--s) {
        left: -40px;
        top: -32px;
      }
      @media (--m) {
        left: -56px;
      }
    }
    &:after {
      content: '”';
      color: #c6cccf;
      font-size: 96px;
      line-height: 96px;
      font-family: $f-1;
      position: absolute;
      right: 0;
      bottom: -112px;
      @media (--m) {
        right: 23px;
        bottom: -120px;
      }
    }
  }

  &__text {
    font-family: $f-3;
    color: $white;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 300;
    margin-bottom: 16px;
    white-space: pre-wrap;
    @media (--s) {
      font-size: 28px;
      margin-bottom: 27px;
    }
    @media (--xsm) {
      text-align: center;
    }
  }
  &__signature {
    color: #6f7b82;
    @media (--s) {
      color: $grey;
    }
    @media (--xsm) {
      text-align: center;
    }
  }
}
</style>
