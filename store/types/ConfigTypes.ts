export interface Config {
  CATALOG_URL: string
  VK_LINK: string
  OK_LINK: string
  FB_LINK: string
  INSTAGRAM_LINK: string
  YOUTUBE_LINK: string
}

export interface ConfigState {
  config: Config | null
}

export interface ConfigResponse {
  data: Config
}
