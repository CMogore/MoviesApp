import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginSignup.vue'
import AdminView from '../views/admin/AdminDashboard.vue'
import SearchResults from '../views/SearchResults.vue';
import UserProfile from '../views/UserProfile.vue';




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/search',
    name: 'SearchResults',
    component: SearchResults,
    props: true // Pass props to the component via route params
  },
  {
    path: '/userprofile',
    name: 'ueserprofile',
    component: UserProfile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
