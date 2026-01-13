<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { useThemeStore } from '@/stores/theme'
import { computed, onMounted, onUnmounted } from 'vue'
import {
  NButton,
  NH1,
  NH2,
  NH3,
  NP,
  NText,
  NGrid,
  NGridItem,
  NCard,
  NAvatar,
  NIcon,
  NDivider
} from 'naive-ui'
import {
  CodeOutline,
  DesktopOutline,
  PhonePortraitOutline,
  FileTrayFullOutline,
  ConstructOutline,
  PeopleOutline,
  MailOutline,
  CallOutline,
  LocationOutline
} from '@vicons/ionicons5'

const themeStore = useThemeStore()

const heroGradient = computed(() => {
  return themeStore.isDark
    ? 'linear-gradient(135deg, #1a2332 0%, #2d1b3d 100%)'
    : 'linear-gradient(135deg, #e0f2fe 0%, #f5e6ff 100%)'
})

// 鼠标跟随炫彩边框效果
const handleMouseMove = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}

onMounted(() => {
  const skillCards = document.querySelectorAll('.skill-card-wrapper')
  skillCards.forEach((card) => {
    ;(card as HTMLElement).addEventListener('mousemove', handleMouseMove)
  })

  const projectCards = document.querySelectorAll('.project-card-wrapper')
  projectCards.forEach((card) => {
    ;(card as HTMLElement).addEventListener('mousemove', handleMouseMove)
  })
})

onUnmounted(() => {
  const skillCards = document.querySelectorAll('.skill-card-wrapper')
  skillCards.forEach((card) => {
    ;(card as HTMLElement).removeEventListener('mousemove', handleMouseMove)
  })

  const projectCards = document.querySelectorAll('.project-card-wrapper')
  projectCards.forEach((card) => {
    ;(card as HTMLElement).removeEventListener('mousemove', handleMouseMove)
  })
})
</script>

