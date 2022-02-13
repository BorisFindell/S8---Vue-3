<template>
  <div id="app">
    <div id="nav">
      <div class="d-flex justify-content-end">
        <div class="border border-danger rounded-top regCont mb-2 p-3">
          <router-link class="" to="/LogIn">LogIn</router-link>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <div class="border border-danger rounded-bottom regCont mb-3 p-3">
          <router-link class="" to="/Formulari">Registro</router-link>
        </div>
      </div>
      <div>
        <img class="logo" src="./assets/star-wars-logo.png" alt="SWlogo">
      </div>
      <router-link class="navText" to="/">Home</router-link> |
      <router-link class="navText" to="/StarshipsV" >Starships</router-link>
    </div>
    <router-view/>
  </div>
</template>

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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.navText {
  font-size: 1.5rem;
  text-decoration: none;
}

.navForm {
  text-align: end;
  text-decoration: none;
}

.regCont {
  width: 20%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
