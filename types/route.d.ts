import { RouteConfig } from 'vue-router'
import { PageMeta } from 'nuxt/app'

interface CustomMeta {
  requiresAuth?: boolean
  roles?: string[]
  permissions?: string[]
}

declare module 'vue-router' {
  interface RouteMeta extends CustomMeta {
  }
}

declare module 'nuxt/app' {
  interface PageMeta extends CustomMeta {
  }
}