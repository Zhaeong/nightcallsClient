<template>
  <nav>
    <ul class="container">
      <li id = "Occupants" v-on:click="changeView($event)">Occupantss</li>
      <li id = "Income" v-on:click="changeView($event)">Income</li>
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

