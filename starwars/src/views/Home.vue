<template>
<div class="container">
  <Starships></Starships>
</div>
</template>

<script>

// @ is an alias to /src

import Starships from '../components/Starships.vue'

export default {

  name: 'Home',
  components: {
    Starships
  }
}
</script>
