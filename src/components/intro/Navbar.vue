<template>

<nav>
  <ul class="container">
    <li id = "Login" v-on:click="changeView($event)">Login</li>
    <li id = "Register" v-on:click="changeView($event)">Register</li>
  </ul>
</nav>

</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
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

