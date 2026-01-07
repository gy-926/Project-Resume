<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { NCard, NSpace, NH2, NP, NGrid, NGridItem, NStatistic } from 'naive-ui'
</script>

<template>
  <MainLayout :fluid="true">
    <NSpace vertical :size="24">
      <NH2>关于我</NH2>

      <NCard title="个人简介" hoverable>
        <NP> 这里可以添加您的个人简介内容... </NP>
      </NCard>

      <NCard title="技能概览" hoverable>
        <NGrid :x-gap="16" :y-gap="16" :cols="2" :md-cols="4">
          <NGridItem>
            <NStatistic label="项目经验" value="10+" />
          </NGridItem>
          <NGridItem>
            <NStatistic label="工作年限" value="3+" />
          </NGridItem>
          <NGridItem>
            <NStatistic label="技术栈" value="15+" />
          </NGridItem>
          <NGridItem>
            <NStatistic label="GitHub 星标" value="100+" />
          </NGridItem>
        </NGrid>
      </NCard>

      <NCard title="教育背景" hoverable>
        <NP> 这里可以添加您的教育背景... </NP>
      </NCard>
    </NSpace>
  </MainLayout>
</template>
