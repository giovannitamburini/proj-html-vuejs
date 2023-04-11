<script>
// importo la componente che è la prima sezione del main
import SectionOne from "./SectionOne.vue";
// importo lo store
import { store } from "../store.js";


export default {
    data() {
        return {
            store,
        }
    },

    components: {
        SectionOne,
    },

    methods: {
        scrollLeft() {
            let leftProduct = document.querySelector('');
            leftProduct.scrollBy(-208, 0);
        },

        scrollRight() {
            let rightProduct = document.querySelector('');
            rightProduct.scrollBy(208, 0);
        }
    }
}
</script>

<template>
    <div id="main">
        <SectionOne :productsOne="store.productList"></SectionOne>
    </div>
</template>

<style lang="scss" scoped>
#main {
    padding: 0 45px;
}
</style>