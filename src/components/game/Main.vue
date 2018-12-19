<template>
  <div class="main">
    <h1>Main</h1>
    Hello {{userName}}
    <button v-on:click="test()">test</button>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data () {
    return {
      userName: 'default'
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    getUser () {
      if (localStorage.userName) {
        this.userName = localStorage.userName
      }
    },
    checkUser () {

    }
  }
}
</script>
