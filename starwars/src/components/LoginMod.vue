<template>
<div class="back-log">
  <div class="loginBox">
    <div class="loginContainer">
      <div class="closeButtonWrapper">
        <button type="button" class="close btnClose" aria-label="Close" @click="$emit('onClose')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <h1>SIGN IN</h1>
      <form>
        <input type="text" v-model="username" placeholder="Username" id="username">
        <input type="password" v-model="password" placeholder="Password" id="password">
        <button class="signBtn" @click="signIn">Enter</button>
      </form>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:"LoginMod",
  data(){
    return{
      username:"",
      password:"",
    }
  },
  methods:{
    signIn(){

      const key= this.username
      const userJSON= (window.localStorage.getItem(key)) 
      const userObject = JSON.parse(userJSON)

      if(userJSON !== null && this.password == userObject.password){
        alert("Loggeado correctamente!")
      }else{
        alert("User o password incorrecto")
      }
    },

  }
}
</script>
<style scoped>

.back-log{
  position:absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  top:0;
  width:100%;
  height:100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.loginBox{
  z-index: 1
}
.loginContainer{
  background-color: #363333;
  display:flex;
  flex-direction: column;
  justify-content: center;
  width:450px;
  padding:25px;
}

form{
  display:flex;
  flex-direction: column;
}

input{
  padding:10px;
  margin-top:10px;
  border-style: none;
  border-radius: 5px;;
}
h1{
  color:rgb(233, 235, 150);
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1.6rem;
}

.signBtn{
  background-color:whitesmoke;
  color:black;
  padding:10px;
  cursor: pointer;
  border-style: none;
  border-radius: 5px;
  margin: 10px auto 0 auto;
}

.signBtn:hover{
  background-color: gray;
  color: white;
}

.btnClose {
  color: #dadada;
}

.btnClose:hover {
  color: #ebf194;
}

</style>