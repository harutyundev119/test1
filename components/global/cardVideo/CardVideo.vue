<template>
  <div class="cardVideo">
    <div class="cardVideo__col">
      <div class="cardVideo__point page-h4 m-upp m-medium">
        {{ video.title }}
      </div>
    </div>
    <div class="cardVideo__col">
      <div
        @click="isPlay = true"
        v-tilt="{ speed: 1000, perspective: 1000, max: 6 }"
        class="cardVideo__img"
      >
        <img :src="video.preview" alt="" class="cardVideo__image" />
        <div class="cardVideo__button">
          <div class="m-movementInf">
            <span class="cardVideo__arrows movementInf">
              <ui-icon icon="play" class="m-w12"></ui-icon>
              <ui-icon icon="play" class="m-w12"></ui-icon>
              <ui-icon icon="play" class="m-w12"></ui-icon>
            </span>
            <ui-button-square
              class="cardVideo__btn m-w32 m-dark movementInfText"
              icon="play"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="cardVideo__col">
      <div class="cardVideo__content ">
        <div
          :class="{ 'm-full': isMore }"
          v-html="video.description"
          class="cardVideo__description page-text"
        ></div>
        <div
          v-if="isMore"
          @click="isHidden()"
          class="cardVideo__more page-text"
        >
          Свернуть
        </div>
        <div v-else @click="isVisible()" class="cardVideo__more page-text">
          Читать подробнее
        </div>
      </div>
    </div>
    <div v-show="isPlay" v-scroll-lock="isPlay" class="cardVideo__video">
      <client-only>
        <youtube ref="youtube" :video-id="video.youtube_id"></youtube>
      </client-only>
      <div @click="isPlay = false" class="cardVideo__close">
        <ui-icon icon="delete" class="m-w24"></ui-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardVideo',
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isMore: false,
    isPlay: false
  }),
  watch: {
    isPlay(val) {
      if (val) this.$refs.youtube.player.playVideo()
      else this.$refs.youtube.player.stopVideo()
    }
  },
  methods: {
    isVisible() {
      this.isMore = true
    },
    isHidden() {
      this.isMore = false
    }
  }
}
</script>

<style lang="postcss">
.cardVideo {
  position: relative;
  background: transparent;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #2c2f36;
  @media (--s) {
    &:hover {
      ^&__description {
        color: $white;
      }
      ^&__point {
        color: $white;
      }
    }
  }
  @media (--sm) {
    width: 100%;
  }
  @media (--m) {
    flex-direction: row;
    padding: 48px 0;
  }

  &__point {
    color: #969fa3;
    transition: 0.4s;
    @media (--sm) {
      margin-bottom: 16px;
    }
    @media (--m) {
      font-size: 28px;
      line-height: 34px;
    }
  }
  &__img {
    width: 100%;
    position: relative;
    cursor: pointer;
    img {
      display: block;
      width: 100%;
    }
    @media (--sm) {
      margin-bottom: 24px;
    }
    &:hover {
      ^^&__image {
        filter: grayscale(0%);
      }
    }
  }
  &__image {
    filter: grayscale(100%);
  }
  &__button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0s;
    background-color: #23262c;
    border-color: #23262c;
    &:hover {
      background-color: #ffffff;
      border-color: #ffffff;
      width: 96px;
    }
  }
  &__arrows {
    transition: 0.4s;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 54px;
    z-index: 1;
    .svg {
      font-size: 12px;
      fill: $dark;
    }
    .icon {
      margin: 0 3px;
      display: block;
    }
  }
  &__btn {
    transition: 0s;
    z-index: 1;
    position: relative;
    &:hover {
      width: 96px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    @media (--sm) {
      align-items: flex-start;
      padding-bottom: 25px;
    }
  }
  &__description {
    color: #969fa3;
    margin-bottom: 16px;
    transition: 0.4s;
    line-height: 24px;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    &.m-full {
      overflow: auto;
      display: block;
    }
  }
  &__more {
    color: #969fa3;
    display: block;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: $white;
    }
  }
  &__col {
    @media (--m) {
      padding: 0 20px;
      flex: 0 0 33.33333%;
    }
  }
  &__video {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: #23262c;
    padding: 40px 20px;
    @media (--s) {
      padding: 40px 48px;
    }
    @media (--l) {
      padding: 40px 96px;
    }
    iframe {
      width: 100%;
      height: calc(100vh - 80px);
    }
  }
  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    .svg {
      font-size: 24px;
      fill: #969fa3;
    }
  }
}
</style>
