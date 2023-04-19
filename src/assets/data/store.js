import {reactive} from 'vue';

export const store = reactive({
    cardList: [],
    baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    endPoint: '',
    search: {
        archetype: '',
        fname: ''
    }
})