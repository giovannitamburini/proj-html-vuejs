<script>
export default {
    data() {
        return {
            hiddenThree: false,

            overText: 'select options / quick view',
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
            <!-- interpolazione del link dell'immagine tramite stringa contenuta nella proprietà di product -->
            <img :src="product.image" alt="image product">

            <!-- cambio lo z-index in base al valore di hiddenThree per mostrare il testo quando sono con il mouse in hover sulla card -->
            <div :class="{ hidetext: hiddenThree }" class="small hover-choice">{{ overText }}</div>
        </div>

        <!-- interpolazione contenuto tramite stringhe contenute nelle propietà di product -->
        <div id="text-card">{{ product.name }}</div>
        <div id="price-card">{{ product.price }}</div>

    </div>
</template>

<style lang="scss" scoped>
$purple: #55328B;

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

        .small {
            color: white;
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

    #text-card {
        padding: 10px 0;
        text-transform: capitalize;
        font-size: 1.1em;
        font-weight: bold;
        color: $purple;
        font-family: 'Lora', serif;

    }
}
</style>