<template>
  <div>
    <div class="ui-title">
      Ui Forms
    </div>
    <div class="ui-subtitle">
      Ui Input
    </div>
    <div class="ui-form-group m-dark">
      <ui-input v-model="value" placeholder="E-mail"></ui-input>
    </div>
    <div class="ui-subtitle">
      Ui Textarea
    </div>
    <div class="ui-form-group m-dark">
      <ui-textarea v-model="value" placeholder="Сообщение"></ui-textarea>
    </div>
    <div class="ui-subtitle">
      Ui Drop Filter
    </div>
    <div class="ui-form-group">
      <ui-drop-filter
        :links="select"
        track="title"
        color="m-white"
      ></ui-drop-filter>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiForms',
  data: () => ({
    value: null,
    select: [
      {
        title: 'Прокладки головки блока цилиндров'
      },
      {
        title: 'Рабочие тормозные цилиндры'
      },
      {
        title: 'Крестовины карданного вала'
      },
      {
        title: 'Подушки и опоры двигателя'
      },
      {
        title: 'Рычаги передней подвески'
      },
      {
        title: 'Наконечники рулевых тяг'
      },
      {
        title: 'Диски переднего тормоза'
      },
      {
        title: 'Провода высоковольтные'
      },
      {
        title: 'Опоры передней стойки'
      },
      {
        title: 'Комплекты штанг подвески'
      }
    ]
  })
}
</script>

<style lang="postcss" scoped>
.ui-title {
  font-size: 16px;
  line-height: 45px;
  color: $purple;
  margin-bottom: 15px;
}
.ui-subtitle {
  font-size: 16px;
  line-height: 1.2;
  color: $yellow;
  margin: 15px 0 5px;
}
.ui-form-group {
  padding: 15px;
  &.m-dark {
    background-color: $dark;
  }
}
</style>
