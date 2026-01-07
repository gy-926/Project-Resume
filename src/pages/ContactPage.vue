<script setup lang="ts">
import { NCard, NForm, NFormItem, NInput, NButton } from 'naive-ui'
import { ref } from 'vue'

const formValue = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formValue.value)
}
</script>

<template>
  <div class="container mx-auto px-4 py-12 max-w-2xl">
    <h1 class="text-4xl font-bold mb-8">联系方式</h1>
    <NCard title="发送消息">
      <NForm :model="formValue" @submit.prevent="handleSubmit">
        <NFormItem label="姓名" path="name">
          <NInput v-model:value="formValue.name" placeholder="请输入您的姓名" />
        </NFormItem>
        <NFormItem label="邮箱" path="email">
          <NInput v-model:value="formValue.email" placeholder="请输入您的邮箱" type="email" />
        </NFormItem>
        <NFormItem label="留言" path="message">
          <NInput
            v-model:value="formValue.message"
            type="textarea"
            placeholder="请输入留言内容"
            :rows="5"
          />
        </NFormItem>
        <NFormItem>
          <NButton type="primary" attr-type="submit">发送</NButton>
        </NFormItem>
      </NForm>
    </NCard>
  </div>
</template>
