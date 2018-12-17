<template>
  <div class="login">
    <h1>Main</h1>


    <button v-on:click="test()">test</button>

    


  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'Main',
  data () {
    return {
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    test() {
      this.$parent.changeNav();
    }
  }
}
</script>
