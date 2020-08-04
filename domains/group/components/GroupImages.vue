<template>
  <div class="groupImages">
    <div v-if="images.length !== 0" class="groupImages__items">
      <div v-for="(image, i) in images" :key="i" class="groupImages__item">
        <div class="groupImages__image">
          <img :src="image.path" :alt="image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroupImages',
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.groupImages {
  overflow-x: auto;
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
  @media (--xsm) {
    margin: 0 -20px;
  }
  @media (--s) {
    height: 400px;
  }
  &__items {
    display: flex;
    @media (--s) {
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
  &__item {
    flex: none;
    width: 226px;
    height: 320px;
    position: relative;
    @media (--s) {
      width: 280px;
      height: 400px;
    }
    @media (--m) {
      width: 400px;
    }
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
    @media (--m) {
      width: 286px;
      height: 226px;
    }
    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
