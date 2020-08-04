import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () =>
  interopDefault(
    import('@/domains/index' /* webpackChunkName: "domains/index" */)
  )

const News = () =>
  interopDefault(
    import('@/domains/news/index' /* webpackChunkName: "domains/news/index" */)
  )
const New = () =>
  interopDefault(
    import('@/domains/new/index' /* webpackChunkName: "domains/new/index" */)
  )
const Videos = () =>
  interopDefault(
    import(
      '@/domains/videos/index' /* webpackChunkName: "domains/videos/index" */
    )
  )

const Events = () =>
  interopDefault(
    import(
      '@/domains/events/index' /* webpackChunkName: "domains/events/index" */
    )
  )
const Event = () =>
  interopDefault(
    import(
      '@/domains/event/index' /* webpackChunkName: "domains/event/index" */
    )
  )

const Dealers = () =>
  interopDefault(
    import(
      '@/domains/dealers/index' /* webpackChunkName: "domains/dealers/index" */
    )
  )

const Catalog = () =>
  interopDefault(
    import(
      '@/domains/catalog/index' /* webpackChunkName: "domains/catalog/index" */
    )
  )

const Categories = () =>
  interopDefault(
    import(
      '@/domains/catalog/categories' /* webpackChunkName: "domains/catalog/index" */
    )
  )

const CatalogEmpty = () =>
  interopDefault(
    import(
      '@/domains/catalog/catalog-empty' /* webpackChunkName: "domains/catalog/catalog-empty" */
    )
  )

const Sales = () =>
  interopDefault(
    import(
      '@/domains/sales/index' /* webpackChunkName: "domains/sales/index" */
    )
  )

const Sale = () =>
  interopDefault(
    import('@/domains/sale/index' /* webpackChunkName: "domains/sale/index" */)
  )

const Materials = () =>
  interopDefault(
    import(
      '@/domains/materials/index' /* webpackChunkName: "domains/materials/index" */
    )
  )

const About = () =>
  interopDefault(
    import(
      '@/domains/about/index' /* webpackChunkName: "domains/about/index" */
    )
  )

const Contact = () =>
  interopDefault(
    import(
      '@/domains/contact/index' /* webpackChunkName: "domains/contact/index" */
    )
  )

const Group = () =>
  interopDefault(
    import(
      '@/domains/group/index' /* webpackChunkName: "domains/product/index" */
    )
  )

const Components = () =>
  interopDefault(
    import(
      '@/domains/ui/components.vue' /* webpackChunkName: "domains/ui/components" */
    )
  )

const Ui = () =>
  interopDefault(
    import('@/domains/ui/index.vue' /* webpackChunkName: "domains/ui/index" */)
  )

const Colors = () =>
  interopDefault(
    import(
      '@/domains/ui/colors.vue' /* webpackChunkName: "domains/ui/colors" */
    )
  )

const Buttons = () =>
  interopDefault(
    import(
      '@/domains/ui/buttons.vue' /* webpackChunkName: "domains/ui/colors" */
    )
  )

const Typography = () =>
  interopDefault(
    import(
      '@/domains/ui/typography.vue' /* webpackChunkName: "domains/ui/colors" */
    )
  )

const Forms = () =>
  interopDefault(
    import('@/domains/ui/forms.vue' /* webpackChunkName: "domains/ui/forms" */)
  )

const Icons = () =>
  interopDefault(
    import('@/domains/ui/icons.vue' /* webpackChunkName: "domains/ui/colors" */)
  )
const Pages = () =>
  interopDefault(
    import('@/domains/ui/pages.vue' /* webpackChunkName: "domains/ui/pages" */)
  )

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    routes: [
      {
        path: '/',
        component: Index,
        name: 'index'
      },
      {
        path: '/catalog',
        component: Catalog,
        name: 'catalog'
      },
      {
        path: '/categories/:slug',
        component: Categories,
        name: 'categories'
      },
      {
        path: '/categories/:cat_slug/group/:slug',
        component: Group,
        name: 'group'
      },
      {
        path: '/catalog-empty',
        component: CatalogEmpty,
        name: 'catalogEmpty'
      },
      {
        path: '/sales',
        component: Sales,
        name: 'sales'
      },
      {
        path: '/sales/:slug',
        component: Sale,
        name: 'sales-slug'
      },
      {
        path: '/news',
        component: News,
        name: 'news'
      },
      {
        path: '/news/:slug',
        component: New,
        name: 'news-slug'
      },
      {
        path: '/videos',
        component: Videos,
        name: 'videos'
      },
      {
        path: '/events',
        component: Events,
        name: 'events'
      },
      {
        path: '/events/:slug',
        component: Event,
        name: 'events-slug'
      },
      {
        path: '/about',
        component: About,
        name: 'about'
      },
      {
        path: '/dealers',
        component: Dealers,
        name: 'dealers'
      },
      {
        path: '/materials',
        component: Materials,
        name: 'materials'
      },
      {
        path: '/contact',
        component: Contact,
        name: 'contact'
      },
      {
        path: '/ui',
        component: Ui,
        name: 'ui',
        children: [
          {
            path: 'components',
            component: Components,
            name: 'ui-components'
          },
          {
            path: 'colors',
            component: Colors,
            name: 'ui-colors'
          },
          {
            path: 'buttons',
            component: Buttons,
            name: 'ui-buttons'
          },
          {
            path: 'typography',
            component: Typography,
            name: 'ui-typography'
          },
          {
            path: 'icons',
            component: Icons,
            name: 'ui-icons'
          },
          {
            path: 'forms',
            component: Forms,
            name: 'ui-forms'
          },
          {
            path: 'pages',
            component: Pages,
            name: 'ui-pages'
          }
        ]
      }
    ],
    fallback: false,
    scrollBehavior(to, from) {
      if (to.name === from.name) return
      return { x: 0, y: 0 }
    }
  })
}

function interopDefault(promise) {
  return promise.then((m) => m.default || m)
}