<template>
  <MainLayout :fluid="true">
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero-section" :style="{ background: heroGradient }">
        <div class="hero-content">
          <div class="hero-text">
            <NH1 class="hero-name">张晓明</NH1>
            <NText class="hero-title" depth="2">前端开发工程师</NText>
            <NP class="hero-description">
              拥有 5 年前端开发经验，专注于用户产品设计和前端技术实现。擅长Vue.js 和现代 CSS
              框架，具有丰富的跨端开发和响应式开发经验。
            </NP>
            <NButton type="primary" size="large" round class="download-btn">下载简历</NButton>
          </div>
          <div class="hero-avatar">
            <NAvatar
              round
              :size="280"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
            />
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="section">
        <div class="section-container">
          <NH2 class="section-title">专业技能</NH2>
          <NGrid :x-gap="24" :y-gap="24" :cols="3" responsive="screen">
            <NGridItem>
              <div class="skill-card-wrapper">
                <NCard hoverable class="skill-card">
                  <div class="skill-header">
                    <NIcon size="32" color="#18a058">
                      <CodeOutline />
                    </NIcon>
                    <NH3 class="skill-title">前端开发</NH3>
                  </div>
                  <NText depth="2" class="skill-desc">
                    精通 HTML、CSS、JavaScript，熟练使用 React、Vue.js
                    框架，具备丰富的响应式开发经验。
                  </NText>
                </NCard>
              </div>
            </NGridItem>

            <NGridItem>
              <div class="skill-card-wrapper">
                <NCard hoverable class="skill-card">
                  <div class="skill-header">
                    <NIcon size="32" color="#2080f0">
                      <DesktopOutline />
                    </NIcon>
                    <NH3 class="skill-title">UI 设计</NH3>
                  </div>
                  <NText depth="2" class="skill-desc">
                    熟练使用 Figma、Sketch 进行产品设计，注重用户体验，追求简洁高效的设计风格。
                  </NText>
                </NCard>
              </div>
            </NGridItem>

            <NGridItem>
              <div class="skill-card-wrapper">
                <NCard hoverable class="skill-card">
                  <div class="skill-header">
                    <NIcon size="32" color="#f0a020">
                      <PhonePortraitOutline />
                    </NIcon>
                    <NH3 class="skill-title">响应式设计</NH3>
                  </div>
                  <NText depth="2" class="skill-desc">
                    专注于响应式设计，确保在各类设备和屏幕尺寸上都能提供优质的用户体验。
                  </NText>
                </NCard>
              </div>
            </NGridItem>

            <NGridItem>
              <div class="skill-card-wrapper">
                <NCard hoverable class="skill-card">
                  <div class="skill-header">
                    <NIcon size="32" color="#d03050">
                      <FileTrayFullOutline />
                    </NIcon>
                    <NH3 class="skill-title">后端整合</NH3>
                  </div>
                  <NText depth="2" class="skill-desc">
                    了解 Node.js、Python 等后端，熟悉前后端 API 对接和数据请求流程优化等。
                  </NText>
                </NCard>
              </div>
            </NGridItem>

            <NGridItem>
              <div class="skill-card-wrapper">
                <NCard hoverable class="skill-card">
                  <div class="skill-header">
                    <NIcon size="32" color="#18a058">
                      <ConstructOutline />
                    </NIcon>
                    <NH3 class="skill-title">构建工具</NH3>
                  </div>
                  <NText depth="2" class="skill-desc">
                    熟练使用 Webpack、Vite 等构建工具，优化项目性能和开发效率。
                  </NText>
                </NCard>
              </div>
            </NGridItem>

            <NGridItem>
              <div class="skill-card-wrapper">
                <NCard hoverable class="skill-card">
                  <div class="skill-header">
                    <NIcon size="32" color="#2080f0">
                      <PeopleOutline />
                    </NIcon>
                    <NH3 class="skill-title">团队协作</NH3>
                  </div>
                  <NText depth="2" class="skill-desc">
                    具备良好的团队协作能力和沟通能力，熟悉使用 Git、Jira 等协作工具。
                  </NText>
                </NCard>
              </div>
            </NGridItem>
          </NGrid>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="section projects-section">
        <div class="section-container">
          <NH2 class="section-title">项目作品</NH2>
          <NGrid :x-gap="24" :y-gap="24" :cols="3" responsive="screen">
            <NGridItem>
              <div class="project-card-wrapper">
                <NCard
                  hoverable
                  class="project-card"
                  cover-style="height: 200px; overflow: hidden;"
                >
                  <template #cover>
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                      alt="在线购物平台"
                    />
                  </template>
                  <NH3>在线购物平台</NH3>
                  <NText depth="2" class="project-desc">
                    基于 React 和 Node.js 构建的跨境电商平台，包含商品展示、购物车、支付等功能。
                  </NText>
                  <div class="project-tech">
                    <NButton text type="primary" size="small">MongoDB</NButton>
                  </div>
                </NCard>
              </div>
            </NGridItem>

            <NGridItem>
              <div class="project-card-wrapper">
                <NCard
                  hoverable
                  class="project-card"
                  cover-style="height: 200px; overflow: hidden;"
                >
                  <template #cover>
                    <img
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                      alt="健身追踪应用"
                    />
                  </template>
                  <NH3>健身追踪应用</NH3>
                  <NText depth="2" class="project-desc">
                    移动端健身应用，提供训练计划制定、健康数据追踪功能，使用 React Native 开发。
                  </NText>
                  <div class="project-tech">
                    <NButton text type="primary" size="small">Redux</NButton>
                  </div>
                </NCard>
              </div>
            </NGridItem>

            <NGridItem>
              <div class="project-card-wrapper">
                <NCard
                  hoverable
                  class="project-card"
                  cover-style="height: 200px; overflow: hidden;"
                >
                  <template #cover>
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                      alt="数据分析仪表板"
                    />
                  </template>
                  <NH3>数据分析仪表板</NH3>
                  <NText depth="2" class="project-desc">
                    企业级数据分析平台，通过丰富多样的数据可视化，提供实时数据追踪和预测分析等功能。
                  </NText>
                  <div class="project-tech">
                    <NButton text type="primary" size="small">D3.js</NButton>
                  </div>
                </NCard>
              </div>
            </NGridItem>
          </NGrid>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="section">
        <div class="section-container">
          <NH2 class="section-title">工作经历</NH2>
          <div class="experience-list">
            <div class="experience-item">
              <div class="experience-header">
                <div>
                  <NH3 class="experience-title">前端工程师</NH3>
                  <NText depth="2">南京凯佩软件有限公司</NText>
                </div>
                <NText depth="3">2021 – 至今</NText>
              </div>
              <NP class="experience-desc">
                1、客户App开发
                (基于UniApp框架):负责核心功能模块设计与开发，实现跨平台(iOS/Android)应用，提升用户移动端体验。
              </NP>
              <NP class="experience-desc">
                2、客户门户网站开发:主导企业门户网站前端架构设计，采用响应式布局确保多终端适配,开发内容管理系统(CMS)，支持客户自主更新网站内容，降低维护成本。
              </NP>
            </div>

            <NDivider />

            <div class="experience-item">
              <div class="experience-header">
                <div>
                  <NH3 class="experience-title">cocos游戏开发</NH3>
                  <NText depth="2">南京霍格教育科技有限公司</NText>
                </div>
                <NText depth="3">2020 – 2021</NText>
              </div>
              <NP class="experience-desc">
                参与儿童早教课程内容制作和产品设计,主要负责课程游戏内容交互.
              </NP>
            </div>

            <NDivider />
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="section contact-section">
        <div class="section-container">
          <NH2 class="section-title">联系我</NH2>
          <NP class="contact-subtitle">
            如果您对我的技能或项目有兴趣或有任何合作机会，请随时联系我。
          </NP>
          <NGrid :x-gap="48" :y-gap="32" :cols="3" responsive="screen" class="contact-grid">
            <NGridItem>
              <div class="contact-item">
                <NIcon size="32" color="#2080f0">
                  <MailOutline />
                </NIcon>
                <NText class="contact-label">邮箱</NText>
                <NText depth="2">2370786899@qq.com gy1419883671@gmail.com</NText>
              </div>
            </NGridItem>
            <NGridItem>
              <div class="contact-item">
                <NIcon size="32" color="#2080f0">
                  <CallOutline />
                </NIcon>
                <NText class="contact-label">电话</NText>
                <NText depth="2">+86 15152383743</NText>
              </div>
            </NGridItem>
            <NGridItem>
              <div class="contact-item">
                <NIcon size="32" color="#2080f0">
                  <LocationOutline />
                </NIcon>
                <NText class="contact-label">地址</NText>
                <NText depth="2">北京市朝阳区</NText>
              </div>
            </NGridItem>
          </NGrid>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Hero Section */
