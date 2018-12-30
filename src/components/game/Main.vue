<template>
  <div class="main">
    <h1>Main</h1>
    Hello {{userName}}
    <Navbar ref="navBar"></Navbar>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import NavBar from '@/components/game/Navbar'
import Occupants from '@/components/game/Occupants'

export default {
  name: 'Main',
  components: {
    'Navbar': NavBar,
    'Occupants': Occupants
  },
  data () {
    return {
      userName: 'default',
      currentView: 'Occupants'
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

    },
    changeView (viewName) {
      this.currentView = viewName
    }
  }
}
</script>
