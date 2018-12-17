<template>
  <div class="login">
    <h1>IntroPage</h1>

    <Navbar ref="navBar"></Navbar>

    <component :is="currentView"></component>
    
    <button v-on:click="test()">test</button>


  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

import NavBar from '@/components/intro/Navbar'
import Login from '@/components/intro/Login'
import Register from '@/components/intro/Register'

export default {
  name: 'action',
  components: {
    'Navbar': NavBar,
    'Login' : Login,
    'Register' : Register
  },
  data () {
    return {
      currentView: "Login"
    }
  },
  mounted () {
    //this.getPosts()
  },
  methods: {
    test() {
      //this.$parent.changeNav();
      //console.log(this.currentView)
      this.currentView = "Register"
    },
    changeView(viewName) {
      this.currentView = viewName
    }
  }
}
</script>
