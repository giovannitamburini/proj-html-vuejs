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
    },

    emits: [
        'scrollLeftOne',
        'scrollRightOne',
    ],
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

            <button @click="$emit('scrollLeftOne')" class="btn-left"><i class="fa-solid fa-chevron-left"></i></button>

            <div id="container-img-one">
                <img v-for="product in productsOne" :src="product.image" alt="">
            </div>

            <button @click="$emit('scrollRightOne')" class="btn-right"><i class="fa-solid fa-chevron-right"></i></button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
#section-one {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    #text-section-one {
        width: 35%;

        p {
            font-size: 1.5em;
            padding: 13px 0 25px 0;
        }
    }

    #images-section-one {
        width: 60%;
        height: 100%;
        position: relative;

        #container-img-one {
            display: flex;
            align-items: center;
            flex-flow: row nowrap;
            gap: 10px;
            width: 100%;
            height: 100%;
            overflow-x: scroll;
            overflow-y: hidden;
            scroll-behavior: smooth;

            &::-webkit-scrollbar {
                display: none;
            }

            img {
                width: calc(100% / 2 - (10px / 2));
                // proporzione data dalla grandezza nativa dell'immagine(400x510)
                aspect-ratio: 40/51;
            }
        }
    }
}
</style>


<!-- <div id="section-one" v-for="product in productsOne"> {{ product.name }}</div> -->