import Vue from 'vue'
import App from './App.vue';

/* using data sore */
import {store} from "./store/store";

new Vue({

  // using the central store
  store: store,
  el: '#app',
  render: h => h(App)
})
