// setting up a central store
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // only mutations from the store allowed(strict: true  )
    strict: true,
    // define state of the application
    state: {
        products: [
        {name: 'Banana Skin', price: 20},
        {name: 'Shiny Star', price: 40},
        {name: 'Green Shells', price: 60},
        {name: 'Red Shells', price: 80},
      ]
    },
    getters:{
      saleProducts: state =>{
        var saleProducts = state.products.map(product => {
          return {
              name:'**' + product.name + '**',
              price: product.price / 2
          }
        });
        return saleProducts;
      }
    },
    mutations:{
      reducePrice: state =>{
        state.products.forEach(product => {
          product.price -= 1;
      });
      },
      mutIncreasePrice: (state, payload) =>{
        state.products.forEach(product =>{
          product.price += payload;
        })
      }
    },
    actions:{
      // action: context(as a parameter, used as a store)
      reducePrice: context =>{
        // async code
        setTimeout(function(){
          // context.commit('mutation')
          // commit a mutation that will be dispatched in the component
          context.commit('reducePrice');
        }, 2000)
      },
      // payload refers to the amount data in the comp
      actIncreasePrice: (context, payload) =>{
        setTimeout(function(){
          context.commit('mutIncreasePrice', payload);
        }, 1000)
      }
    }
})