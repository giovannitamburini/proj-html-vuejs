<script>
export default {
    data() {
        return {

        }
    },

    props: {
        photos: Array,
    }
}
</script>

<template>
    <div id="section-six">

        <!-- ciclo per ogni stringa contenuta all'interno dell'array photos, passato tramite props e uguale all'array nella componente App.vue -->
        <div v-for="photo in photos" class="photo">

            <!-- interpolazione del link dell'immagine tramite la singola stringa di indice i dell'array photos -->
            <img :src="photo" alt="">
        </div>

        <!-- sezione grande quanto due card in cui è inserito il titolo della sezione e il bottono per seguire la pagina instagram -->
        <div id="sharing">

            <div>made for sharing</div>
            <div id="title-section-six">let's stay in touch</div>
            <!-- classe presente nello style.scss -->
            <button class="btn-purple"><i class="fa-brands fa-instagram"></i> follow us</button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
$lightpurple: #F0EDF5;



#section-six {
    display: flex;
    flex-flow: row wrap;
    gap: 30px;

    .photo {
        width: calc(100% / 4 - (30px / 4 * 3));
        order: 3;

        &:first-child {
            order: 1;
        }

        img {
            width: 100%;
        }
    }

    #sharing {
        order: 2;
        width: calc(100% / 2 - (30px / 4 * 2));
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        gap: 15px;
        background-color: $lightpurple;

        #title-section-six {
            font-size: 2em;
        }
    }
}
</style>