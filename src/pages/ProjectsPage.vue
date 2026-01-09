<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { NCard, NGrid, NGridItem, NH2, NP, NTag, NSpace, NButton, NIcon } from 'naive-ui'
import { LogoGithub, Open } from '@vicons/ionicons5'

const projects = [
  {
    title: '项目 1',
    description: '这是一个示例项目，使用 Vue 3 + TypeScript 开发',
    tags: ['Vue 3', 'TypeScript', 'NaiveUI'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: '项目 2',
    description: '这是另一个示例项目，使用现代化技术栈',
    tags: ['React', 'Next.js', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: '项目 3',
    description: '全栈项目示例，前后端分离架构',
    tags: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com'
  }
]
</script>

<template>
  <MainLayout :fluid="true">
    <div class="projects-page">
      <NSpace vertical :size="24">
        <NH2>项目经验</NH2>

        <NGrid :x-gap="16" :y-gap="16" :cols="1" :md-cols="2" :lg-cols="3">
          <NGridItem v-for="project in projects" :key="project.title">
            <NCard :title="project.title" hoverable>
              <NSpace vertical :size="12">
                <NP>{{ project.description }}</NP>

                <NSpace :size="8">
                  <NTag v-for="tag in project.tags" :key="tag" type="primary" size="small" round>
                    {{ tag }}
                  </NTag>
                </NSpace>

                <NSpace :size="8">
                  <NButton
                    v-if="project.github"
                    tag="a"
                    :href="project.github"
                    target="_blank"
                    size="small"
                    secondary
                  >
                    <template #icon>
                      <NIcon :component="LogoGithub" />
                    </template>
                    GitHub
                  </NButton>
                  <NButton
                    v-if="project.demo"
                    tag="a"
                    :href="project.demo"
                    target="_blank"
                    size="small"
                    type="primary"
                  >
                    <template #icon>
                      <NIcon :component="Open" />
                    </template>
                    演示
                  </NButton>
                </NSpace>
              </NSpace>
            </NCard>
          </NGridItem>
        </NGrid>
      </NSpace>
    </div>
  </MainLayout>
</template>

<style scoped>
.projects-page {
  min-height: calc(100vh - 10px);
  padding: 2rem 1.5rem;
}
</style>
