import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const staticRoutes = [
  '/',
  // '/catalog',
  // '/sales',
  // // '/sale',
  // '/news',
  // '/events',
  // '/about',
  // '/dealers',
  // // '/product',
  // '/materials',
  // '/contact',
  // '/ui',
  // '/ui/components',
  // '/ui/colors',
  // '/ui/buttons',
  // '/ui/typography',
  // '/ui/icons',
  // '/ui/forms',
  // '/ui/pages'
]

export class StaticGenerator {
  public config: AxiosRequestConfig
  constructor() {
    this.config = {
      method: 'GET',
      baseURL: process.env.BASE_URL || 'https://dev-lada-lecar-api.kodix.kodix.dev/api'
    }
  }
  public getCategoriesRoute(): Promise<AxiosResponse<any>> {
    this.config.url = '/categories'
    return axios.request(this.config)
  }
}

export async function routes() {
  const generator = new StaticGenerator()
  const requests = [
    generator.getCategoriesRoute()
  ]
  const [{ data: { data: categoriesResponse } }] = await Promise.all(requests)
  const routes = staticRoutes.map((route) => ({
    route,
    payload: null
  }))
  categoriesResponse.forEach((category: any) => {
    routes.push({
      route: `/categories/${category.slug}`,
      payload: null
    })
  })
  return new Promise<any>(resolve => {
    resolve(routes)
  })
}

// routes().then((result) => console.log(result))
