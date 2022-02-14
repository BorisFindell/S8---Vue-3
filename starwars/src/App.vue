<template>
  <div id="app">
    <div id="nav">

<div class="header-wrapper">
      <div class="loggedIn" v-if="$store.state.userObject">
        <h4>Logged as: {{$store.state.userObject.username}}</h4>
      </div>
      <div class="nav-login" v-else>
         
      <div class="d-flex justify-content-end">
        <div class="regCont">
        <button class="btn btn-light font-weight-bold mx-2" @click="$store.commit('openModal', 'showLogin')" >LOGIN</button>
        <router-link class="btn btn-light font-weight-bold mx-2" tag="button" to="/Formulari">REGISTER</router-link>
        </div>
      </div>
      
      
      </div>
    </div>

        <LoginMod
        v-if="$store.state.modal==='showLogin'"
        @onClose="$store.commit('closeModal')"
        />
        
      
      <div>
        <img class="logo" src="./assets/star-wars-logo.png" alt="SWlogo">
      </div>
      <router-link class="navText text-decoration-none" to="/">Home</router-link> |
      <router-link class="navText text-decoration-none" to="/StarshipsV" >Starships</router-link>
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
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
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

/* API, qué debería ser 
POST Y GET (ES NECESARIO PUT?
PROTEGER LAS RUTAS?*/


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

#nav a {
  font-weight: bold;
  color: #dbdd52;
}

.navText {
  font-size: 1.5rem;
  padding: 10px;
}
.navText:hover {
  background-color: rgb(156, 156, 156, .2);
  border-radius: 5px;
}

.navForm {
  text-align: end;
  text-decoration: none;
}

.regCont {
  width: 20%;
}


#nav a.router-link-exact-active {
  color: #e2e7c3;
}
</style>
