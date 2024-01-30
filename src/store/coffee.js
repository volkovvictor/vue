const coffee = {
   state: {
      coffee: [],
      searchValue: '',
      sortValue: '',
   },
   getters: {
      getCoffeeCards(state) {
         return state.coffee
      },
      getCoffeeCardById(state) {
         return (id) => {
            return state.coffee.find((card) => card.id === +id)
         }
      }
   },
   mutations: {
      setCoffeeData(state, value) {
         state.coffee = value
      },
   },
   actions: {
      setCoffeeData({commit}, value) {
         commit('setCoffeeData', value)
      },
   }
}

export default coffee;