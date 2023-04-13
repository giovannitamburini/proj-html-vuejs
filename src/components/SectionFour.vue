<script>
export default {
    data() {
        return {

            // testo che inserisco tramite interpolazione nella sezione della citazione
            activityCitation: 'Dont just take our word for it',
            citation: "Finally found an alternative to the mass produced products. Something that incorporates real organic ingredients, nutrient dense wellness while promoting sustainability and activity.",
            authorCitation: "Rachel Cooper, Founder",
        }
    },

    props: {
        processes: Array,
    }
}
</script>



<template>
    <div id="section-four">
        <!-- ciclo per ogni oggetto contenuto nell'array processes(props passata dal main) -->
        <div class="card" v-for="process in processes">

            <!-- link dell'immagine tramite la stringa contenuta nella proprietà image dell'oggetto -->
            <img :src="process.image" alt="">

            <!-- sezione testo in posizione absolute -->
            <div class="text-process">

                <div class="text-component">{{ process.title }}</div>

                <!-- contenitore del testo posizionato nella parte bassa di ogni processo -->
                <div class="text-component text-right">

                    <div class="small">{{ process.activity }}</div>

                    <div class="description">{{ process.description }}</div>

                </div>

                <!-- ordine delle carte espresso in numero, con position absolute in alto destra di ogni processo -->
                <div class="order">{{ process.order }}</div>
            </div>
        </div>

        <!-- sezione della citazione a cui cambio la posizione tramite la proprietà css 'order' -->
        <div id="citation">

            <!-- classe presente nello style.scss -->
            <div class="small"> {{ activityCitation }}</div>
            <div> "{{ citation }}"</div>
            <div>{{ authorCitation }}</div>

        </div>

    </div>
</template>



<style lang="scss" scoped>
$lightpurple: #F0EDF5;
$purple: #55328B;


#section-four {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;

    .card {
        width: 100%;
        position: relative;
        color: white;

        img {
            width: 100%;
        }

        .text-process {
            position: absolute;
            z-index: 2;
            top: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: column wrap;
            justify-content: space-between;
            padding: 50px;
            background-color: rgba(0, 0, 0, 0.3);

            .text-component:first-child {
                font-size: 2.5em;
                font-weight: bold;
            }

            .text-component {
                width: 38%;

                .description {
                    padding-top: 10px;
                }
            }

            .order {
                position: absolute;
                top: 40px;
                right: 40px;

                font-size: 4em;
            }
        }

        &:first-child {
            order: 0;

            .text-right {
                align-self: flex-end;
            }
        }

        &:nth-child(2) {
            width: calc(50% - 20px / 2);
            order: 1;

            .text-component {
                width: 50%;
            }
        }

        &:nth-child(3) {
            order: 3;
        }
    }

    #citation {
        width: calc(50% - 20px / 2);
        order: 2;
        padding: 40px;
        background-color: $lightpurple;
        color: $purple;

        div:nth-child(2) {
            font-size: 2em;
            font-weight: bold;
            padding: 20px 0;
        }
    }
}
</style>