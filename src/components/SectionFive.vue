<script>

export default {
    data() {
        return {

        }
    },

    props: {
        shops: Array,
    }
}
</script>

<template>
    <div id="section-five">

        <!-- sezione del titolo  -->
        <div>locations</div>
        <div id="title-section-five">Visit our Bakeries</div>

        <!-- contenitore degli shops -->
        <div id="container-shops">

            <!-- ciclo per ogni oggetto contenuto nell'array shops(props) -->
            <div v-for="shop in shops" class="shop">

                <!-- interpolazione del link dell'immagine tramite la proprietà 'image' dell'array-->
                <img :src="shop.image" alt="">

                <!-- interpolazione del nome della città tramite la proprietà 'city' dell'array-->
                <div class="city">{{ shop.city }}</div>

                <ul>
                    <!-- li del numero di telefono -->
                    <li>
                        <div>call us</div>
                        <div>{{ shop.phone }}</div>
                    </li>
                    <!-- li dell'orario di apertura -->
                    <li>
                        <div>open all week</div>
                        <div>{{ shop.time }}</div>
                    </li>

                    <li>
                        <!-- classe del bottone prsente nello style.scss -->
                        <button class="btn-white">View Map</button>
                    </li>
                </ul>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
$purple: #55328B;


#section-five {
    text-align: center;

    #title-section-five {
        font-size: 2em;
        font-weight: bold;
        padding: 8px 0 20px;
        color: $purple;
    }

    #container-shops {
        display: flex;

        .shop {
            width: 50%;
            text-align: center;

            &:first-child {
                background-color: #f1f9fb;
            }

            &:last-child {
                background-color: #faf3e3;
            }

            img {
                width: 100%;
            }

            .city {
                font-size: 2em;
                font-weight: bold;
                padding-top: 25px;
                padding-bottom: 20px;
                color: $purple;
            }

            ul {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                padding-bottom: 20px;
            }
        }
    }
}
</style>