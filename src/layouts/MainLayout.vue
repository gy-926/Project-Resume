<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NMenu,
  NButton,
  NSpace,
  NIcon,
  NText
} from 'naive-ui'
import { MoonOutline, SunnyOutline, DesktopOutline } from '@vicons/ionicons5'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const themeStore = useThemeStore()
const route = useRoute()
const router = useRouter()

const menuOptions = computed(() => [
  {
    label: '首页',
    key: 'home',
    onClick: () => router.push('/')
  },
  {
    label: '关于',
    key: 'about',
    onClick: () => router.push('/about')
  },
  {
    label: '项目',
    key: 'projects',
    onClick: () => router.push('/projects')
  },
  {
    label: '技能',
    key: 'skills',
    onClick: () => router.push('/skills')
  },
  {
    label: '联系',
    key: 'contact',
    onClick: () => router.push('/contact')
  }
])

const activeKey = computed(() => {
  const name = route.name as string
  return name || 'home'
})

const themeIcon = computed(() => {
  if (themeStore.mode === 'light') return SunnyOutline
  if (themeStore.mode === 'dark') return MoonOutline
  return DesktopOutline
})
</script>

<template>
  <NLayout>
    <NLayoutHeader bordered>
      <div class="px-6 py-4 flex justify-between items-center">
        <NText tag="h1" class="text-xl font-bold"> 个人简历 </NText>
        <NSpace align="center" :size="16">
          <NMenu
            v-model:value="activeKey"
            mode="horizontal"
            :options="menuOptions"
            :root-indent="18"
            :indent="18"
          />
          <NButton circle quaternary size="medium" @click="themeStore.toggleTheme">
            <template #icon>
              <NIcon :component="themeIcon" :size="20" />
            </template>
          </NButton>
        </NSpace>
      </div>
    </NLayoutHeader>

    <NLayoutContent>
      <div class="container mx-auto px-6 py-8">
        <slot />
      </div>
    </NLayoutContent>

    <NLayoutFooter bordered class="py-6">
      <div class="text-center">
        <NText depth="3"> &copy; 2025 个人项目简历. Built with Vue 3 + TypeScript + NaiveUI </NText>
      </div>
    </NLayoutFooter>
  </NLayout>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
