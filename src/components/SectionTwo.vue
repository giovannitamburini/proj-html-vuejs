<script>

export default {
    data() {
        return {
            imageOne: './corporate.jpg',
            imageOneB: './corporate-hover.jpg',

            imageTwo: './wedding.jpg',
            imageTwoB: './wedding-hover.jpg',

            // booleane per gestire la visibilità degli elementi solo con il muose in hover sui contenitori (container-image-two)
            hiddenTwoA: false,
            hiddenTwoB: false,

        }
    },

    methods: {
        // funzioni per gestire le variabili booleane che controllano gli effetti scaturiti da mousehover e mouseleave
        overImage() {
            this.hiddenTwoA = true;
        },

        leaveImage() {
            this.hiddenTwoA = false;
        },

        overImageB() {
            this.hiddenTwoB = true;
        },

        leaveImageB() {
            this.hiddenTwoB = false;
        },
    }
}

</script>

<template>
    <div id="section-two">
        <small>corporate & weddings</small>
        <div id="title-two">Baking special moments</div>

        <!-- container con diplay flex per contenere le due immagini e le relative componenti visibili solo quando vado in hover con il mouse -->
        <div id="container-two">

            <!-- contenitore immagine uno -->
            <div v-on:mouseover="overImage()" v-on:mouseleave="leaveImage()" class="container-image-two">
                <!-- link delle immagini presi dai data -->
                <!-- immagine base -->
                <img :src="imageOne" class="image-a" alt="corporate">
                <!-- immagine visibile solo con il muose in hover -->
                <img :src="imageOneB" :class="{ imagehover: hiddenTwoA }" class="image-b" alt="corporate bake">
                <!-- testo relativo all'immagine visibile solo con il mouse in hover -->
                <div :class="{ texthover: hiddenTwoA }" class="text-image-two">
                    <small>international bakery</small>
                    <div>corporate events</div>
                    <button class="btn-purple">explore more</button>
                </div>
            </div>

            <!-- contenitore immagine due -->
            <div v-on:mouseover="overImageB()" v-on:mouseleave="leaveImageB()" class="container-image-two">
                <!-- link delle immagini presi dai data -->
                <!-- immagine base -->
                <img :src="imageTwo" class="image-a" alt="wedding">
                <!-- immagine visibile solo con il muose in hover -->
                <img :src="imageTwoB" :class="{ imagehover: hiddenTwoB }" class="image-b" alt="wedding cake">
                <!-- testo relativo all'immagine visibile solo con il mouse in hover -->
                <div :class="{ texthover: hiddenTwoB }" class="text-image-two">
                    <small>international bakery</small>
                    <div>wedding events</div>
                    <button class="btn-purple">explore more</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#section-two {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    small {
        text-transform: capitalize;
    }

    #title-two {
        font-size: 1.5em;
        padding: 13px 0 25px 0;
    }

    #container-two {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 50px;

        .container-image-two {
            position: relative;
            width: calc(100% / 2 - (50px / 2));
            aspect-ratio: 1/1;

            .image-a,
            .image-b {
                position: absolute;
                width: 100%;
            }

            .image-a {
                z-index: 2;
            }

            .image-b {
                z-index: 1;
            }

            .imagehover {
                z-index: 3;
            }

            .text-image-two {
                position: absolute;
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 5px;
                color: white;
            }

            .texthover {
                z-index: 4;
            }
        }
    }
}
</style>