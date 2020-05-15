import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as firebase from "firebase";

Vue.config.productionTip = false

// Your web app's Firebase configuration
const configOptions = {
  apiKey: "AIzaSyCUbu9ZIGe5XO6TEwHrV0WzyWW5ZCODpYk",
  authDomain: "vue-firebase-auth-a57cc.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-a57cc.firebaseio.com",
  projectId: "vue-firebase-auth-a57cc",
  storageBucket: "vue-firebase-auth-a57cc.appspot.com",
  messagingSenderId: "1052189046505",
  appId: "1:1052189046505:web:5db6d52f966bedbc42a278"
};
// Initialize Firebase
firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')