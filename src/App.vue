<script>

// importo la sezione Header
import AppHeader from "./components/AppHeader.vue";

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
  }
}
</script>

<template>
  <AppHeader :menuHeader="menu"></AppHeader>
</template>

<style lang="scss" scoped></style>