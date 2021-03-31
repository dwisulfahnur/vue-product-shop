export default {
    namespaced: true,
    state: {
        products: [
            {
                id: 1,
                slug: "camera",
                name: "Camera",
                image: "/images/camera.jpeg",
                price: 9520000,
            },
            {
                id: 2,
                slug: "glasses",
                name: "Glasses",
                image: "/images/glasses.jpeg",
                price: 1232000,
            },
            {
                id: 3,
                slug: "headset",
                name: "Headset",
                image: "/images/headset.jpeg",
                price: 3999000,
            },
            {
                id: 4,
                slug: "shoe",
                name: "Shoe",
                image: "/images/shoe.jpeg",
                price: 3440000,
            },
            {
                id: 5,
                slug: "watch",
                name: "Watch",
                image: "/images/watch.jpeg",
                price: 5000000,
            },
            {
                id: 6,
                slug: "iphone-12-pro-max",
                name: "Iphone 12 Pro Max",
                image: "/images/iphone-12.jpeg",
                price: 24999000,
            },
        ]
    },
    mutations: {},
    getters: {
        getProductBySlug: (state) => (productSlug) => {
            return state.products.find(item => item.slug === productSlug)
        }
    },
    actions: {},
}