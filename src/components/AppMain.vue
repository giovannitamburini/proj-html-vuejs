<script>
// importo la componente che è la prima sezione del main
import SectionOne from "./SectionOne.vue";
// importo la componente che è la seconda sezione del main
import SectionTwo from "./SectionTwo.vue";

import SectionThree from "./SectionThree.vue";

import SectionFour from "./SectionFour.vue";

import SectionFive from "./SectionFive.vue";

import SectionSix from "./SectionSix.vue";

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
        SectionThree,
        SectionFour,
        SectionFive,
        SectionSix,
    },

    methods: {
        // funzione per scrollare di una misura fissa verso sinistra 
        scrollLeft(left, container) {
            let leftProduct = document.querySelector(container);
            leftProduct.scrollBy(-left, 0);
        },

        scrollRight(right, container) {
            let rightProduct = document.querySelector(container);
            rightProduct.scrollBy(right, 0);
        },
    }
}
</script>

<template>
    <div id="main">

        <SectionOne :productsOne="store.productList" @scrollLeftOne="scrollLeft" @scrollRightOne="scrollRight">
        </SectionOne>

        <SectionTwo></SectionTwo>

        <SectionThree :productsThree="store.productList" @scrollLeftThree="scrollLeft" @scrollRightThree="scrollRight">
        </SectionThree>

        <SectionFour :processes="store.processesList"></SectionFour>

        <SectionFive :shops="store.shopList"></SectionFive>

        <SectionSix :photos="store.photosList"></SectionSix>

    </div>
</template>

<style lang="scss" scoped>
#main {
    padding: 0 100px;

    * {
        padding-top: 95px;
    }

}
</style>