<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { NSpin, NButton, NIcon } from 'naive-ui'
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5'

const themeStore = useThemeStore()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">个人简历</h1>
        <nav class="flex gap-6 items-center">
          <RouterLink to="/" class="hover:text-blue-500 transition-colors">首页</RouterLink>
          <RouterLink to="/about" class="hover:text-blue-500 transition-colors">关于</RouterLink>
          <RouterLink to="/projects" class="hover:text-blue-500 transition-colors">项目</RouterLink>
          <RouterLink to="/skills" class="hover:text-blue-500 transition-colors">技能</RouterLink>
          <RouterLink to="/contact" class="hover:text-blue-500 transition-colors">联系</RouterLink>
          <NButton @click="themeStore.toggleTheme" circle quaternary>
            <template #icon>
              <NIcon>
                <MoonOutline v-if="!themeStore.isDark" />
                <SunnyOutline v-else />
              </NIcon>
            </template>
          </NButton>
        </nav>
      </div>
    </header>

    <main class="flex-1 container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-5xl font-bold mb-6">欢迎来到我的个人简历</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
          展示我的技能、项目经验和专业背景
        </p>
        <div class="flex gap-4 justify-center">
          <RouterLink to="/projects">
            <NButton type="primary" size="large">查看项目</NButton>
          </RouterLink>
          <RouterLink to="/contact">
            <NButton size="large">联系我</NButton>
          </RouterLink>
        </div>
      </div>
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-700 py-6">
      <div class="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2025 个人项目简历. Built with Vue 3 + TypeScript + Vite</p>
      </div>
    </footer>
  </div>
</template>
