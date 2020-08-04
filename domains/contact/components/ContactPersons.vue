<template>
  <div class="contactPersons">
    <div
      v-for="(contact, i) in contacts"
      :key="i"
      class="contactPersons__content"
    >
      <div class="contactPersons__person">
        <div class="contactPersons__name">{{ contact.name }}</div>
        <div class="contactPersons__position page-text m-fs12">
          {{ contact.description }}
        </div>
      </div>
      <div class="contactPersons__contacts">
        <div class="contactPersons__mail">
          <a href="#" class="contactPersons__link">{{ contact.email }}</a>
        </div>
        <div class="contactPersons__phone">{{ contact.phone }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ContactPersons',
  computed: {
    ...mapState('contacts', ['contacts'])
  }
}
</script>

<style lang="postcss">
.contactPersons {
  position: relative;
  &__content {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
    @media (--m) {
      flex-direction: row;
      margin-bottom: 72px;
    }
  }
  &__person {
    @media (--m) {
      width: 192px;
      margin-right: 33px;
    }
  }
  &__name {
    font-size: 14px;
    line-height: 17px;
    color: $white;
    font-family: $f-2;
    margin-bottom: 4px;
    @media (--m) {
      margin-bottom: 8px;
    }
  }
  &__position {
    color: #969fa3;
    @media (--m) {
      color: $grey;
    }
    @media (--sm) {
      margin-bottom: 24px;
    }
  }
  &__link,
  &__phone {
    font-size: 18px;
    line-height: 1;
    color: #969fa3;
    font-family: $f-2;
    @media (--m) {
      color: $grey;
      font-size: 45px;
    }
  }
  &__link {
    position: relative;
    @media (--m) {
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 7px;
        height: 2px;
        width: 100%;
        background: $grey;
      }
    }
  }
  &__mail {
    margin-bottom: 8px;
    @media (--l) {
      margin-bottom: 24px;
    }
  }
}
</style>
