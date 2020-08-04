.<template>
  <div class="tableSkuImages">
    <div v-if="images.length !== 0" class="tableSkuImages__items">
      <div
        v-for="(image, i) in images"
        :key="i"
        @click="setSkuImages({ images, i })"
        class="tableSkuImages__item"
      >
        <div class="tableSkuImages__image">
          <img :src="image.path" :alt="image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'TableSkuImages',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      index: null
    }
  },
  computed: {
    imagesPop() {
      const data = []
      this.images.forEach((item) => {
        data.push(item.path)
      })
      return data
    }
  },
  methods: {
    ...mapMutations('global', ['setSkuImages'])
  }
}
</script>

<style lang="postcss">
.tableSkuImages {
  position: relative;
  height: 100%;
  &__items {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: auto;
    @media (--xsm) {
      display: none;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar {
      height: 3px;
      width: 3px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $dark;
    }
  }
  &__item {
    height: 230px;
    position: relative;
    cursor: pointer;
  }
  &__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 226px;
    height: 226px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
