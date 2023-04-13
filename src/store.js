import { reactive } from "vue";

export const store = reactive({

    // array uguale all'array 'products' presente nei data di App.vue
    productList: [],

    // array uguale all'array 'processes' presente nei data di App.vue
    processesList: [],

    // array uguale all'array 'shops' presente nei data di App.vue
    shopList: [],

    // array uguale all'array 'socialPhotos' presente nei data di App.vue
    photosList: [],
});