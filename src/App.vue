<script>

// importo lo store
import { store } from "./store.js";

// importo la sezione Header
import AppHeader from "./components/AppHeader.vue";
// importo la sezione Main
import AppMain from "./components/AppMain.vue";
// importo la sezione Shop
import AppShop from "./components/AppShop.vue";
// importo la sezione Footer
import AppFooter from "./components/AppFooter.vue";

import AppFixed from "./components/AppFixed.vue";

export default {
  data() {
    return {
      store,

      menu: [
        'home', 'shop', 'about', 'gallery', 'locations', 'journal', 'contact', 'my account'
      ],

      footerMenu: [],

      products: [
        {
          image: '/choco-chip-cookies.jpg',
          name: 'Choco chip cookies',
          category: 'Cookies, Pastries',
          price: '$19.00 $39.00'
        },
        {
          image: '/strawberry-jam-cookies.jpg',
          name: 'Strawberry jam cookies',
          category: 'Cookies, Pastries',
          price: '$19.00 $ 39.00'
        },
        {
          image: '/strawberry-donut.jpg',
          name: 'Strawberry donut',
          category: 'Donut, Pastries',
          price: '$9.00 $19.00'
        },
        {
          image: '/perfect-macarons.jpg',
          name: 'Perfect macarons',
          category: 'Macarones, Pastries',
          price: '$14.00 $29.00'
        },
        {
          image: '/blackberry-stuffed-bread.jpg',
          name: 'Blackberry-stuffed-bread',
          category: 'Bread, Cake',
          price: '$9.00 $14.00'
        },
        {
          image: '/cherry-cake.jpg',
          name: 'Cherry cake',
          category: 'Cake',
          price: '$39.00 $59.00'
        },
        {
          image: '/cookies-with-ice-cream.jpg',
          name: 'Cookies with ice cream',
          category: 'Cookies, Pastries',
          price: '$24.00 $44.00'
        },
        {
          image: '/glazed-pancake-with-lemon.jpg',
          name: 'Glazed pancake with lemon',
          category: 'Pancake, Cake',
          price: '$9.00 $19.00'
        },
        {
          image: '/home-bread.jpg',
          name: 'Home bread',
          category: 'Bread, Cake',
          price: '$9.00 $19.00'
        },
        {
          image: '/premium-bread.jpg',
          name: 'Premium bread',
          category: 'Bread',
          price: '$4.00 $9.00'
        },
        {
          image: '/small-cupcake.jpg',
          name: 'Small cupcake',
          category: 'Cupcake, Pastries',
          price: '$10.00 $19.00'
        }
      ],

      processes: [
        {
          title: 'Tell us what you have in mind',
          activity: 'Manual ingredients selection',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, unde. Magnam quia eveniet eos tenetur exercitationem, et commodi id sapiente repudiandae temporibus animi aliquid praesentium ex explicabo blanditiis sit laudantium.',
          image: './bakery-process-1.jpg',
          order: '01',
        },
        {
          title: 'We start Baking',
          activity: 'Sweet & delicious',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, unde. Magnam quia eveniet eos tenetur exercitationem, et commodi id sapiente repudiandae temporibus animi aliquid praesentium ex explicabo blanditiis sit laudantium.',
          image: './bakery-process-2.jpg',
          order: '02',
        },
        {
          title: 'Delivered to your home',
          activity: 'Baked to order & gift wrapped',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, unde. Magnam quia eveniet eos tenetur exercitationem, et commodi id sapiente repudiandae temporibus animi aliquid praesentium ex explicabo blanditiis sit laudantium.',
          image: './bakery-process-3.jpg',
          order: '03',
        },
      ],

      shops: [
        {
          city: 'New York',
          image: './new-york.jpg',
          phone: '1.800.458.556',
          time: '9.00 AM - 6.00 PM',
        },
        {
          city: 'London',
          image: './london.jpg',
          phone: '1.900.558.555',
          time: '9.00 AM - 6.00 PM',
        },
      ],

      socialPhotos: [
        './social-1.jpg', './social-2.jpg', './social-3.jpg', './social-4.jpg', './social-5.jpg', './social-6.jpg'
      ],

      socialChannels: [
        '<i class="fa-brands fa-instagram"></i>',
        '<i class="fa-brands fa-twitter"></i>',
        '<i class="fa-brands fa-facebook-f"></i>',
        '<i class="fa-brands fa-pinterest-p"></i>',
      ]

    }
  },

  components: {
    AppHeader,
    AppMain,
    AppShop,
    AppFooter,
    AppFixed,
  },

  created() {
    this.store.productList = this.products;

    this.store.processesList = this.processes;

    this.store.shopList = this.shops;

    this.store.photosList = this.socialPhotos;
    // eguaglio l'array 'footeMenu' (il menu da inserire nel footer) al menu dell'header ma senza il primo e l'ultimo elemento
    this.footerMenu = this.menu.slice(1, 7);
    // aggiungo un elemento all'array 'footerMenu'
    this.footerMenu.push('orders');
  }
}
</script>

<template>
  <!-- componente header in cui è inserita la componente Navbar. tramite una prop passiamo alla componente l'array 'menu' presente nei data -->
  <AppHeader :menuHeader="menu"></AppHeader>

  <!-- componente delle due card in posizione fixed in alto a destra -->
  <div id="fixed">
    <AppFixed></AppFixed>
  </div>

  <!-- componente Main in cui sono inserite le 6 componenti sezione  -->
  <AppMain></AppMain>

  <!-- componente shop -->
  <AppShop></AppShop>

  <!-- componente footer a cui passiamo tramite una prop l'array 'footerMenu' che è uguale all'array 'menu' ma senza il primo elemento e con un elemento in più alla fine -->
  <AppFooter :menuFooter="footerMenu"></AppFooter>
</template>

<style lang="scss" scoped>
#fixed {
  position: fixed;
  z-index: 1;
  top: 100px;
  right: 10px;
}
</style>