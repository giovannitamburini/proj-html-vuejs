<script>

// importo la sezione Header
import AppHeader from "./components/AppHeader.vue";
// importo la sezione Main
import AppMain from "./components/AppMain.vue";
// importo lo store
import { store } from "./store.js";


export default {
  data() {
    return {
      store,

      menu: [
        'home', 'shop', 'about', 'gallery', 'locations', 'journal', 'contact', 'my account'
      ],

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
        }
      ],

    }
  },

  components: {
    AppHeader,
    AppMain,
  },

  created() {
    this.store.productList = this.products;
  }
}
</script>

<template>
  <AppHeader :menuHeader="menu"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>