<script setup lang="ts">
import { NCard, NGrid, NGridItem } from 'naive-ui'
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">项目经验</h1>
    <NGrid :x-gap="16" :y-gap="16" :cols="1" :md-cols="2" :lg-cols="3">
      <NGridItem>
        <NCard title="项目 1" hoverable>
          <p class="text-gray-600 dark:text-gray-400">项目描述...</p>
        </NCard>
      </NGridItem>
    </NGrid>
  </div>
</template>
