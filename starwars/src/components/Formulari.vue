<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Enter name"
          required
          class="w-50 m-auto py-4"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Last name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.cog"
          placeholder="Enter last name"
          required
          class="w-50 m-auto py-4"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
        id="input-group-3"
        label="Email:"
        label-for="input-3"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
          class="w-50 m-auto py-4"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-4" label="Password:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
          class="w-50 m-auto py-4"
        ></b-form-input>
      </b-form-group>
      

      <b-form-group id="input-group-5" label="Display name:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.displayName"
          placeholder="Enter display name"
          required
          class="w-50 m-auto py-4"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-6"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox class="text-color-white" value="acept">Accept terms and conditions</b-form-checkbox>
          <b-form-checkbox value="sub">Subscribe me 🚀!</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button class="mx-2" type="submit" variant="primary">Submit</b-button>
      <b-button class="mx-2" type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name:'',
          cog: '',
          email: '',
          password: '',
          displayName: '',
          checked: []

        },
        show: true
      }
    },
    methods: {
      onSubmit() {
        const key = this.form.displayName
        const userExists = (window.localStorage.getItem(key) !==null)
        if(userExists){
          alert("user already exists")
        }else{
          const newUser ={
            name:this.form.name,
            cog:this.form.cog,
            email:this.form.email,
            displayName:this.form.displayName,
            password: this.form.password
          }
          window.localStorage.setItem(key, JSON.stringify(newUser))
          alert('Nuevo usuario reg')
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

<style scoped>



</style>