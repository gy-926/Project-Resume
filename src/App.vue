<script setup lang="ts">
import { computed } from 'vue'
import {
  darkTheme,
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NLoadingBarProvider
} from 'naive-ui'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()

const naiveTheme = computed(() => {
  return themeStore.isDark ? darkTheme : null
})
</script>

<template>
  <NConfigProvider :theme="naiveTheme" :theme-overrides="themeStore.themeOverrides">
    <NLoadingBarProvider>
      <NDialogProvider>
        <NMessageProvider>
          <RouterView />
        </NMessageProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>
