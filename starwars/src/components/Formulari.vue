<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      
      <b-form-group class="h5 font-weight-bold mb-4 text-light" id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="$v.form.name.$model"
          :state="validateState('name')"
          placeholder="Enter name"
          class="w-50 m-auto py-4"
        ></b-form-input>
         <b-form-invalid-feedback class="text-warning font-weight-bold h5" id="input-1-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group class="h5 font-weight-bold mb-4 text-light" id="input-group-2" label="Last name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="$v.form.cog.$model"
          :state="validateState('cog')"
          placeholder="Enter last name"
          class="w-50 m-auto py-4"
        ></b-form-input>
         <b-form-invalid-feedback class="text-warning font-weight-bold h5" id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      
      <b-form-group class="h5 font-weight-bold h5 font-weight-bold mb-4 text-light"
        id="input-group-3"
        label="Email:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="$v.form.email.$model"
          :state="validateState('email')"
          type="email"
          placeholder="Enter email"
          class="w-50 m-auto py-4"
        ></b-form-input>
         <b-form-invalid-feedback class="text-warning font-weight-bold h5" id="input-3-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group class="h5 font-weight-bold mb-4 text-light" id="input-group-5" label="Display name:" label-for="input-5" >
        <b-form-input
          id="input-5"
          v-model="$v.form.displayName.$model"
          :state="validateState('displayName')"
          placeholder="Enter display name"
          class="w-50 m-auto py-4"
        ></b-form-input>
         <b-form-invalid-feedback class="text-warning font-weight-bold h5" id="input-5-live-feedback"
         >This is a required field and must be at least 8 characters.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group class="text-light font-weight-bold h5" id="input-group-4" label="Password:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
          type="password"
          placeholder="Enter password"
          class="w-50 m-auto py-4"
          
        ></b-form-input>
        <b-form-invalid-feedback class="text-warning font-weight-bold h5" id="input-4-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      
        
      <b-form-checkbox 
        v-model="$v.form.checked.$model"
        :state="validateState('checked')"
        class="text-light font-weight-bold h5 mr-3" value="acept">Accept terms and conditions 📝</b-form-checkbox>
      <b-form-checkbox class="text-light font-weight-bold h5 ml-3" value="sub">Subscribe me 🚀!</b-form-checkbox>


      <b-button class="mx-2 my-4" type="submit" variant="primary">Submit</b-button>
      <b-button class="mx-2 my-4" type="reset" variant="danger">Reset</b-button>

    </b-form>
    
  </div>
</template>

<script>

import { validationMixin } from "vuelidate";
import { required, minLength, } from "vuelidate/lib/validators";
  
  export default {
    mixins: [validationMixin],
    data() {
      return {
        form: {
          name:'',
          cog: '',
          email: '',
          password: '',
          displayName: '',
          checked: [],
        },
        show: true
      }
    },
    validations: {
    form: {
      name: {
        required
      },
      cog: {
        required
      },
      email: {
        required,
      },
      password: {
        required
      },
      displayName: {
        required,
        minLength: minLength(8)
      },
      checked: {
        required
      }
    }
  },
    methods: {
      
      validateState(name) {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
      },
      
      onSubmit() {
        const key = this.form.displayName
        const userEx = (window.localStorage.getItem(key) !==null)
        if(userEx){
          alert("¡El usuario ya existe!")
        }

        
        this.$v.form.$touch();
          if (this.$v.form.$anyError) {
          return;
        }
        
        else{
        const newUser ={
          name:this.form.name,
          cog:this.form.cog,
          email:this.form.email,
          displayName:this.form.displayName,
          password: this.form.password
        
        }
          
        window.localStorage.setItem(key, JSON.stringify(newUser))
        alert('¡Nuevo usuario registrado!')
        this.$router.push('/')
        }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.checked = []
        this.form.cog = ''
        this.form.displayName = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>