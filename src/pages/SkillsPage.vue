<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { NCard, NTag, NSpace, NH2, NProgress } from 'naive-ui'

const skillCategories = [
  {
    title: '前端技能',
    type: 'primary',
    skills: [
      { name: 'Vue 3', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'NaiveUI', level: 85 }
    ]
  },
  {
    title: '后端技能',
    type: 'success',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 }
    ]
  },
  {
    title: '开发工具',
    type: 'info',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Vite', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'ESLint', level: 88 },
      { name: 'Prettier', level: 90 }
    ]
  }
]
</script>

<template>
  <MainLayout :fluid="true">
    <div class="skills-page">
      <NSpace vertical :size="24">
        <NH2>技能专长</NH2>

        <NSpace vertical :size="16">
          <NCard
            v-for="category in skillCategories"
            :key="category.title"
            :title="category.title"
            hoverable
          >
            <NSpace vertical :size="16">
              <div v-for="skill in category.skills" :key="skill.name">
                <NSpace justify="space-between" class="mb-2">
                  <NTag :type="category.type as any" size="small" round>
                    {{ skill.name }}
                  </NTag>
                  <span>{{ skill.level }}%</span>
                </NSpace>
                <NProgress
                  type="line"
                  :percentage="skill.level"
                  :color="category.type === 'primary' ? '#3b82f6' : undefined"
                  :rail-color="'rgba(0, 0, 0, 0.06)'"
                  :show-indicator="false"
                />
              </div>
            </NSpace>
          </NCard>
        </NSpace>
      </NSpace>
    </div>
  </MainLayout>
</template>

<style scoped>
.skills-page {
  min-height: calc(100vh - 180px);
  padding: 2rem 1.5rem;
}
</style>
