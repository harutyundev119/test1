<template>
  <div class="contactFeedback">
    <div class="contactFeedback__title">Обратная связь</div>
    <div class="contactFeedback__subtitle">
      Ответ предоставляется в течение 5 рабочих дней
    </div>
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
      class="contactFeedback__form"
    >
      <div class="contactFeedback__items">
        <validation-provider
          v-slot="{ errors }"
          vid="top"
          name="тема"
          rules="required"
          class="contactFeedback__item m-1-1"
          tag="div"
        >
          <v-select
            :searchable="false"
            :clearable="false"
            v-model="stateTopic"
            :options="topics"
            :class="{ 'm-error': errors.length !== 0 }"
            placeholder="Тема вопроса *"
          >
            <template #open-indicator="{ attributes }">
              <span v-bind="attributes">
                <ui-icon icon="arrow-empty-down" class="m-w16"></ui-icon>
              </span>
            </template>
          </v-select>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          vid="vihicle"
          name="автомобиль"
          rules="required"
          class="contactFeedback__item m-1-1"
          tag="div"
        >
          <v-select
            :value="stateVehicle"
            :clearable="false"
            :options="brands"
            :class="{ 'm-error': errors.length !== 0 }"
            @input="(e) => (stateVehicle = e.title)"
            placeholder="Выберите автомобиль *"
            label="title"
          >
            <template #open-indicator="{ attributes }">
              <span v-bind="attributes">
                <ui-icon icon="arrow-empty-down" class="m-w16"></ui-icon>
              </span>
            </template>
          </v-select>
        </validation-provider>
        <div class="contactFeedback__item m-1-1">
          <validation-provider
            v-slot="{ errors }"
            vid="vin"
            name="vin"
            class="contactFeedback__input"
            tag="div"
          >
            <ui-input
              v-model="stateVin"
              :errors="errors"
              placeholder="VIN автомобиля"
            ></ui-input>
          </validation-provider>
        </div>
        <div class="contactFeedback__item m-1-3">
          <validation-provider
            v-slot="{ errors }"
            vid="name"
            name="ФИО"
            rules="required"
            class="contactFeedback__input"
            tag="div"
          >
            <ui-input
              v-model="stateName"
              :errors="errors"
              placeholder="ФИО (полностью)*"
            ></ui-input>
          </validation-provider>
        </div>
        <div class="contactFeedback__item m-1-3">
          <validation-provider
            v-slot="{ errors }"
            vid="city"
            name="город"
            rules="required"
            class="contactFeedback__input"
            tag="div"
          >
            <ui-input
              v-model="stateCity"
              :errors="errors"
              placeholder="Ваш город*"
            ></ui-input>
          </validation-provider>
        </div>
        <div class="contactFeedback__item m-1-3">
          <validation-provider
            v-slot="{ errors }"
            vid="email"
            name="E-mail"
            rules="required|email"
            class="contactFeedback__input"
            tag="div"
          >
            <ui-input
              v-model="stateEmail"
              :errors="errors"
              placeholder="E-mail*"
            ></ui-input>
          </validation-provider>
        </div>
        <validation-provider
          v-slot="{ errors }"
          vid="message"
          name="Сообщение"
          rules="required"
          class="contactFeedback__item m-1-1"
          tag="div"
        >
          <ui-textarea
            :errors="errors"
            v-model="stateMessage"
            placeholder="Сообщение"
            rows="4"
          ></ui-textarea>
        </validation-provider>
      </div>
      <div class="contactFeedback__button">
        <ui-button
          :disabled="invalid"
          @click="sendFeedback"
          class="m-white m-block m-movementInf"
        >
          <span class="movementInf">Отправить сообщение</span>
          <span class="movementInfText">Отправить сообщение</span>
        </ui-button>
      </div>
    </validation-observer>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
export default {
  name: 'ContactFeedback',
  components: {
    vSelect
  },
  data: () => ({
    value: '',
    options: []
  }),
  computed: {
    ...mapState('contacts/feedback', [
      'topics',
      'topic',
      'vehicle',
      'vin',
      'name',
      'city',
      'email',
      'message'
    ]),
    ...mapState('catalog/brands', ['brands']),
    stateTopic: {
      get() {
        return this.topic
      },
      set(value) {
        const prop = 'topic'
        this.setFeedbackProp({ prop, value })
      }
    },
    stateVehicle: {
      get() {
        return this.vehicle
      },
      set(value) {
        const prop = 'vehicle'
        this.setFeedbackProp({ prop, value })
      }
    },
    stateVin: {
      get() {
        return this.vin
      },
      set(value) {
        const prop = 'vin'
        this.setFeedbackProp({ prop, value })
      }
    },
    stateName: {
      get() {
        return this.name
      },
      set(value) {
        const prop = 'name'
        this.setFeedbackProp({ prop, value })
      }
    },
    stateCity: {
      get() {
        return this.city
      },
      set(value) {
        const prop = 'city'
        this.setFeedbackProp({ prop, value })
      }
    },
    stateEmail: {
      get() {
        return this.email
      },
      set(value) {
        const prop = 'email'
        this.setFeedbackProp({ prop, value })
      }
    },
    stateMessage: {
      get() {
        return this.message
      },
      set(value) {
        const prop = 'message'
        this.setFeedbackProp({ prop, value })
      }
    }
  },
  methods: {
    ...mapMutations('contacts/feedback', ['setFeedbackProp']),
    ...mapActions('contacts/feedback', ['sendFeedback'])
  }
}
</script>

<style lang="postcss">
.contactFeedback {
  &__title {
    text-align: left;
    font-family: $f-2;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
    margin-bottom: 8px;
    @media (--s) {
      font-size: 28px;
      line-height: 34px;
      text-align: center;
    }
  }
  &__subtitle {
    margin-bottom: 32px;
    font-size: 12px;
    line-height: 18px;
    color: #969fa3;
    font-family: $f-1;
    text-align: left;
    width: 192px;
    @media (--s) {
      width: 100%;
      font-size: 12px;
      line-height: 12px;
      margin-bottom: 48px;
      text-align: center;
    }
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: -20px;
    margin-bottom: 20px;
    @media (--m) {
      margin-bottom: 25px;
    }
  }
  &__item {
    padding: 20px;
    flex: 0 0 100%;
    &.m-1-3 {
      @media (--m) {
        flex: 0 0 33.33333%;
      }
    }
  }
  &__button {
    max-width: 276px;
    @media (--xsm) {
      width: 100%;
    }
  }
  .vs__dropdown-toggle {
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid #555e65;
  }
  .vs__selected-options {
    padding: 0;
  }
  .vs__search {
    padding: 0;
    color: $white;
    font-size: 16px;
  }
  .vs__selected {
    color: $white;
    padding: 0;
    font-size: 16px;
  }
  .vs__open-indicator {
    .svg {
      fill: $white;
      font-size: 12px;
      width: 13px;
    }
  }
  .vs__dropdown-menu {
    background-color: #23262c;
    border: 1px solid #555e65;
    box-sizing: border-box;
    border-radius: 0px;
    padding: 12px 24px;
  }
  .vs__dropdown-option {
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    padding: 12px 0;
    &.vs__dropdown-option--selected {
      background-color: transparent;
    }
    &.vs__dropdown-option--highlight {
      background-color: transparent;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  .m-movementInf {
    .movementInfText {
      visibility: visble;
    }
    .movementInf {
      visibility: hidden;
    }
    &:hover {
      .movementInf {
        visibility: visible;
      }
    }
  }
}
</style>
