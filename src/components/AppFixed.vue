<script>
export default {
    data() {
        return {
            textCardOne: 'demos',
            textCardTwo: 'on sale',
        }
    },
}
</script>

<template>
    <div id="fixed-container">
        <!-- card 1 -->
        <div class="fixed-card">

            <div class="fixed-icon"><i class="fa-solid fa-folder"></i></div>
            <div class="fixed-text">{{ textCardOne }}</div>
        </div>
        <!-- card 2 -->
        <div class="fixed-card">

            <div class="fixed-icon"><span id="dollar">$</span>39</div>
            <div class="fixed-text">{{ textCardTwo }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#fixed-container {

    display: flex;
    flex-direction: column;
    gap: 5px;

    .fixed-card {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 50px;
        aspect-ratio: 1/1;
        border-radius: 5px;
        color: #33475b;
        background-color: white;
        box-shadow: 0 0 10px grey;

        &:last-child {

            .fixed-icon {
                position: relative;
                font-weight: bold;
                color: #65bc7b;

                #dollar {
                    position: absolute;
                    top: -1px;
                    left: -7px;
                    font-size: 0.7em;
                }
            }
        }

        .fixed-icon {
            font-size: 1.7em;
        }

        .fixed-text {
            font-size: 0.9em;
            text-transform: capitalize;
        }
    }
}
</style>