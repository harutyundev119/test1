<template>
  <main class="about">
    <div class="about__hero"><about-hero></about-hero></div>
    <div class="about__news"><about-news></about-news></div>
    <div class="container">
      <div class="about__items">
        <div class="about__item">
          <div class="about__subtitle">Что мы предлагаем?</div>
          <div class="about__offer"><about-offer></about-offer></div>
        </div>
        <div class="about__item">
          <div class="about__subtitle">Контакты</div>
          <div class="about__contact"><about-contact></about-contact></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AboutHero from './components/AboutHero.vue'
import AboutNews from './components/AboutNews.vue'
import AboutOffer from './components/AboutOffer.vue'
import AboutContact from './components/AboutContact.vue'
export default {
  name: 'About',
  components: {
    AboutHero,
    AboutNews,
    AboutOffer,
    AboutContact
  },
  async fetch({ store }) {
    await store.dispatch('contacts/getContacts')
  }
}
</script>

<style lang="postcss">
.about {
  padding-bottom: 80px;
  @media (--m) {
    padding-bottom: 144px;
    margin-top: -72px;
  }
  &__hero {
    @media (--xsm) {
      margin-bottom: 80px;
    }
  }
  &__news {
    margin-bottom: 64px;
    @media (--s) {
      margin-top: -90px;
    }
    @media (--m) {
      margin-bottom: 144px;
      margin-top: -290px;
    }
  }
  &__item {
    @media (--m) {
      display: flex;
      align-items: flex-start;
    }
    &:not(:last-child) {
      margin-bottom: 64px;
      @media (--m) {
        margin-bottom: 144px;
      }
    }
  }
  &__subtitle {
    font-family: $f-2;
    font-size: 22px;
    line-height: 26px;
    color: $white;
    margin-bottom: 16px;
    @media (--m) {
      font-family: $f-1;
      font-size: 45px;
      line-height: 1;
      flex: 0 0 426px;
      text-transform: uppercase;
    }
  }
  &__offer,
  &__contact {
    @media (--m) {
      flex: 1 1 100%;
    }
  }
}
</style>
