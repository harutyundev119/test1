<template>
  <div class="cardEvent">
    <nuxt-link
      :to="{ name: 'events-slug', params: { slug: event.slug } }"
      class="cardEvent__link"
    ></nuxt-link>
    <div class="cardEvent__col">
      <div class="cardEvent__date  page-h1 m-upp">
        {{ dateParse }}
      </div>
    </div>
    <div class="cardEvent__col">
      <nuxt-link
        :to="{ name: 'events-slug', params: { slug: event.slug } }"
        class="cardEvent__img"
      >
        <client-only>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <div
                :style="{
                  backgroundImage: `url(${event.images.square_image})`
                }"
                class="cardEvent__image"
              >
                <div class="cardEvent__button">
                  <kinesis-element :strength="20" type="depth">
                    <ui-button class="m-white m-block">Узнать больше</ui-button>
                  </kinesis-element>
                </div>
              </div>
            </kinesis-element>
          </kinesis-container>
        </client-only>
      </nuxt-link>
    </div>
    <div class="cardEvent__col">
      <div class="cardEvent__content ">
        <div class="cardEvent__description page-h4 m-upp m-medium">
          {{ event.title }}
        </div>
        <div class="cardEvent__tag page-text">Читать подробнее</div>
      </div>
    </div>
    <div class="cardEvent__icon">
      <ui-icon icon="arrow" class="m-w16"></ui-icon>
    </div>
  </div>
</template>

<script>
import { DateParse } from '@/helpers/dateParser'
export default {
  name: 'CardEvent',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateParse() {
      return DateParse({
        from: this.event.date_from,
        to: this.event.date_to
      })
    }
  }
}
</script>

<style lang="postcss">
.cardEvent {
  position: relative;
  background: transparent;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #2c2f36;
  @media (--s) {
    &:hover {
      ^&__icon {
        opacity: 1;
      }
      ^&__description {
        color: $white;
      }
      ^&__date {
        color: $white;
      }
      ^&__button {
        opacity: 1;
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
  &__link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  &__icon {
    font-size: 12px;
    opacity: 0;
    position: absolute;
    top: 48px;
    right: 0px;
    transition: 0.4s;
    .svg {
      fill: $white;
    }
  }
  &__date {
    color: #969fa3;
    transition: 0.4s;
    @media (--sm) {
      margin-bottom: 16px;
    }
  }
  &__img {
    width: 100%;
    display: block;
    position: relative;
    z-index: 3;
    @media (--sm) {
      margin-bottom: 24px;
    }
  }
  &__image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 207px;
    position: relative;
    filter: grayscale(100%);
    &:hover {
      filter: grayscale(0%);
    }
    img {
      display: block;
      width: 100%;
    }
  }
  &__button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 180px;
    opacity: 0;
    transition: 0.4s;
    @media (--xsm) {
      display: none;
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
  }
  &__tag {
    color: #969fa3;
    display: block;
    @media (--m) {
      display: none;
    }
  }
  &__col {
    @media (--m) {
      padding: 0 20px;
      flex: 0 0 33.33333%;
    }
  }
}
</style>
