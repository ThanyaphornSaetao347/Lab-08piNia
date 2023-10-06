<script setup>
import { menuStore } from "../stores/counter";
import { useCartStore } from "../stores/counter";
import { computed } from "vue";
import { ref } from "vue";

const Cart = ref(0);

const menu = menuStore();
const shop_food = menu.menu;

const cartStore = useCartStore();
const Store = cartStore.cartList;

// สร้างคำนวณราคาสินค้าทั้งหมด
const totalPrice = computed(() => {
 
  return cartStore.cartList.reduce((total, item) => total + item.price, 0);
});

function addCart(title, img, price,rating) {
  Cart.value++;

  // ตรวจสอบว่าสินค้ามีอยู่ในตระกร้าแล้วหรือไม่
  const existingItem = cartStore.cartList.find((item) => item.title === title);

  if (existingItem) {
    existingItem.quantity++;
    existingItem.price += price;
  } else {
    // InCart.value.push({ name, img, price, quantity: 1 });
    cartStore.addToCart({ title, img, price,rating, quantity: 1 });
  }
}
function removeFromCart(item) {
  Cart.value -= item.quantity; //ทำการ ลบตัวเลขสินค้าจากตระกร้า
  totalPrice.value -= item.price; //ทำการลบ ราคารวม กับ ราคาสินค้าที่กดลบไป

  const itemIndex = Store.findIndex((cartItem) => cartItem.title === item.title); //หากชื่อสินค้าที่มันซ้ำกัน
  if (itemIndex !== -1) {
    const removedItem = Store.splice(itemIndex, 1)[0]; //ใช้ splice เพื่อลบออกจากอาร์เรย์ Store
    cartStore.removeFromCart(removedItem);
  }
}
function addOrderListz() {
  cartStore.addOrderList();
  Cart.value = 0;
}

</script>

<template>
  <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </symbol>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="check" viewBox="0 0 16 16">
          <title>Check</title>
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </symbol>
      </svg>

      <div class="container py-3">
        <header>
          <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
              <img class="logo" src="../assets/lhLOGO.png">
            </a>

            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              <h3 class="cart mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-cart-shopping"></i>[{{ Cart }}]</h3>
              <h3 class="cart mx-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">order</h3>
            </nav>
          </div>
        </header>
      </div>
    </div>

  <div class="container">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="(item, index) in shop_food" :key="index">
        <div class="card">
          <img :src="item.img" class="card-img-top" alt="Menu Image" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">ราคา {{ item.price }} บาท</p>
            <p class="card-text">rating {{ item.rating }} </p>
          </div>
          <button @click="addCart(item.title, item.img, item.price)">
            เพิ่ม
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog w-50">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            จำนวน สินค้า {{ Cart }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div
          class="modal-body w-75"
          v-for="(item, index) in cartStore.cartList"
          :key="index"
        >
          <div class="card mb-3" style="max-width: 540px">
            <div class="row-text g-0 m-2">
              <div class="col-md-4">
                <img
                  :src="item.img"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">จำนวนสินค้า {{ item.quantity }}</p>
                  <p class="card-text">
                    <small class="text-body-secondary">{{ item.price }}</small>
                  </p>
                </div>
              </div>
            </div>
            <button @click="removeFromCart(item)">ลบออก</button>
          </div>
        </div>

        <!-- แสดงราคารวมทั้งหมด -->
        <div class="row g-0 m-2">
          <div class="col-md-12">
            <div class="card-body">
              <h5 class="card-title">ราคารวมทั้งหมด</h5>
              <p class="card-text">{{ totalPrice }} บาท</p>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            ปิด
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="addOrderListz()"
          >
            สั่งซื้อ
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">รายการสั่งซื้อ</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
  

      <div class="row">
        <div
          class="col-sm-6 mb-3 mb-sm-0"
          v-for="(chosenItem, index) in cartStore.orderList"
          :key="index"
        >
          <div class="card">
            <img :src="chosenItem.img" alt="" srcset="" />
            <div class="card-body">
              <h5 class="card-title">{{ chosenItem.title }}</h5>
              <p class="card-text">ราคา {{ chosenItem.price }}</p>
              <p class="card-text">จำนวน {{ chosenItem.quantity }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  color: #0000;
  font-weight: lighter;
}

.menu h3 {
  margin: 0;
  font-size: 24px;
}

.box-menu {
  display: flex;
  align-items: center;
}

.cart {
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;
  text-decoration: underline;
}

.cart:hover {
  color: #fa510e;
  text-decoration: none;
}



.modal-content {
  max-height: 500px; 
  overflow-y: auto;
}
.cart {
  cursor: pointer;
}
.container {
  padding: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  font-size: 1.25rem;
}

.card-text {
  font-weight: light;
}
.logo{
  width: 75px;
}
</style>
