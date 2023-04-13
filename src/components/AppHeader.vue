<script>

import NavbarItem from "./NavbarItem.vue";

export default {
    data() {
        return {
            background: './jumbotron.jpg',
            title: 'The Perfect Fresh Bread',
            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore quod dolorum quaerat culpa ex atque.',
        }
    },

    components: {
        NavbarItem,
    },

    props: {
        menuHeader: Array,
    }
}
</script>

<template>
    <!-- imposto il background tramite un v-bind(posso farlo anche dal scss) -->
    <div id="header" :style="{ backgroundImage: 'url(' + background + ')' }">

        <!-- componente Navbar in cui è inserito il logo, il menu e il carrello -->
        <NavbarItem :menuNavbar="menuHeader"></NavbarItem>

        <!-- sezione scritta del header -->
        <div id="header-text">
            <!-- classe small presente nello style.scss -->
            <div class="small">fresh & tasty bakery every day</div>
            <!-- inserisco il contenuto del del titolo e del paragrafo tramite i data per rendere più snello il template -->
            <h1>{{ title }}</h1>
            <p> {{ paragraph }}</p>
            <button class="btn-white">Explore our products</button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
$purple: #55328B;

#header {
    // impostazione della grandezza del header e del relativo background
    width: 100%;
    min-height: 500px;
    background-size: cover;
    background-position-x: right 30px;

    #header-text {
        height: 100%;
        width: 30%;
        padding-top: 80px;
        // padding condiviso da tutta la pagina ma non dalla Navbar
        padding-left: 45px;

        // div {
        //     font-size: 0.75em;
        //     text-transform: uppercase;
        // }

        h1 {
            padding: 10px 0 13px 0;
            font-size: 3em;
            color: $purple;
        }

        p {
            padding-bottom: 20px;
        }
    }
}
</style>