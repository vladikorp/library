import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    component: {
      template: "<router-view></router-view>"
    },
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import('../views/LoginView.vue')
      },
      {
        path: "register",
        name: "Registration",
        component: () => import('../views/RegisterView.vue')
      },
      {
        path: "forgotPassword",
        name: "ForgotPassword",
        component: () => import('../views/ForgotPasswordView.vue')
      },
      {
        path: "home",
        name: "Home",
        component: () => import('../views/HomeView.vue')
      },
      {
        path: "bookList",
        name: "BookList",
        component: () => import('../views/BookListView.vue')
      },
      {
        path: "bookDetails",
        name: "BookDetails",
        component: () => import('../views/BookDetailsView.vue')
      },
    ]
  },
  {
    path: '/pathMatch(.*)*',
    redirect: () => {
      return { path: `/${process.env.VUE_APP_I18N_LOCALE}`}
    },
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes
})

export default router