<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { NButton, NSpace, NH1, NP, NGradientText } from 'naive-ui'
</script>

<template>
  <MainLayout>
    <div class="flex items-center justify-center" style="min-height: 60vh">
      <div class="text-center max-w-3xl">
        <NH1 class="!text-5xl !font-bold !mb-6">
          <NGradientText type="primary"> 欢迎来到我的个人简历 </NGradientText>
        </NH1>
        <NP class="!text-xl !mb-8"> 展示我的技能、项目经验和专业背景 </NP>
        <NSpace justify="center" :size="16">
          <RouterLink to="/projects">
            <NButton type="primary" size="large" round> 查看项目 </NButton>
          </RouterLink>
          <RouterLink to="/contact">
            <NButton size="large" round> 联系我 </NButton>
          </RouterLink>
        </NSpace>
      </div>
    </div>
  </MainLayout>
</template>
