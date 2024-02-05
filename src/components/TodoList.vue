<script>

let id = 0

export default{
    data(){
        return{
            newTodo: "",
            newPet: "",
            newLastDate: "",
            todos: [
                {id: id++, text:'give shower', pet:'Nabi', lastDate: '2024-02-10' },
                {id: id++, text:'cut nails', pet:'Nico', lastDate: '2024-02-10' },
                {id: id++, text:'take to the vet for shots', pet:'Poppe', lastDate: '2024-02-10'},
            ]
        }
    },

    methods: {

    addTodo() {
        this.todos.push({ id: id++, text: this.newTodo, pet: this.newPet, lastDate: this.newLastDate })
        this.newTodo = ''
        this.newPet = ''
        this.newLastDate = ''
        },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
}

</script>

<template>
  <form class="my-10" @submit.prevent="addTodo">
    <input class="input input-bordered input-accent w-full max-w-xs mx-10" v-model="newTodo" placeholder="Task Description">
    <input class="input input-bordered input-accent w-full max-w-xs mx-10" v-model="newPet" placeholder="Pet Name">
    <label for="date">Date last given:</label>
    <input class="input input-bordered input-accent w-full max-w-xs mx-10" type="date" id="date" name="date" v-model="newLastDate"> <!-- Bind input value to newLastDate -->
    <button class="btn btn-primary">Add Todo</button>    
  </form>
  
  <!-- 
    Original todos as a list
    
    <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>    -->

  <div class="overflow-x-auto">

    <table class="table">
    <thead>
        <tr>
            <th className="">Pet Name</th>
            <th>Task</th>
            <th>Last Given</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="todo in todos" :key="todo.id">
            <td>{{todo.pet}}</td>
            <td>{{todo.text}}</td>
            <td>{{todo.lastDate}}</td>
            <td><button class="btn btn-outline btn-error" @click="removeTodo(todo)">Delete</button></td>
        </tr>
    </tbody>
  </table>

  </div>

</template>

<style>

.table {
    border-collapse: collapse; /* Collapse borders to ensure proper rendering */
    width: 100%;
  }

  .table th,
  .table td {
    border: 1px solid black; /* Add border to table cells */
    padding: 8px; /* Add padding for better spacing */
  }

</style>

