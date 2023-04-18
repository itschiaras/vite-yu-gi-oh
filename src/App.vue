<template>
  <HeaderComponent />
  <main class="container mt-5 bg-light">
    <SearchBar @search-change="getArchetypes" />
    <CardList />
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
  components: { HeaderComponent, CardList, SearchBar },
  data() {
    return {
      store
    }
  },
  methods: {
    getCardsInfo() {
      const url = store.baseUrl + store.endPoint;  
      axios.get(url).then((res) => {
        store.cardList = res.data.data
        console.log(store.cardList)
      })
    },
    getArchetypes() {
      const URL = store.baseUrl + store.endPoint;
      let options = {}
      let params = {}
      for (let key in store.search) {
        
        if (store.search[key]) {
          params[key] = store.search[key].archetype_name
          
        }
      }
      
      if (Object.keys(params).length > 0) {
        options.params = params;
        console.log(options)
      }

      axios.get(URL, options).then((res) => {
        store.cardList = res.data.data
      })
    }
  },
  mounted() {
    store.endPoint = '?num=50&offset=0';
    this.getCardsInfo();
  }
}
</script>

<style lang="scss" scoped></style>