<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
// imports
import ProductListOne from "./components/productListOne";
import ProductListTwo from "./components/productLIstTwo";

export default {
  data () {
    return {
      
    }
  },
  components:{
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
</style>
