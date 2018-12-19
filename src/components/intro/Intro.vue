<template>
  <div class="login">
    <h1>IntroPage</h1>
    <Navbar ref="navBar"></Navbar>
    <component :is="currentView"></component>
  </div>
</template>

<script>

import NavBar from '@/components/intro/Navbar'
import Login from '@/components/intro/Login'
import Register from '@/components/intro/Register'

export default {
  name: 'action',
  components: {
    'Navbar': NavBar,
    'Login': Login,
    'Register': Register
  },
  data () {
    return {
      currentView: 'Login'
    }
  },
  mounted () {
  },
  methods: {
    changeView (viewName) {
      this.currentView = viewName
    }
  }
}
</script>
