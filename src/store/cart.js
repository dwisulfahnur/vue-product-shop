
export default {
    namespaced: true,
    state: {
        productItems: [],
    },
    mutations: {},
    getters: {},
    actions: {
        addToCart({ state }, { productId, itemAmount }) {
            const productItem = state.productItems.find(item => item.productId === productId)
            if (productItem) {
                state.productItems = state.productItems.map(item => {
                    if (productItem.productId === item.productId) {
                        item.itemAmount += itemAmount
                    }
                    return item
                })
            } else {
                state.productItems = [{ productId, itemAmount }, ...state.productItems]
            }

        }
    }
}