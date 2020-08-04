<template>
  <footer-base>
    <div class="footerSite">
      <nuxt-link :to="{ name: 'index' }" class="footerSite__logo">
        <svg
          viewBox="0 0 100 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2.2981H3.52356V18.6148H14.0677V21.7215H0V2.2981Z"
            class="m-color"
          />
          <path
            d="M20.4777 13.4412V18.6533H31.9641V21.7022H16.9541V2.2981H31.8512V5.34704H20.4777V10.3922"
            class="m-color"
          />
          <path
            d="M68.0955 2.23389H71.3603L80.1857 21.7664H76.4631L74.426 17.0871H64.9435L62.8798 21.7664H59.27L68.0955 2.23389ZM73.1386 14.0638L69.6748 6.30342L66.2375 14.0638H73.1386Z"
            class="m-color"
          />
          <path
            d="M82.9858 2.2981H91.9241C96.6222 2.2981 99.3694 4.73725 99.3694 8.47943C99.3694 11.6888 97.3787 13.6145 94.585 14.3527L99.9998 21.7022H95.8458L90.8624 14.9368H86.5094V21.7022H82.9858V2.2981ZM91.6653 11.9263C94.1869 11.9263 95.7927 10.6426 95.7927 8.62706C95.7927 6.61155 94.2466 5.41765 91.6388 5.41765H86.5094V11.9199L91.6653 11.9263Z"
            class="m-color"
          />
          <path
            d="M55.0766 15.5657C54.2283 17.3956 52.7568 18.8886 50.9078 19.7954C49.0587 20.7023 46.944 20.9682 44.9168 20.5486C42.8895 20.1291 41.0724 19.0495 39.7688 17.4902C38.4652 15.9309 37.754 13.9862 37.754 11.9808C37.754 9.97542 38.4652 8.03072 39.7688 6.47141C41.0724 4.91209 42.8895 3.83254 44.9168 3.41299C46.944 2.99345 49.0587 3.25931 50.9078 4.16618C52.7568 5.07305 54.2283 6.56605 55.0766 8.39589L58.129 7.06078C57.0237 4.68397 55.148 2.72023 52.7857 1.46687C50.4235 0.213512 47.7034 -0.261214 45.0373 0.114569C42.3712 0.490351 39.9042 1.69618 38.01 3.54948C36.1157 5.40279 34.8972 7.80266 34.5391 10.3857H20.478V13.4347H34.5059C34.8324 16.039 36.0325 18.468 37.9222 20.3496C39.812 22.2313 42.2872 23.4619 44.969 23.853C47.6507 24.2441 50.391 23.7741 52.7703 22.5149C55.1495 21.2558 57.0365 19.277 58.1423 16.8816L55.0766 15.5657Z"
            fill="#00BED6"
          />
        </svg>
      </nuxt-link>
      <div class="footerSite__links">
        <div v-for="(link, i) in links" :key="i" class="footerSite__link">
          <nuxt-link :to="link.to" class="footerSite__link">{{
            link.title
          }}</nuxt-link>
        </div>
      </div>
      <div class="footerSite__right">
        <div class="footerSite__socials">
          <a
            v-if="config.VK_LINK !== null"
            :href="config.VK_LINK"
            class="footerSite__social"
          >
            <ui-icon icon="vk" class="m-w26"></ui-icon>
          </a>
          <a
            v-if="config.OK_LINK !== null"
            :href="config.OK_LINK"
            class="footerSite__social"
          >
            <ui-icon icon="ok" class="m-w26"></ui-icon>
          </a>
          <a
            v-if="config.FB_LINK !== null"
            :href="config.FB_LINK"
            class="footerSite__social"
          >
            <ui-icon icon="fb" class="m-w26"></ui-icon>
          </a>
          <a
            v-if="config.INSTAGRAM_LINK !== null"
            :href="config.INSTAGRAM_LINK"
            class="footerSite__social"
          >
            <ui-icon icon="inst" class="m-w26"></ui-icon>
          </a>
          <a
            v-if="config.YOUTUBE_LINK !== null"
            :href="config.YOUTUBE_LINK"
            class="footerSite__social"
          >
            <ui-icon icon="yt" class="m-w26"></ui-icon>
          </a>
        </div>
        <div class="footerSite__bottom">
          <span class="footerSite__copy page-text m-fs12 m-grey">
            LECAR © 2020
          </span>
        </div>
      </div>
    </div>
  </footer-base>
</template>

<script>
import { mapState } from 'vuex'
import FooterBase from './base/FooterBase.vue'
export default {
  name: 'FooterSite',
  components: {
    FooterBase
  },
  data: () => ({
    links: [
      { title: 'Каталог товаров', to: { name: 'catalog' } },
      { title: 'Новости', to: { name: 'news' } },
      { title: 'Акции', to: { name: 'sales' } },
      // { title: 'Мероприятия', to: { name: 'events' } },
      { title: 'О бренде', to: { name: 'about' } },
      { title: 'POS-материалы', to: { name: 'materials' } },
      { title: 'Дилерская сеть', to: { name: 'dealers' } },
      { title: 'Видеоматериалы', to: { name: 'videos' } },
      { title: 'Контакты', to: { name: 'contact' } }
    ]
  }),
  computed: {
    ...mapState('config', ['config'])
  }
}
</script>

<style lang="postcss">
.footerSite {
  padding: 37px 0 62px;
  @media (--m) {
    display: flex;
    padding: 40px 0 40px;
  }
  @media (--l) {
    padding: 35px 0 40px;
  }
  &__logo {
    margin-right: auto;
    width: 100px;
    display: block;

    @media (--sm) {
      margin-bottom: 36px;
    }
    @media (--m) {
      margin-right: 30px;
    }
    @media (--l) {
      flex: 0 0 131px;
      margin-bottom: 0px;
      margin-right: 132px;
    }
    svg {
      display: block;
      width: 100%;
      path.m-color {
        fill: $dark;
      }
    }
  }
  &__links {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 -4px;
    max-width: 320px;
    @media (--sm) {
      margin-bottom: 32px;
    }
  }
  &__link {
    flex: 0 0 50%;
    margin: 4px 0;
    padding-right: 5px;
    a {
      font-size: 16px;
      line-height: 19px;
      color: $dark;
    }
  }
  &__right {
    @media (--m) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-left: auto;
    }
  }
  &__socials {
    margin: 0 -8px;
    display: flex;
    margin-bottom: 32px;
    @media (--s) {
      margin-bottom: 53px;
    }
  }
  &__social {
    margin: 0 8px;
    font-size: 16px;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    .svg {
      fill: $dark;
      font-size: 26px;
    }
  }
  &__bottom {
    @media (--sm) {
      display: flex;
      flex-direction: column;
    }
    @media (--m) {
      text-align: right;
    }
  }
  &__policy {
    margin-bottom: 32px;
    text-decoration: underline;
    @media (--m) {
      margin-bottom: 0;
    }
  }
  &__copy {
    white-space: nowrap;
    @media (--m) {
      margin-left: 23px;
    }
  }
}
</style>
