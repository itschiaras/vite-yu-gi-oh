<template>
    <div class="row pt-3">
        <div class="col d-flex justify-content-center ">
            <form class="d-flex w-50" @submit.prevent="setSearch">
            <div class="me-2">
                <input type="text" class="form-control" id="cardname" placeholder="Search name" v-model.trim="store.search.fname">
            </div>
            <select class="form-select me-2" id="searchArchetype" v-model="store.search.archetype">
                <option selected value="">Choose...</option>
                <option :value="archetype.archetype_name" v-for="(archetype, index) in archetypeOptions" :key="index">{{ archetype.archetype_name }}</option>
            </select>
            <div class="me-2">
                <button type="submit" class="btn btn-primary">Search</button>
            </div>
            <div>
                <button type="reset" class="btn btn-primary" @click="resetSearch">Reset</button>
            </div>
        </form>
        </div>
        
    </div>
        
</template>

<script>
 import { store } from '../assets/data/store';
 import axios from 'axios';
export default {
    name: 'SearchBar',
    data() {
        return {
            store,
            archetypeOptions: []
        }
    },
    methods: {
        setSearch() {
            this.$emit('searchChange');
        },
        resetSearch() {
            store.search.archetype = '';
            store.search.fname = '';
            this.$emit('searchChange');
        }
    },
    mounted() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((res) => {
            console.log(res.data);
            this.archetypeOptions = res.data
            console.log(this.archetypeOptions)
        })
    }
}
</script>

<style lang="scss" scoped></style>