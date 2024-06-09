<template>
    <div>
        <b-list-group>
            <b-list-group-item variant="success" class="d-flex justify-content-start py-3 mb-3" v-for="(nau, index) in $store.state.naus" :key="index">
                <router-link class="text-decoration-none text-dark" :to="{path:'StarshipItem', query: {index}}">
                    <div>
                        <div class="h4 text-left">
                            Name: {{ nau.name }}
                        </div>
                        <div class="h6 text-left">
                            Model: {{nau.model}} 
                        </div>
                    </div>
                </router-link>
            </b-list-group-item>
        </b-list-group>
        <b-button class="mb-2" @click="$store.dispatch('obtenirNaus')">Ver más</b-button>
    </div>
</template>



<script>

import { mapActions } from 'vuex'   

    export default {
        name: 'Starships',
        mounted(){
            this.$store.commit('resetStarshipList')
            this.$store.dispatch('obtenirNaus')
        },
        methods: {
            ...mapActions(['obtenirNaus'])
        }
    }
</script>

<style scoped>

</style>