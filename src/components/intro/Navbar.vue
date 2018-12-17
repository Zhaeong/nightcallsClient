<template>
  <div> 
    <h2>Nav Bar</h2> 
<!--
    <nav> 
        <div v-for="(value, key) in toobars">
          <router-link :to="value">{{key}}</router-link>
        </div>
    </nav> 
-->

  <button id = "Login" v-on:click="changeView($event)">Login</button>
  <button id = "Register" v-on:click="changeView($event)">Register</button>

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
    },
    changeView (event) {
        var targetId = event.currentTarget.id;

        console.log(targetId)
        this.$parent.changeView(targetId);
    }
  }
}
</script>
