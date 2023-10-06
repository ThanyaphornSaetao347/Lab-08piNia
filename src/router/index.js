// import { createRouter, createWebHistory } from 'vue-router'
// // import HomeView from '../views/HomeView.vue'
// // import NewCard from '../components/NewsCard.vue'
// // import CartProduce from '../views/CartProduce.vue'
// import homepage from '../components/Homepage.vue'

// // import travelListDetail_1 from '../components/travelListDetail1.vue';
// // import travelListDetail_2 from '../components/travelListDetail2.vue';
// // import travelListDetail_3 from '../components/travelListDetail3.vue';
// // import travelListDetail_4 from '../components/travelListDetail4.vue';
// // import travelListDetail_5 from '../components/travelListDetail5.vue';
// // import travelListDetail_6 from '../components/travelListDetail6.vue';


// // const shopRoutes = [
// //   { name: 'news_1', component: travelListDetail_1, shop: 'ท่าช้าง' },
// //   { name: 'news_2', component: travelListDetail_2, shop: 'GoodView' },
// //   { name: 'news_3', component: travelListDetail_3, shop: 'RiverSide'},
// //   { name: 'news_4', component: travelListDetail_4, shop: 'WarmUp'},
// //   { name: 'news_5', component: travelListDetail_5, shop: 'Tawandang'},
// //   { name: 'news_6', component: travelListDetail_6, shop: 'Porjai Bar'},
// // ];

//   routes = [
//   {
//     path: '/',
//     name: 'homepage',
//     component: homepage
//   },
//   // {
//   //     path: '/',
//   //     name: 'home',
//   //     component: HomeView
//   //   },
//   // {
//   //   path: '/news',
//   //   name: 'allnews',
//   //   component: NewCard
//   // },
//   // {
//   //   path: '/cart',
//   //   name: 'cart',
//   //   component: CartProduce
//   // },
// ];

// // shopRoutes.forEach((route) => {
// //   routes.push({
// //     path: `/news/${encodeURIComponent(route.shop)}`,
// //     name: route.name,
// //     component: route.component,
// //     props: true
// //   });
// // });

// // const router = createRouter({
// //   history: createWebHistory(import.meta.env.BASE_URL),
// //   routes
// // })

// export default router;


import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/Homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },

  ]
})

export default router
