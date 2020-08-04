<template>
  <div class="aboutContact">
    <div v-for="(contact, i) in contacts" :key="i" class="aboutContact__item">
      <div class="aboutContact__name">{{ contact.name }}</div>
      <div class="aboutContact__position">{{ contact.description }}</div>
      <div class="aboutContact__mail">
        <a href="#">{{ contact.email }}</a>
      </div>
      <div class="aboutContact__phone">{{ contact.phone }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AboutContact',
  computed: {
    ...mapState('contacts', ['contacts'])
  }
}
</script>

<style lang="postcss">
.aboutContact {
  &__item {
    &:not(:last-child) {
      margin-bottom: 40px;
      @media (--m) {
        margin-bottom: 64px;
      }
    }
  }
  &__name {
    font-family: $f-2;
    font-size: 14px;
    line-height: 17px;
    color: $white;
    margin-bottom: 4px;
  }
  &__position {
    font-size: 12px;
    line-height: 14px;
    color: #969fa3;
    margin-bottom: 24px;
    max-width: 280px;
  }
  &__mail {
    font-family: $f-2;
    font-size: 18px;
    line-height: 1;
    color: #969fa3;
    margin-bottom: 8px;
    a {
      color: inherit;
    }
    @media (--s) {
      font-size: 32px;
      line-height: 1.2;
    }
  }
  &__phone {
    font-family: $f-2;
    font-size: 18px;
    line-height: 1;
    color: #969fa3;
    @media (--s) {
      font-size: 22px;
      line-height: 26px;
    }
  }
}
</style>
