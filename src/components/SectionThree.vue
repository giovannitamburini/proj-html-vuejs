<script>

import CardSectionThree from './CardSectionThree.vue';

export default {
    data() {
        return {
            titleSectionThree: 'Find a freshly baked product perfect for you',
            paragraphSectionThree: 'Integer a nibh vitae ex porttitor rutrum et ut velit. Etiam ac felis at leo feugiat placerat. Sed ac nulla id orci tempor convallis sed.',
        }
    },

    components: {
        CardSectionThree,
    },

    props: {
        productsThree: Array,
    },

    emits: [
        'scrollLeftThree',
        'scrollRightThree',
    ],
}
</script>

<template>
    <div id="section-three">

        <div id="text-section-three">
            <div>{{ titleSectionThree }}</div>
            <p>{{ paragraphSectionThree }}</p>
            <button class="btn-purple">Shop All Products</button>
        </div>

        <div id="images-section-three">
            <button @click="$emit('scrollLeftThree', 160, '#container-img-three')" class="btn-left">
                <i class="fa-solid fa-chevron-left"></i>
            </button>

            <div id="container-img-three">
                <CardSectionThree v-for="product in productsThree" :product="product"></CardSectionThree>
            </div>

            <button @click="$emit('scrollRightThree', 160, '#container-img-three')" class="btn-right">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
#section-three {
    display: flex;
    justify-content: space-between;
    align-items: center;

    #text-section-three {
        width: 25%;
        text-align: center;

        div {
            font-size: 1.5em;
        }

        p {
            padding: 15px 0;
        }
    }

    #images-section-three {
        position: relative;
        width: calc(150px * 4 + (10px * 3));

        #container-img-three {
            display: flex;
            align-items: center;
            flex-flow: row nowrap;
            gap: 10px;
            overflow-x: scroll;
            scroll-behavior: smooth;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
}
</style>