const cards = {
   state: {
      bestsellers: [
         {
           id: 0,
           img: "coffee-1.jpg",
           text: "Solimo Coffee Beans 2kg",
           price: 10.73,
         },
         {
           id: 1,
           img: "coffee-2.jpg",
           text: "Presto Coffee Beans 1kg",
           price: 15.99,
         },
         {
           id: 2,
           img: "coffee-3.jpg",
           text: "AROMISTICO Coffee 1kg",
           price: 6.99,
         },
      ],
      coffee: [
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
           text: "Solimo Coffee Beans 2kg",
           country: "Brazil",
           price: 10.73,
         },
         {
           id: 2,
           img: "good-1.jpg",
           text: "Solimo Coffee Beans 2kg",
           country: "Brazil",
           price: 10.73,
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
      getBestsellersCards(state) {
         return {bestsellers: state.bestsellers}
      },
      getCoffeeCards(state) {
         return {coffee: state.coffee}
      },
      getGoodsCards(state) {
         return {goods: state.goods}
      },
   }
}

export default cards;