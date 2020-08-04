<template>
  <div class="contactSuccess">
    <div class="contactSuccess__title">Спасибо</div>
    <div class="contactSuccess__text">
      Ваше сообщение <span>успешно отправлено</span>. В ближайшее время мы с
      вами свяжемся.
    </div>
    <div class="contactSuccess__button">
      <ui-button @click="clearFeedbackForm" class="m-dark m-border"
        >Хорошо</ui-button
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ContactSuccess',
  methods: {
    ...mapMutations('contacts/feedback', ['clearFeedbackForm'])
  }
}
</script>

<style lang="postcss">
.contactSuccess {
  &__title {
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
    margin-bottom: 40px;
    @media (--s) {
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 64px;
    }
  }
  &__text {
    font-weight: 500;
    font-family: $f-2;
    font-size: 34px;
    line-height: 1.2;
    color: #ffffff;
    margin-bottom: 40px;
    span {
      color: #555e65;
    }
    @media (--s) {
      font-size: 64px;
    }
  }
}
</style>
