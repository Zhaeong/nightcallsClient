<template>
  <div class="login">
    <h1>Login</h1>

    <label for="username">username</label>
    <input v-model="username" placeholder="username">

    <label for="password">password</label>
    <input v-model="password" placeholder="password">

    <button v-on:click="login()">Login</button>

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
  },
  methods: {
    async login () {
      // check if username+password fields filled in
      if (this.password === '') {
        alert('Please enter your password')
      } else if (this.username === '') {
        alert('Please enter your username')
      } else {
        var resu = await PostsService.loginUser({
          username: this.username,
          password: this.password
        })
        if (resu.data !== 'UNKNOWN') {
          console.log(resu.data.username)
          var userName = resu.data.username
          var userId = resu.data.userid
          localStorage.userId = userId
          localStorage.userName = userName
          this.$router.push({ name: 'Main', params: { userId: userId } })
        } else {
          alert('Unknown User')
        }
      }
    }
  }
}
</script>
