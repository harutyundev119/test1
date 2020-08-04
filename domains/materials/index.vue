<template>
  <main class="materials">
    <div class="container">
      <div class="page-top">
        <div class="page-bread">
          <bread class="m-dark"></bread>
        </div>
        <div class="page-line">
          <div class="dealers__title page-h2 m-white">POS-материалы</div>
        </div>
      </div>
      <div class="materials__body">
        <div
          v-infinite-scroll="infiniteHandler"
          :infinite-scroll-throttle-delay="1000"
          class="table"
        >
          <div class="table__row">
            <div class="table__col m-caption m-preview">Превью</div>
            <div class="table__col m-caption">Название</div>
          </div>
          <a
            v-for="item in Pos"
            :key="item.id"
            :href="item.url"
            target="_blank"
            class="table__row"
          >
            <div class="table__col m-preview">
              <div
                v-if="item.custom_preview !== null"
                :style="{ backgroundImage: `url(${item.custom_preview})` }"
                class="table__image"
              ></div>
              <div v-else class="table__image">
                <img :src="getImage(item.type)" />
              </div>
            </div>
            <div class="table__col">
              <div class="materials__item">
                <div>{{ item.title }}</div>
                <div class="materials__element">
                  <span class="materials__file"
                    >{{ item.type }} ({{ formatSize(item.size) }})</span
                  >
                  <ui-icon icon="download" class="m-w16"></ui-icon>
                </div>
              </div>
              <div
                v-if="item.custom_preview !== null"
                class="materials__preview"
              >
                <img :src="item.custom_preview" />
              </div>
              <div v-else class="materials__preview m-default">
                <img :src="getImage(item.type)" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div v-if="IsScrollPagination" class="materials__loading">
        <loading></loading>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import img from '@/assets/images/sale/bg.png'
import Bread from '@/components/global/bread/Bread.vue'
import Loading from '@/components/global/loading/Loading.vue'
export default {
  name: 'Materials',
  components: {
    Bread,
    Loading
  },
  data: () => ({
    image: img
  }),
  computed: {
    ...mapState({
      Pos: (state) => state.pos.pos,
      DefaultLimit: (state) => state.pos.defaultLimit,
      IsLoading: (state) => state.pos.isLoading,
      MaxOffset: (state) =>
        state.pos.pagination ? state.pos.pagination.total : 100
    }),
    ...mapGetters({
      IsScrollPagination: 'pos/isScrollPagination'
    })
  },
  methods: {
    ...mapMutations({
      setLoading: 'pos/setLoading'
    }),
    formatSize(length) {
      let i = 0
      const type = ['б', 'Кб', 'Мб', 'Гб', 'Тб', 'Пб']
      while ((length / 1000) | 0 && i < type.length - 1) {
        length /= 1024
        i++
      }
      return length.toFixed(2) + ' ' + type[i]
    },
    getImage(image) {
      return require(`@/assets/images/icons/${image}.svg`)
    },
    infiniteHandler() {
      if (!this.IsScrollPagination) return null
      if (this.IsLoading) return null
      this.setLoading(true)
      const currentOffset = Number(this.$route.query.offset) || 0
      const offset =
        this.Pos.length === 0
          ? currentOffset
          : currentOffset + this.DefaultLimit
      if (offset > this.MaxOffset || offset > this.MaxOffset - 10) return null
      this.$router.push({
        name: 'materials',
        query: {
          offset
        }
      })
    }
  }
}
</script>

<style lang="postcss">
.materials {
  .table__row:hover {
    ^&__element {
      @media (--s) {
        opacity: 1;
      }
    }

    ^&__preview {
      @media (--m) {
        z-index: 2;
        opacity: 1;
      }
    }
  }
  &__item {
    display: flex;
    @media (--xsm) {
      justify-content: space-between;
    }
  }
  &__element {
    @media (--s) {
      opacity: 0;
      transition: 0.4s;
      margin-left: 21px;
    }

    .svg {
      fill: #6f7b82;
      font-size: 12px;
    }
  }
  &__file {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #6f7b82;
    @media (--xsm) {
      display: none;
    }
  }
  &__preview {
    position: absolute;
    top: 50%;
    right: 48px;
    transform: translateY(-50%);
    opacity: 0;
    z-index: -1;
    transition: 0.4s;
    &.m-default {
      width: 224px;
      height: 301px;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  /*
  &__preview {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 48px;
    width: 376px;
    height: 470px;
    z-index: -1;
    transition: 0.4s;
    opacity: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    &.m-default {
      width: 224px;
      height: 301px;
    }
    img {
      max-width: 224px;
      max-height: 301px;
    }
  }
  */
  &__loading {
    margin-top: 40px;
    @media (--m) {
      margin-top: 100px;
    }
  }
  .table__col {
    position: relative;
  }
  .table__image {
    text-align: center;
    img {
      max-width: 32px;
      max-height: 32px;
    }
  }
}
</style>
