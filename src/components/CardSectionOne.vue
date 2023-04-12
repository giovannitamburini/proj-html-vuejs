<script>

export default {
    data() {
        return {
            hiddenOne: false,
        }
    },

    props: {
        // prop di una prop
        product: Object,
    },

    methods: {
        // funzioni per cambiare il valore della booleana che gestisce l'effetto hover sulla singola card
        overImage() {

            this.hiddenOne = true;
        },

        leaveImage() {

            this.hiddenOne = false;
        },
    }
}
</script>

<template>
    <!-- il mouse in hover  attiva la funzione che cambia il valore della booleana hiddenOne che gestisce le varie classi che cambiano gli z-index e quando il mouse lascia l'area del contenitore si attiva la funzione che ricambia il valore della boolena -->
    <div v-on:mouseover="overImage()" v-on:mouseleave="leaveImage()" class="single-image-one">

        <img :src="product.image" alt="image product">

        <!-- lista visibile tramite z-index, gestito dalle funzioni sopracitate(overImage & leaveImage) -->
        <ul :class="{ hidetext: hiddenOne }">
            <li>{{ product.name }}</li>
            <li>{{ product.category }}</li>
            <li>{{ product.price }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.single-image-one {
    min-width: calc(100% / 2 - 5px);
    aspect-ratio: 40/51;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 1;
    }

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        position: absolute;
    }
}
</style>