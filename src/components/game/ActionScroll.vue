<template>
  <div class="login">
    <h1>Action Page</h1>
    <button v-on:click="test()">test</button>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'action',
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
