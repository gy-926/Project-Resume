<script setup lang="ts">
import { NCard, NTag, NSpace } from 'naive-ui'

const skills = {
  frontend: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'NaiveUI'],
  backend: ['Node.js', 'Express'],
  tools: ['Git', 'Vite', 'ESLint', 'Prettier']
}
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">技能专长</h1>
    <NSpace vertical :size="16">
      <NCard title="前端技能">
        <NSpace>
          <NTag v-for="skill in skills.frontend" :key="skill" type="primary">
            {{ skill }}
          </NTag>
        </NSpace>
      </NCard>
      <NCard title="后端技能">
        <NSpace>
          <NTag v-for="skill in skills.backend" :key="skill" type="success">
            {{ skill }}
          </NTag>
        </NSpace>
      </NCard>
      <NCard title="开发工具">
        <NSpace>
          <NTag v-for="skill in skills.tools" :key="skill" type="info">
            {{ skill }}
          </NTag>
        </NSpace>
      </NCard>
    </NSpace>
  </div>
</template>
