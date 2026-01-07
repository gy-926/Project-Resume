<script setup lang="ts">
import { computed } from 'vue'
import { darkTheme, NConfigProvider, NMessageProvider, NDialogProvider, NLoadingBarProvider } from 'naive-ui'
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
          <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
            <RouterView />
          </div>
        </NMessageProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>
