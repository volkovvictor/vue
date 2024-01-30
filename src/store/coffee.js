const coffee = {
   state: {
      coffee: [
         //{
         //  id: 0,
         //  img: "good-1.jpg",
         //  name: "Solimo Coffee Beans 2kg",
         //  country: "Brazil",
         //  price: 10.73,
         //},
         //{
         //  id: 1,
         //  img: "good-1.jpg",
         //  name: "Solimo Coffee Beans 2kg",
         //  country: "Brazil",
         //  price: 10.73,
         //},
         //{
         //  id: 2,
         //  img: "good-1.jpg",
         //  name: "Solimo Coffee Beans 2kg",
         //  country: "Brazil",
         //  price: 10.73,
         //},
         //{
         //  id: 3,
         //  img: "good-1.jpg",
         //  name: "Solimo Coffee Beans 2kg",
         //  country: "Brazil",
         //  price: 10.73,
         //},
         //{
         //  id: 4,
         //  img: "good-1.jpg",
         //  name: "Solimo Coffee Beans 2kg",
         //  country: "Brazil",
         //  price: 10.73,
         //},
         //{
         //  id: 5,
         //  img: "good-1.jpg",
         //  name: "Solimo Coffee Beans 2kg",
         //  country: "Brazil",
         //  price: 10.73,
         //},
      ],
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
      }
   },
   actions: {
      setCoffeeData({commit}, value) {
         commit('setCoffeeData', value)
      }
   }
}

export default coffee;