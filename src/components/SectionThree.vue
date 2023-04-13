<script>
// importo la componente card per il prodotto e la relativa immagine/descrizione
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
        // array dei proodotti(oggetti)
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

        <!-- sezione testo -->
        <div id="text-section-three">
            <!-- interpolo il testo tramite stringhe contenute nei data -->
            <div class="big">{{ titleSectionThree }}</div>
            <p>{{ paragraphSectionThree }}</p>
            <!-- classe del bottone presente nello style.scss -->
            <button class="btn-purple">Shop All Products</button>
        </div>

        <!-- sezione in cui scorrono le immagini -->
        <div id="images-section-three">

            <!-- bottone che se cliccato attiva la funzione(passata tramite emit) per scorrere le immagini verso sinistra di una misura pari alla larghezza dell'immagine(150px) + il gap(10px) -->
            <button @click="$emit('scrollLeftThree', 160, '#container-img-three')" class="btn-left">
                <i class="fa-solid fa-chevron-left"></i>
            </button>


            <div id="container-img-three">
                <!-- componente card della singola immagine con le relative informazioni -->
                <CardSectionThree v-for="product in productsThree" :product="product"></CardSectionThree>
            </div>

            <!-- bottone che se cliccato attiva la funzione(passata tramite emit) per scorrere le immagini verso destra di una misura pari alla larghezza dell'immagine(150px) + il gap(10px) -->
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