export default defineNuxtRouteMiddleware((to) => {
  if (to.meta.roles && to.meta.roles.every(item => !useUserStore().user.roles.includes(item))) {
    return abortNavigation(createError({
      statusCode: 403,
      message: '暂无权限',
      stack: '',
    }))
  }
  if (to.meta.permissions && to.meta.permissions.every(item => !useUserStore().user.permissions.includes(item))) {
    return abortNavigation(createError({
      statusCode: 403,
      message: '暂无权限',
      stack: '',
    }))
  }
})
