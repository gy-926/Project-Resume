import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { GlobalThemeOverrides } from 'naive-ui'

export type ThemeMode = 'light' | 'dark' | 'system'

const THEME_STORAGE_KEY = 'theme-mode'

export const useThemeStore = defineStore('theme', () => {
  const mode = ref<ThemeMode>('system')

  const systemPrefersDark = ref(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const isDark = computed(() => {
    if (mode.value === 'system') {
      return systemPrefersDark.value
    }
    return mode.value === 'dark'
  })

  const themeOverrides = computed<GlobalThemeOverrides>(() => ({
    common: {
      primaryColor: '#3b82f6',
      primaryColorHover: '#2563eb',
      primaryColorPressed: '#1d4ed8',
      primaryColorSuppl: '#60a5fa'
    }
  }))

  function setMode(newMode: ThemeMode) {
    mode.value = newMode
    localStorage.setItem(THEME_STORAGE_KEY, newMode)
  }

  function toggleTheme() {
    if (mode.value === 'light') {
      setMode('dark')
    } else if (mode.value === 'dark') {
      setMode('system')
    } else {
      setMode('light')
    }
  }

  function initTheme() {
    const savedMode = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null
    if (savedMode && ['light', 'dark', 'system'].includes(savedMode)) {
      mode.value = savedMode
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      systemPrefersDark.value = e.matches
    })
  }

  watch(isDark, (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, { immediate: true })

  initTheme()

  return {
    mode,
    isDark,
    themeOverrides,
    setMode,
    toggleTheme
  }
})