.hero-section {
  padding: 80px 24px;
  flex-shrink: 0;
  transition: background 0.3s ease;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-name {
  font-size: 48px !important;
  font-weight: 700 !important;
  margin: 0 !important;
  color: var(--n-text-color);
}

.hero-title {
  font-size: 20px;
  color: var(--n-text-color-2);
}

.hero-description {
  font-size: 16px;
  line-height: 1.8;
  color: var(--n-text-color-2);
  margin: 0 !important;
}

.download-btn {
  align-self: flex-start;
  margin-top: 12px;
}

.hero-avatar {
  display: flex;
  justify-content: center;
}

/* Section Styling */
.section {
  padding: 80px 0;
  flex-shrink: 0;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  text-align: center;
  font-size: 36px !important;
  font-weight: 600 !important;
  margin-bottom: 48px !important;
  color: var(--n-text-color);
}

/* Skills Section */
.skill-card-wrapper {
  position: relative;
  height: 100%;
  border-radius: 8px;
  padding: 2px;
  --mouse-x: 50%;
  --mouse-y: 50%;
  background: transparent;
  transition: background 0.3s ease;
}

.skill-card-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 2px;
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(59, 130, 246, 0.6),
    rgba(168, 85, 247, 0.4),
    rgba(236, 72, 153, 0.3),
    transparent 40%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.skill-card-wrapper:hover::before {
  opacity: 1;
}

.skill-card {
  height: 100%;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.skill-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.skill-title {
  font-size: 20px !important;
  font-weight: 600 !important;
  margin: 0 !important;
  text-align: center;
}

.skill-desc {
  text-align: center;
  line-height: 1.7;
  font-size: 14px;
}

/* Projects Section */
.projects-section {
  background-color: var(--n-color-modal);
}

.project-card-wrapper {
  position: relative;
  height: 100%;
  border-radius: 8px;
  padding: 2px;
  --mouse-x: 50%;
  --mouse-y: 50%;
  background: transparent;
  transition: background 0.3s ease;
}

.project-card-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 2px;
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(59, 130, 246, 0.6),
    rgba(168, 85, 247, 0.4),
    rgba(236, 72, 153, 0.3),
    transparent 40%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.project-card-wrapper:hover::before {
  opacity: 1;
}

.project-card {
  height: 100%;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card h3 {
  margin: 16px 0 12px !important;
  font-size: 20px !important;
  font-weight: 600 !important;
}

.project-desc {
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 16px;
  display: block;
}

.project-tech {
  margin-top: 16px;
}

/* Experience Section */
.experience-list {
  max-width: 900px;
  margin: 0 auto;
}

.experience-item {
  padding: 24px 0;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 12px;
}

.experience-title {
  font-size: 20px !important;
  font-weight: 600 !important;
  margin: 0 0 8px !important;
}

.experience-desc {
  font-size: 15px;
  line-height: 1.7;
  color: var(--n-text-color-2);
  margin: 0 !important;
}

/* Contact Section */
.contact-section {
  background-color: var(--n-color-modal);
}

.contact-subtitle {
  text-align: center;
  font-size: 16px;
  color: var(--n-text-color-2);
  margin: -24px auto 48px !important;
  max-width: 600px;
}

.contact-grid {
  max-width: 900px;
  margin: 0 auto;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.contact-label {
  font-size: 16px;
  font-weight: 600;
  margin-top: 4px;
}

/* Footer */
/* 使用 MainLayout 的全局页脚 */

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-text {
    align-items: center;
  }

  .download-btn {
    align-self: center;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 48px 24px;
  }

  .hero-name {
    font-size: 36px !important;
  }

  .section {
    padding: 48px 0;
  }

  .section-title {
    font-size: 28px !important;
    margin-bottom: 32px !important;
  }
}
</style>
