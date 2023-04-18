<template>
  <HeaderComponent/>
  <main class="container mt-5 bg-light">
    <SearchBar/>
    <CardList/>
  </main>
  
</template>

<script>
  import axios from 'axios';
  import { store } from './assets/data/store';
  import HeaderComponent from './components/HeaderComponent.vue';
  import SearchBar from './components/SearchBar.vue'
  import CardList from './components/CardList.vue';
  export default {
    name: 'App',
    components: { HeaderComponent, CardList, SearchBar},
    data() {
      return {
        store
      }
    },
    methods: {
      getCardsInfo () {
        const url = store.baseUrl + store.endPoint;
        axios.get(url).then((res) => {
          store.cardList = res.data.data
          console.log(store.cardList)
        })
      }
    },
    mounted() {
      store.endPoint = 'v7/cardinfo.php?num=50&offset=0';
      this.getCardsInfo();
    }
  }
</script>

<style lang="scss" scoped>

</style>