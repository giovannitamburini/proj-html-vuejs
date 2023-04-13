<script>
export default {
    data() {
        return {
            footerLogo: './avada-bakery-logo.png',

            copyright: 'Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress',

            titleSubscribe: 'Subscribe to our Newsletter',

            placeholderInput: 'Enter email adress*',

        }
    },

    props: {
        menuFooter: Array,
    }
}
</script>

<template>
    <div id="footer">

        <!-- parte sinistra del footer -->
        <div id="footer-left">

            <!-- interpolazione del link dell'immagine tramite stringa contenuta nei data -->
            <img :src="footerLogo" alt="">

            <!-- menu del footer -->
            <ul>
                <!-- ciclo le voci del menu per ogni elemento contenuto nell'array 'menuFooter' (prop) -->
                <li v-for="item in menuFooter"><a href="">{{ item }}</a></li>

                <!-- voce del menu statica in cui c'è l'icona del carrello e il numero di articoli in esso -->
                <li>
                    <!-- icona carrello -->
                    <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                    <!-- conteggio prodotti nel carrello -->
                    <span id="items-cart">0</span>
                </li>
            </ul>

            <!-- copyright (interpolato tramite stringa contenuta nei data) e relativa icona -->
            <div><small><i class="fa-regular fa-copyright"></i> {{ copyright }}</small></div>

        </div>

        <!-- parte destra del footer -->
        <div id="footer-right">

            <!-- interpolazione del titolo tramite stringa contenuta nei data -->
            <div>{{ titleSubscribe }}</div>

            <!-- contenitore dell'input e bottone di sottoscrizione -->
            <div id="registration">
                <!-- interpolazione del placeholder tramite stringa contenuta nei data -->
                <input type="email" :placeholder="placeholderInput">
                <!-- classe del bottone presente nello style.scss -->
                <button class="btn-purple">Subscribe</button>
            </div>

            <!-- lista delle icone dei canali social -->
            <ul>
                <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href=""><i class="fa-brands fa-pinterest-p"></i></a></li>
            </ul>

        </div>
    </div>
</template>

<style lang="scss" scoped>
// color
$purple: #55328B;
$lightpurple: #F0EDF5;


#footer {
    padding: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    #footer-left,
    #footer-right {

        display: flex;
        flex-flow: column nowrap;
    }

    #footer-left {

        align-items: flex-start;

        img {
            height: 50px;
        }

        ul {
            display: flex;
            flex-flow: row wrap;
            gap: 20px;
            padding: 20px 0 70px 0;
            color: $purple;

            #items-cart {
                margin-left: 3px;
                padding: 1px 6px;
                border-radius: 50%;
                background-color: $lightpurple;
            }
        }
    }

    #footer-right {
        align-items: flex-end;

        #registration {

            display: flex;
            flex-flow: row wrap;
            align-items: stretch;
            gap: 10px;
            padding: 30px 0 80px 0;

            input {
                width: 250px;
                padding-left: 10px;
                border: 1px solid $lightpurple;
                border-radius: 3px;
            }
        }

        ul {
            display: flex;
            flex-flow: row nowrap;
            gap: 20px;
        }
    }
}
</style>