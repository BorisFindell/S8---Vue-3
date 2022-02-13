<template>
    <div>
        <div>
            <label for="Nom"></label>
            <input type="text" v-model="nom" required>
        </div>
        <div>
            <label for="Cognom"></label>
            <input type="text" v-model="cog" required>
        </div>
        <div>
            <label for="Nom"></label>
            <input type="email" v-model="email" required>
        </div>
        <div>
            <label for="Nom"></label>
            <input type="password" v-model="pass" required>
        </div>
        <div>
            <label for="Nom"></label>
            <input type="text" v-model="display" required>
        </div>
    <div>{{nom}}</div>

    </div>
</template>

<script>
    export default {
        name: 'Formulari',
        data(){
            return {
                nom:'',
                cog:'',
                email:'',
                pass:'',
                display:''
            }
        }
    }
</script>