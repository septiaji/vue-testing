<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">OpelKingkong</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/search" class="nav-link">Search</router-link>
          </li>
            <li class="nav-item">
            <router-link to="/category" class="nav-link">Category</router-link>
          </li>
          </li>
            <li class="nav-item">
            <router-link to="/ingredients" class="nav-link">Ingredients</router-link>
          </li>
          </li>
            <li class="nav-item">
            <router-link to="/area" class="nav-link">Area</router-link>
          </li>
          </li>
            <li class="nav-item">
            <router-link to="/favorite" class="nav-link">Favorite</router-link>
          </li>
        </ul>
      </div>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
            <b-link class="nav-link" @click.prevent="signOut" v-if="user.loggedIn == true">Log out</b-link>
            <router-link to="/login" class="nav-link" v-else>Login</router-link>
          </li>
        </ul>
     </div>
     <router-link to="/detail/:mId"></router-link>
    </nav>
    <router-view />
    <Footer />
</div>
</template>

<script>
import Footer from './components/Footer.vue'
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'Home',
  components: {
    Footer
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: 'user'
    })
  },
  methods: {
    signOut () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: 'Login'
          })
        })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
