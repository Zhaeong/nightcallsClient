<template>
  <div class="login">
    <h1>Login</h1>

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
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data
      console.log(JSON.stringify(response.data))
    },
    async register () {
      await PostsService.addUser({
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
