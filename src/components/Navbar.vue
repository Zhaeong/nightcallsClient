<template>
  <div> 
    <h2>Nav Bar</h2> 

    <nav> 
        <div v-for="(value, key) in toobars">
          <router-link :to="value">{{key}}</router-link>
        </div>
    </nav> 

  </div>
  </template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      toobars: {Login:'/', Register:'/register'}
    }
  },
  methods: {
    changeNav () {
      this.toobars = {aaaa:'bbbb', dffdf:'fdfd'}
    }
  }
}
</script>
