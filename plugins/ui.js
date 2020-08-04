import Vue from 'vue'

const requireComponent = require.context(
  '@/components/ui',
  false,
  /[\w-]+\.vue$/
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  Vue.component(componentName, componentConfig.default || componentConfig)
})
