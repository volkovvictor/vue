const item = {
   state: {
      product: {
         id: 0,
         name: "",
         image: "",
         price: "",
         description: "",
         country: "",
      },
   },

   getters: {
      getProduct(state) {
         return state.product
      }
   },

   mutations: {
      setProductsData(state, value) {
         state.product = value
      }
   },
   actions: {
      setProductsData({commit}, value) {
         commit('setProductsData', value)
      }
   }
}

export default item;