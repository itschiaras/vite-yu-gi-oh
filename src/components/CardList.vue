<template>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gap-3 justify-content-center">
            <CardComponent v-for="card in store.cardList" :card="card"/>
        </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { store } from '../assets/data/store';
export default {
    name: 'CardList',
    components: { CardComponent },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>