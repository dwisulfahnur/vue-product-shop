import { createWebHistory, createRouter } from "vue-router"

import Home from './pages/Home.vue'
import Products from './pages/Products.vue'
import ProductDetail from './pages/ProductDetail.vue'
import Cart from './pages/Cart.vue'
import NotFound from './pages/NotFound.vue'
import store from './store'

const DEFAULT_TITLEE = 'My Store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
        meta: { title: 'Products' }
    },
    {
        path: '/products/:slug',
        name: 'product-detail',
        component: ProductDetail,
        meta: { title: 'Product' }
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        meta: { title: 'Cart' }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: NotFound,
        meta: {
            title: 'Not Found',
            disableNav: true
        }
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
router.afterEach((to, from) => {
    document.title = to.meta.title || DEFAULT_TITLEE
})

export default router