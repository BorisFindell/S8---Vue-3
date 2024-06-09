<template>

    <div class="container d-flex justify-content-center text-center">
        <div class="welcomeText">
            <h2 class="text-light font-weight-bold">¡Welcome to the Starwars ships page!</h2> 
            <h4 class="text-light font-weight-bold mb-5">¡Press the button to stats the trip!</h4>
            <button id="starships-btn" class="btn btn-primary" @click="redirectToSSH()">Starships</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        methods: {
            redirectToSSH() {
            this.$router.push({ path: '/StarshipsV' });
            }
        }
    }
</script>

<style scoped>

</style>