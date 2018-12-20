<template>
  <div class="login">
    <h1>Register</h1>

    <label for="username">username</label>
    <input v-model="username" placeholder="username">

    <label for="password">password</label>
    <input v-model="password" placeholder="password">

    <button v-on:click="register()">Register</button>

  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
  },
  methods: {    
    async register () {
      var result = await PostsService.addUser({
        username: this.username,
        password: this.password
      })

      console.log(result)
    }
  }
}
</script>
