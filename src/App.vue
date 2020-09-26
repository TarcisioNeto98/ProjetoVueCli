<template>
  <div id="app">
    <Users/>
    <Todos/>
    <Photos/>
    <Comments/>
    <Posts/>
  </div>
</template>

<script>
import Users from './components/Users.vue'
import Todos from './components/Todos.vue'
import Photos from './components/Photos.vue'
import Posts from './components/Posts.vue'
import Comments from './components/Comments.vue'

export default {
  name: 'App',
  components: {
    Users,
    Todos,
    Photos,
    Posts,
    Comments
  } 
}
</script>

<style>
</style>
