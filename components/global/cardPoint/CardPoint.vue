<template>
  <div class="cardPoint">
    <div
      :style="{ backgroundImage: `url(${image})` }"
      class="cardPoint__image"
    ></div>

    <div class="cardPoint__content">
      <div class="cardPoint__name page-text m-white">ИП Курепин М.А</div>
      <div class="cardPoint__address page-text m-fs12">
        Россия, Набережные Челны, Проспект мира 18
      </div>
      <div class="cardPoint__contact">
        <div class="cardPoint__icon">
          <ui-icon icon="phone" class="m-w16"></ui-icon>
        </div>
        <a
          href="phone:+79864343432"
          class="cardPoint__number page-text m-white"
        >
          + 7 986 434 34 32
        </a>
      </div>
      <div class="cardPoint__contact">
        <div class="cardPoint__icon">
          <ui-icon icon="mail" class="m-w16"></ui-icon>
        </div>
        <a
          href="mailto:kurep@gmail.com"
          class="cardPoint__email page-text m-white"
        >
          kurep@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import img from '@/assets/images/network/bgcardpoint.png'
export default {
  name: 'CardPoint',
  data: () => ({
    image: img
  })
}
</script>

<style lang="postcss">
.cardPoint {
  width: 300px;
  background-color: #555e65;
  position: relative;
  @media (--xsm) {
    width: 280px;
  }
  &:after {
    content: '';
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px 7px 0 7px;
    border-color: #555e65 transparent transparent transparent;
  }

  &__content {
    padding: 24px 16px 32px 16px;
  }
  &__image {
    background-size: 100%;
    height: 225px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &__name {
    margin-bottom: 8px;
  }
  &__address {
    margin-bottom: 16px;

    &.page-text {
      color: #969fa3;
    }
  }
  &__contact {
    display: flex;

    .svg-phone {
      font-size: 13px;
    }
    .svg-mail {
      font-size: 9px;
    }
    &:not(:last-child) {
      margin-bottom: 7px;
    }
  }
  &__icon {
    margin-right: 8px;
    .svg {
      fill: #969fa3;
    }
  }
}
</style>
