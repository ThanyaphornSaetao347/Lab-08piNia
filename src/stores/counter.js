import { ref } from 'vue'
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {
    const menu = ref([
        {title:'หมูกระทะ',img:'https://media.lul.la/wp-content/uploads/2022/06/15200842/288703589_601319811353794_8597244126558656307_n-1024x1024.jpg.webp',price:990,rating:5},
        {title:'ปลากระพงทอดน้ำปลา',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb1ZbLKFNxHvqcjE2wasZAvaeyPPt4G2BGqg&usqp=CAU',price:50,rating:4.6},
        {title:'ส้มตำ',img:'https://www.nittayakaiyang.com/wp-content/uploads/2023/04/%E0%B8%95%E0%B8%B3%E0%B8%8B%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%83%E0%B8%AA%E0%B9%88%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%88%E0%B8%B5%E0%B8%99-07.jpg',price:65,rating:3.5},
        {title:'กุ่งแช่น้ำปลา',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WXo1DsHUQDr1gu5J_RwEO-y7wBWF9EKNyA&usqp=CAU',price:250,rating:3.5},
        {title:'ยำมาม่า',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9YUvs1PN8Otp7_5sw8QaOOk41-I2hXNW-9g&usqp=CAU',price:40,rating:5},
        {title:'เฟรนฟราย',img:'https://image.makewebeasy.net/makeweb/m_1920x0/Ommd4Syoj/DefaultData/cheese_760x760cm.jpg',price:55,rating:4},
        {title:'เอ็นไก่ทอด',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34eq5b0fN0ELXN45BJ6VjFR1Y94RghhUbfg&usqp=CAU',price:45,rating:5},
        {title:'ไส้ทอด',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMevBPg3dC3HBas6Yb0JmOSwfjfhj-P-q1hA&usqp=CAU',price:20,rating:5},
        {title:'หมึกย่าง',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfcLAH2MP-LIQnYINNeYh-ks0uCKlFo3STSw&usqp=CAU',price:75,rating:4.5},
        {title:'ถั่วปากอ้า',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEttjOEed5Sn92J6Bi6ypcFvJWH0RI9jkx6g&usqp=CAU',price:35,rating:4.5}
    ]);

    return {menu}

})

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
      cartList: [], 
      orderList:[],
    }),
    actions: {
      addToCart(item) {
        this.cartList.push(item);
      },
      addOrderList() {
        // เพิ่มค่าลงไปใน orderList
        this.orderList.push(...this.cartList);
      
       this.cartList = [];
      },
  
    },
  });