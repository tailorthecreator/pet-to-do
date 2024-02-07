 <script>
import HelloWorld from "./components/HelloWorld.vue"
import TodoList from "./components/TodoList.vue";
import TestData from "./components/TestData.vue";

export default {
  components: {
    HelloWorld, // Use correct casing,
    TodoList,
    TestData
  }
}
</script>

<template>
  <div>
    <hello-world></hello-world> 
    <test-data></test-data>
    <todo-list></todo-list>

  </div>
</template>

<style scoped>
  *body{
    background-color: white;
  }
</style>


 