export default {
    namespaced: true,
    state: {
        navEnabled: true
    },
    mutations: {
        ENABLE_NAV(state) {
            state.navEnabled = true
        },
        DISABLE_NAV(state) {
            state.navEnabled = false
        }
    },
    actions: {
        enableNav({commit}) {
            commit('ENABLE_NAV')
        }
        ,
        disableNav({ commit }) {
            commit('DISABLE_NAV')
        }
    }
}