import { createStore } from 'vuex'
import cart from './cart'
import product from './product'
import nav from './nav'

export default createStore({
    namespaced: true,
    modules: {
        nav,
        cart,
        product,
    }
})