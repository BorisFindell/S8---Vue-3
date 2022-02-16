<template>
  <div id="app">
    <div id="nav">

      <div class="d-flex justify-content-end">
        <div class="text-light" v-if="$store.state.displayNameObj">
          <h4>Logged in as: {{$store.state.displayNameObj.displayName}}</h4>
          <b-button type="button" class="btn btn-danger" size="m" @click="logOut">Log out</b-button>
        </div>
        <div class="regCont" v-else>
          <button class="btn btn-light font-weight-bold mx-2" @click="$store.commit('openModal', 'showLogin')" >LOGIN</button>
          <router-link class="btn btn-light font-weight-bold mx-2" tag="button" to="/Formulari">REGISTER</router-link>
        </div>
      </div>

        <LoginMod
        v-if="$store.state.modal==='showLogin'"
        @onClose="$store.commit('closeModal')"
        />
        
      
      <div>
        <img class="logo" src="./assets/star-wars-logo.png" alt="SWlogo">
      </div>
      <div class="container border border-warning justify-content-center w-25">
        <router-link class="navText text-decoration-none" to="/">Home</router-link>
        <span class="text-light font-weight-bold h2">-</span>
        <router-link class="navText text-decoration-none" to="/StarshipsV" >Starships</router-link>
      </div>
      <hr class="divider">
    </div>
    <router-view/>
  </div>
</template>


<script>

import LoginMod from "./components/LoginMod.vue"

  export default {
    name: 'App',
    components: {
      LoginMod
    },
    data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      logOut() {
        this.$store.commit('logOut')
      }
    }
  };
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

.logo {
  width: 350px;
  margin-bottom: 20px;
}

body {
  background-image: url("./assets/pexels-philippe-donn-1169754.jpeg");
  background-repeat:repeat-y;
  background-size: 100%
}

hr {
  height: 10px;
  background-color: whitesmoke;
}

.navForm {
  text-align: end;
  text-decoration: none;
}

.regCont {
  width: 20%;
}

#nav a {
  font-weight: bold;
  color: #e2e7c3;
  font-size: 1.5rem;
  padding: 5px;
}

#nav a.router-link-exact-active {
  color: #dbdd52;
}

#nav a:hover {
  background-color: rgb(156, 156, 156, .2);
  border-radius: 5px;
}

</style>
