<script>

// importo la sezione Header
import AppHeader from "./components/AppHeader.vue";
// importo la sezione Main
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      menu: [
        'home', 'shop', 'about', 'gallery', 'locations', 'journal', 'contact', 'my account'
      ],

    }
  },

  components: {
    AppHeader,
    AppMain,
  },
}
</script>

<template>
  <AppHeader :menuHeader="menu"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>