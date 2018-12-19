<template>
  <div>
    <h2>Nav Bar</h2>
  <button id = "Login" v-on:click="changeView($event)">Login</button>
  <button id = "Register" v-on:click="changeView($event)">Register</button>
  </div>
  </template>
<script>

export default {
  name: 'Navbar',
  data () {
    return {
      toobars: {Login: '/', Register: '/register'}
    }
  },
  methods: {
    changeView (event) {
      var targetId = event.currentTarget.id

      console.log(targetId)
      this.$parent.changeView(targetId)
    }
  }
}
</script>
