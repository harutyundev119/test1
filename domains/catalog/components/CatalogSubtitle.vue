<template>
  <div :class="{ 'm-gradient': isGradient }" class="catalogSubtitle">
    <div class="container">
      <div v-parallax="0.25" class="page-headline m-white">
        <slot></slot>
      </div>
    </div>
    <div v-parallax="0.25" class="catalogSubtitle__bg">
      <div :class="[`m-bg-${categoryId}`]" class="catalogSubtitle__image"></div>
      <div class="catalogSubtitle__back">
        <svg
          width="154"
          height="152"
          viewBox="0 0 154 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_df)">
            <path
              d="M74.4222 68.2039L63.8042 73.4868L69.0344 87.2933L79.3308 88.5334L89.0655 81.0099L84.7011 66.6184L74.4222 68.2039Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter1_dd)">
            <path
              d="M74.4222 68.2039L63.8042 73.4868L69.0344 87.2933L79.3308 88.5334L89.0655 81.0099L84.7011 66.6184L74.4222 68.2039Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_df"
              x="0.990234"
              y="0.639908"
              width="152.194"
              height="151.281"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="30" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect2_foregroundBlur"
              />
            </filter>
            <filter
              id="filter1_dd"
              x="0.990234"
              y="0.639908"
              width="152.194"
              height="151.281"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="30" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow"
                result="effect2_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="catalogSubtitle__middle">
        <svg
          width="159"
          height="154"
          viewBox="0 0 159 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_df)">
            <path
              d="M83.9473 63.4773L65.3675 61L60 83.7087L72.3865 94.4437L91.7921 93.205L98.8112 70.4963L83.9473 63.4773Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter1_dd)">
            <path
              d="M83.9473 63.4773L65.3675 61L60 83.7087L72.3865 94.4437L91.7921 93.205L98.8112 70.4963L83.9473 63.4773Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_df"
              x="0"
              y="0"
              width="158.811"
              height="153.444"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="30" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect2_foregroundBlur"
              />
            </filter>
            <filter
              id="filter1_dd"
              x="0"
              y="0"
              width="158.811"
              height="153.444"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="30" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow"
                result="effect2_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="catalogSubtitle__front">
        <svg
          width="186"
          height="172"
          viewBox="0 0 186 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd)">
            <path
              d="M100.696 65.21L69.1216 61L60 99.5913L81.0498 117.834L114.028 115.729L125.956 77.1382L100.696 65.21Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd"
              x="0"
              y="0"
              width="185.956"
              height="176.834"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="30" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow"
                result="effect2_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogSubtitle',
  props: {
    isGradient: {
      type: Boolean,
      default: false
    },
    categoryId: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.catalogSubtitle {
  min-height: 220px;
  display: flex;
  align-items: center;
  @media (--s) {
    min-height: 398px;
  }
  &.m-gradient {
    background: radial-gradient(
        178.41% 173.35% at -31.49% 60.51%,
        rgba(0, 190, 214, 0.07) 0%,
        rgba(24, 25, 27, 0) 100%
      ),
      radial-gradient(
        72.47% 99.83% at 95.76% 100%,
        rgba(0, 190, 214, 0.12) 1.05%,
        rgba(24, 25, 27, 0) 100%
      );
  }
  &__back {
    position: absolute;
    z-index: 1;
    top: 20px;
    right: 90px;
  }
  &__middle {
    bottom: 170px;
    left: 20px;
    position: absolute;
    z-index: 2;
  }
  &__front {
    bottom: 100px;
    right: 0;
    position: absolute;
    z-index: 4;
  }
  &__image {
    background-image: url('~assets/images/catalog/subtitle-image.png');
    background-position: right -50px top 0px;
    background-repeat: no-repeat;
    background-size: 231px auto;
    width: 624px;
    height: 524px;
    @media (--s) {
      background-size: contain;
      background-position: center;
    }

    &.m-bg- {
      &1 {
        background-image: url('~assets/images/catalog/subtitle/rashod.png');
      }
      &2 {
        background-image: url('~assets/images/catalog/subtitle/mechzap.png');
      }
      &3 {
        background-image: url('~assets/images/catalog/subtitle/smazku.png');
      }
      &4 {
        background-image: url('~assets/images/catalog/subtitle/avtohimia.png');
      }
      &5 {
        background-image: url('~assets/images/catalog/subtitle/uhod.png');
      }
      &6 {
        background-image: url('~assets/images/catalog/subtitle/avtostil.png');
      }
      &7 {
        background-image: url('~assets/images/catalog/subtitle/komfort.png');
      }
      &8 {
        background-image: url('~assets/images/catalog/subtitle/pomosh.png');
      }
      &9 {
        background-image: url('~assets/images/catalog/subtitle/otdih.png');
      }
      &10 {
        background-image: url('~assets/images/catalog/subtitle/zvuk.png');
      }
      &11 {
        background-image: url('~assets/images/catalog/subtitle/elektroob.png');
      }
      &12 {
        background-image: url('~assets/images/catalog/subtitle/bezop.png');
      }
      &13 {
        background-image: url('~assets/images/catalog/subtitle/instrum.png');
      }
    }
  }
  &__bg {
    width: 624px;
    height: 524px;
    position: absolute;
    top: 0px;
    right: -20px;
    z-index: 3;
  }
}
</style>
