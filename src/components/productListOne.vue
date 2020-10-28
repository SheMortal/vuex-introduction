<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
        <li v-for="product in saleProducts" :key="product">
            <span class="name">{{product.name}}</span>
            <span class="price">R{{product.price}}</span>
        </li>
    </ul>
    <button v-on:click="reducePrice">Reduce Price</button>

    <!-- using parameters -->
    <button v-on:click="actIncreasePrice(5)">Increase Price</button>
  </div>
</template>

<script>
// mapping getters and actions
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    computed: {
        // state
        products(){
            return this.$store.state.products;
        },
        // getter
        // saleProducts(){
        //     return this.$store.getters.saleProducts;
        // }

        // mapping getters
        ...mapGetters([
            'saleProducts',
        ])
    },
    methods:{
        // reducePrice: function(){
        // //     this.$store.state.products.forEach(product => {
        // //         product.price -= 1;
        // //     });
        
        //  // commiting a mutation
        // // this.$store.commit('reducePrice');

        // // dispatch an acton that will commit a mutation
        // this.$store.dispatch('reducePrice');
        // },
        // increasePrice: function(amount){
        //     this.$store.dispatch('actIncreasePrice', amount);
        // }

        // mapping actions
        ...mapActions([
            'reducePrice',
            'actIncreasePrice'
        ])
    }
}
</script>

<style scoped>
#product-list-one{
    background: #307c58;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #e80c0c;
}
</style>
