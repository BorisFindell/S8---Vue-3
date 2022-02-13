<template>
  <div>
    <b-form @submit.prevent @reset="onReset" v-if="show">
      
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Enter name"
          required
          class="w-50 m-auto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Last name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.cog"
          placeholder="Enter last name"
          required
          class="w-50 m-auto"
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
          class="w-50 m-auto"
        ></b-form-input>
      </b-form-group>
      

      <b-form-group id="input-group-4" label="Display name:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.name"
          placeholder="Enter display name"
          required
          class="w-50 m-auto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-5"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="acept">Accept terms and conditions</b-form-checkbox>
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
          food: null,
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.checked = []
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