import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/AboutPage.vue'),
    meta: {
      title: '关于我'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/pages/ProjectsPage.vue'),
    meta: {
      title: '项目经验'
    }
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('@/pages/SkillsPage.vue'),
    meta: {
      title: '技能专长'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/ContactPage.vue'),
    meta: {
      title: '联系方式'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string
  if (title) {
    document.title = `${title} - 个人项目简历`
  }
  next()
})

export default router
