<script>

export default {
    data() {
        return {

        }
    },

    props: {
        menuNavbar: Array,
    },
}
</script>

<template>
    <div id="navbar">
        <!-- logo -->
        <img id="logo" src="/avada-bakery-logo.png" alt="bakery logo">

        <!-- menu della Navbar -->
        <div id="menuNav">
            <ul>
                <!-- ciclo per ogni elemento contenuto nella props 'menuHeader' che è un array passatogli da App.vue -->
                <li v-for="item in menuNavbar"><a href=""> {{ item }} </a></li>
            </ul>

            <!-- carrello -->
            <a href=""><i class="fa-sharp fa-solid fa-cart-shopping"></i></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$purple: #55328B;

#navbar {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    color: $purple;

    #logo {
        height: 100%;
    }

    #menuNav {
        display: flex;
        gap: 15px;

        ul {
            display: flex;
            gap: 15px;
            font-size: 0.9em;
            text-transform: uppercase;

            li {
                position: relative;
            }

            li:hover::before {
                content: '';
                position: absolute;
                width: 100%;
                border: 1px solid $purple;
                left: 50%;
                top: 110%;
                transform: translateX(-50%);
            }
        }
    }
}
</style>