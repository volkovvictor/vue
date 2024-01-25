const goods = {
   state: {
      goods: [
         {
           id: 0,
           img: "good-1.jpg",
           text: "Solimo Coffee Beans 2kg",
           country: "Brazil",
           price: 10.73,
         },
         {
           id: 1,
           img: "good-1.jpg",
           text: "Presto Coffee Beans 1kg",
           country: "Brazil",
           price: 15.99,
         },
         {
           id: 2,
           img: "good-1.jpg",
           text: "AROMISTICO Coffee 1kg",
           country: "Brazil",
           price: 6.99,
         },
         {
           id: 3,
           img: "good-1.jpg",
           text: "Solimo Coffee Beans 2kg",
           country: "Brazil",
           price: 10.73,
         },
         {
           id: 4,
           img: "good-1.jpg",
           text: "Solimo Coffee Beans 2kg",
           country: "Brazil",
           price: 10.73,
         },
         {
           id: 5,
           img: "good-1.jpg",
           text: "Solimo Coffee Beans 2kg",
           country: "Brazil",
           price: 10.73,
         },
       ],
   },
   getters: {
      getGoodsCards(state) {
         return state.goods
      },

      getGoodsCardById(state) {
         return (id) => {
            return state.goods.find((card) => card.id === +id)
         }
      }
   }
}

export default goods;