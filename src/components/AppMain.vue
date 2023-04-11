<script>
// importo la componente che è la prima sezione del main
import SectionOne from "./SectionOne.vue";
// importo la componente che è la seconda sezione del main
import SectionTwo from "./SectionTwo.vue";

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
        SectionTwo,
    },

    methods: {
        scrollLeft() {
            let leftProduct = document.querySelector('#container-img-one');
            leftProduct.scrollBy(-220, 0);
        },

        scrollRight() {
            let rightProduct = document.querySelector('#container-img-one');
            rightProduct.scrollBy(220, 0);
        }
    }
}
</script>

<template>
    <div id="main">

        <SectionOne :productsOne="store.productList" @scrollLeftOne="scrollLeft()" @scrollRightOne="scrollRight()">
        </SectionOne>
        <SectionTwo></SectionTwo>
    </div>
</template>

<style lang="scss" scoped>
#main {
    padding: 0 45px;

    * {
        padding-top: 95px;
    }
}
</style>