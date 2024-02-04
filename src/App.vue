<script>
import HelloWorld from "./components/HelloWorld.vue"
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    HelloWorld, // Use correct casing,
    TodoList
  }
}
</script>

<template>
  <div>
    <hello-world></hello-world> 
    <todo-list></todo-list>
  </div>
</template>

<style scoped>
  *body{
    background-color: white;
  }
</style>

