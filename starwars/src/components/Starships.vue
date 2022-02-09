<template>
    <div>
        <button @click="obtenirNaus" >Obtener naves</button>
        <ul>
            <li v-for="(nau, index) in $store.state.naus.results" :key="index">
                Name: {{ nau.name }} <br>
                Model: {{nau.model}} 
            </li>
        </ul>
    </div>
</template>



<script>

import { mapActions } from 'vuex'   

    export default {
        name: 'Starships',
        methods: {
            ...mapActions(['obtenirNaus'])
        }
    }
</script>

<style lang="scss" scoped>

</style>