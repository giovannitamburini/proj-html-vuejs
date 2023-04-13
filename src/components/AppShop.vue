<script>

export default {
    data() {
        return {

            shopImage: './call-to-action.jpg',
            smallTitle: 'Try our seasonal products',
            title: 'Order for pick-up or delivery to your home',
        }
    },
}
</script>

<template>
    <div id="shop">

        <!-- interpolazione del link dell'immagine -->
        <img :src="shopImage" alt="">

        <!-- testo contenuto nei data -->
        <div id="container-shop-text">

            <div>{{ smallTitle }}</div>
            <div id="shop-title">{{ title }}</div>
            <!-- classe del bottone presente nello style.scss -->
            <button class="btn-white">Shop Now</button>

        </div>
    </div>
</template>

<style lang="scss" scoped>
#shop {
    margin-top: 95px;
    position: relative;

    img {
        width: 100%;
    }

    #container-shop-text {
        position: absolute;
        top: 20%;
        left: 25%;
        color: white;

        #shop-title {
            padding: 20px 0 40px 0;
        }
    }
}
</style>