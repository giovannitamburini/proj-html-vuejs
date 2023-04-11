<script>

export default {
    data() {
        return {
            imageOne: './corporate.jpg',
            imageTwo: './wedding.jpg',
        }
    }
}

</script>

<template>
    <div id="section-two">
        <small>corporate & weddings</small>
        <div id="title-two">Baking special moments</div>
        <div id="container-images-two">
            <img :src="imageOne" alt="">
            <img :src="imageTwo" alt="">
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

    #container-images-two {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 40px;

        img {
            width: calc(100% / 2 - (40px / 2));
        }
    }
}
</style>