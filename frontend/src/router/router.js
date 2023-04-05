import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../store/userStore.js'

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
        component: () => import('../views/auth/LoginView.vue'),
        meta: {
          showNavbar: false,
        }
      },
      {
        path: "register",
        name: "Registration",
        component: () => import('../views/auth/RegisterView.vue'),
        meta: {
          showNavbar: false
        }
      },
      {
        path: "forgotPassword",
        name: "ForgotPassword",
        component: () => import('../views/auth/ForgotPasswordView.vue'),
        meta: {
          showNavbar: false
        }
      },
      {
        path: "home",
        name: "Home",
        component: () => import('../views/HomeView.vue'),
        meta: {
          showNavbar: true,
          requiresAuth: true
        }
      },
      {
        path: "bookList",
        name: "BookList",
        component: () => import('../views/BookListView.vue'),
        meta: {
          showNavbar: true,
          requiresAuth: true
        }
      },
      {
        path: "bookDetails",
        name: "BookDetails",
        component: () => import('../views/BookDetailsView.vue'),
        meta: {
          showNavbar: true,
          requiresAuth: true
        }
      },
      {
        path: "bookCreate",
        name: "BookCreate",
        component: () => import('../views/BookCreateView.vue'),
        meta: {
          showNavbar: true,
          requiresAuth: true
        }
      },
    ]
  },
  {
    path: '/pathMatch(.*)*',
    redirect: () => {
      return { path: `/home`}
    },
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes
})

// locale
router.beforeEach((to) => {
  // let paramsLocale = to.params.locale
  // i18n.global.locale.value = to.params.locale

  // // // use locale if paramsLocale is not in SUPPORT_LOCALES
  // if (!process.env.VUE_APP_I18N_SUPPORTED_LOCALE.includes(paramsLocale)) {
  //   paramsLocale = process.env.VUE_APP_I18N_LOCALE
  // }

  if (to.meta.requiresAuth) {
    const userStore = useUserStore()

    // isSessionValid receives all tokens user needs to work with website
    if (userStore.isSessionValid() === false && to.name !== 'Login') {
      userStore.signOut()
      return { name: 'Login' }
    }
  }
})

export default router