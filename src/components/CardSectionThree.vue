<script>
export default {
    data() {
        return {
            hiddenThree: false,
        }
    },

    props: {
        // prop di una prop
        product: Object,
    },

    methods: {
        overImage() {
            this.hiddenThree = true;
        },

        leaveImage() {
            this.hiddenThree = false;
        },
    }
}
</script>

<template>
    <div v-on:mouseover="overImage()" v-on:mouseleave="leaveImage()" class="single-image-three">

        <div class="container-hover">
            <img :src="product.image" alt="image product">

            <div :class="{ hidetext: hiddenThree }" class="hover-choice">select options / quick view</div>
        </div>

        <div>{{ product.name }}</div>
        <div>{{ product.price }}</div>
    </div>
</template>

<style lang="scss" scoped>
.single-image-three {
    min-width: calc(100% / 4 - (10px / 4 * 3));
    text-align: center;

    .container-hover {
        position: relative;
        width: 100%;
        aspect-ratio: 40/51;

        img {
            width: 100%;
            position: absolute;
            z-index: 1;
        }

        .hover-choice {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>