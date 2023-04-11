<script>

export default {
    data() {
        return {
            paragraphSectionOne: 'All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all natural, all organic ingredients.',
        }
    },

    // utilizzo le props per non importare lo store in ogni componente in cui ne ho bisogno, ma solo nel main
    props: {
        productsOne: Array,
    }
}
</script>

<template>
    <div id="section-one">

        <!-- sezione testo -->
        <div id="text-section-one">
            <small>our products</small>
            <!-- prendo il testo del paragrafo dai data in modo che il template risulti più snello -->
            <p>{{ paragraphSectionOne }}</p>
            <!-- classe del button presente nello style.scss -->
            <button class="btn-purple">Start Shopping</button>
        </div>

        <!-- sezione in cui scorrono le immagini -->
        <div id="images-section-one">

            <button class="btn-left"><i class="fa-solid fa-chevron-left"></i></button>


            <img v-for="product in productsOne" :src="product.image" alt="">


            <button class="btn-right"><i class="fa-solid fa-chevron-right"></i></button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
#section-one {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    height: 280px;

    #text-section-one {
        width: 35%;

        p {
            padding: 13px 0 25px 0;
        }
    }

    #images-section-one {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: row nowrap;
        gap: 10px;
        width: 55%;
        height: 100%;
        overflow-x: scroll;
        scroll-behavior: smooth;
        position: relative;

        img {
            height: 100%;
        }
    }
}
</style>


<!-- <div id="section-one" v-for="product in productsOne"> {{ product.name }}</div> -->