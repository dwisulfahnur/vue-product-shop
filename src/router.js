import { createWebHistory, createRouter } from "vue-router"

import Home from './pages/Home.vue'
import Products from './pages/Products.vue'
import ProductDetail from './pages/ProductDetail.vue'
import Cart from './pages/Cart.vue'
import NotFound from './pages/NotFound.vue'
import store from './store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
    },
    {
        path: '/products/:id',
        name: 'product-detail',
        component: ProductDetail,
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: NotFound,
        meta: { disableNav: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'border-indigo-500 text-gray-900',
})

router.beforeEach((to, from) => {
    to.name.includes('notfound') ? store.dispatch('nav/disableNav') : store.dispatch('nav/enableNav')
})

export default router