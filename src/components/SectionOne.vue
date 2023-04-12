<script>

import CardSectionOne from "./CardSectionOne.vue";

export default {
    data() {
        return {
            paragraphSectionOne: 'All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all natural, all organic ingredients.',
        }
    },

    components: {
        CardSectionOne,
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

            <!-- bottone che se cliccato attiva la funzione(passata tramite emit) per scorrere le immagini verso sinistra di una misura pari alla larghezza dell'immagine + il gap(10px) -->
            <button @click="$emit('scrollLeftOne', 290, '#container-img-one')" class="btn-left"><i
                    class="fa-solid fa-chevron-left"></i></button>

            <div id="container-img-one">
                <!-- componente card della singola immagine con le relative informazioni -->
                <CardSectionOne v-for="(product, index) in productsOne" :product="product"></CardSectionOne>
            </div>

            <!-- bottone che se cliccato attiva la funzione(passata tramite emit) per scorrere le immagini verso destra di una misura pari alla larghezza dell'immagine + il gap(10px) -->
            <button @click="$emit('scrollRightOne', 290, '#container-img-one')" class="btn-right"><i
                    class="fa-solid fa-chevron-right"></i></button>
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
        position: relative;
        width: calc(280px * 2 + 10px);

        #container-img-one {
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