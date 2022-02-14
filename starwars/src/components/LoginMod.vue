<template>
<div class="login-background">
  <div class="loginWrapper">
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
        alert("you signed in")
      }else{
        alert("User, password (or both) are incorrect")
      }
    },

  }
}
</script>
<style scoped>

.login-background{
  position:absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  top:0;
  width:100%;
  height:100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.loginWrapper{
  display: flex;
  justify-content: center;
}
.loginContainer{
  display:flex;
  flex-direction: column;
  justify-content: center;
  background-color: #363333;
  width:400px;
  padding:20px;
  border-style: none;
  border-radius: 5px;;
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

.closeButtonWrapper{
  display: flex;
  justify-content: flex-end;
}

.btnClose {
  color: #dadada;
}

.btnClose:hover {
  color: #ebf194;
}

</style>