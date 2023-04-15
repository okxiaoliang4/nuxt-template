<script setup lang="ts">
// @ts-expect-error types
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <ElConfigProvider :locale="zhCn">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ElConfigProvider>
</template>

<style>
</style>
