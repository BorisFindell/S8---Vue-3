<template>
        <div>
        <img :src="`https://starwars-visualguide.com/assets/img/starships/${$store.state.naus[$route.query.index].id}.jpg`" alt="">
        <h2>Starship Name: {{$store.state.naus[$route.query.index].name}}</h2>
        <br>
        <b-list-group>
            <b-list-group-item>Model:{{$store.state.naus[$route.query.index].model}}</b-list-group-item>
            <b-list-group-item>Cost in Credits:{{$store.state.naus[$route.query.index].cost_in_credits}}</b-list-group-item>
            <b-list-group-item>Length:{{$store.state.naus[$route.query.index].length}}</b-list-group-item>
            <b-list-group-item>Manufacturer:{{$store.state.naus[$route.query.index].manufacturer}}</b-list-group-item>
            <b-list-group-item>Max Atmosphering Speed:{{$store.state.naus[$route.query.index].max_atmosphering_speed}}</b-list-group-item>
            <b-list-group-item>Crew:{{$store.state.naus[$route.query.index].crew}}</b-list-group-item>
            <b-list-group-item>Passengers:{{$store.state.naus[$route.query.index].passengers}}</b-list-group-item>
            <b-list-group-item>Cargo Capacity:{{$store.state.naus[$route.query.index].cargo_capacity}}</b-list-group-item>
            <b-list-group-item>Consumables:{{$store.state.naus[$route.query.index].consumables}}</b-list-group-item>
            <b-list-group-item>Hyperrive_rating{{$store.state.naus[$route.query.index].hyperdrive_rating}}</b-list-group-item>
            <b-list-group-item>MGLT: {{$store.state.naus[$route.query.index].MGLT}}</b-list-group-item>
            <b-list-group-item>Starship class:{{$store.state.naus[$route.query.index].starship_class}}</b-list-group-item>
        </b-list-group>
        
    </div>
</template>



<script>
    export default {
        name: 'StarshipItem',
    }
</script>

<style scoped>

</style>