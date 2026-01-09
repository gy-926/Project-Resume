<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import {
  NCard,
  NForm,
  NFormItem,
  NInput,
  NButton,
  NSpace,
  NH2,
  NGrid,
  NGridItem,
  NIcon,
  NText
} from 'naive-ui'
import { MailOutline, LogoGithub, LogoLinkedin, Call } from '@vicons/ionicons5'
import { ref } from 'vue'

const formValue = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)

const handleSubmit = () => {
  loading.value = true
  console.log('Form submitted:', formValue.value)
  setTimeout(() => {
    loading.value = false
    formValue.value = { name: '', email: '', message: '' }
  }, 1000)
}

const contactInfo = [
  {
    icon: MailOutline,
    label: '邮箱',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com'
  },
  { icon: Call, label: '电话', value: '+86 138 0000 0000', href: 'tel:+8613800000000' },
  { icon: LogoGithub, label: 'GitHub', value: 'github.com/yourname', href: 'https://github.com' },
  {
    icon: LogoLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourname',
    href: 'https://linkedin.com'
  }
]
</script>

<template>
  <MainLayout :fluid="true">
    <div class="contact-page">
      <NSpace vertical :size="24">
        <NH2>联系方式</NH2>

        <NGrid :x-gap="24" :y-gap="24" :cols="1" :lg-cols="2">
          <NGridItem>
            <NCard title="联系信息" hoverable>
              <NSpace vertical :size="16">
                <div v-for="info in contactInfo" :key="info.label" class="flex items-center gap-3">
                  <NIcon :component="info.icon" :size="20" />
                  <div>
                    <NText depth="3" class="text-sm">
                      {{ info.label }}
                    </NText>
                    <br />
                    <NButton
                      text
                      tag="a"
                      :href="info.href"
                      target="_blank"
                      type="primary"
                      size="small"
                    >
                      {{ info.value }}
                    </NButton>
                  </div>
                </div>
              </NSpace>
            </NCard>
          </NGridItem>

          <NGridItem>
            <NCard title="发送消息" hoverable>
              <NForm :model="formValue" @submit.prevent="handleSubmit">
                <NFormItem label="姓名" path="name" required>
                  <NInput v-model:value="formValue.name" placeholder="请输入您的姓名" />
                </NFormItem>
                <NFormItem label="邮箱" path="email" required>
                  <NInput v-model:value="formValue.email" placeholder="请输入您的邮箱" />
                </NFormItem>
                <NFormItem label="留言" path="message" required>
                  <NInput
                    v-model:value="formValue.message"
                    type="textarea"
                    placeholder="请输入留言内容"
                    :rows="4"
                  />
                </NFormItem>
                <NFormItem>
                  <NButton type="primary" attr-type="submit" :loading="loading" round>
                    发送消息
                  </NButton>
                </NFormItem>
              </NForm>
            </NCard>
          </NGridItem>
        </NGrid>
      </NSpace>
    </div>
  </MainLayout>
</template>

<style scoped>
.contact-page {
  min-height: calc(100vh - 180px);
  padding: 2rem 1.5rem;
}
</style>
