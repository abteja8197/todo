<template>
  <div>
    <div v-if="todos.length">
      <h2 class="todos">Todo list</h2>
      <div>
        <router-link v-bind:to="{ name: 'newTodo' }">Add Todo</router-link>
      </div>
      <table>
        <tr>
          <td>Name</td>
          <td width="450">Description</td>
          <td width="100">Status</td>
          <td width="100" align="center">Modify</td>
        </tr>
        <tr v-for="todo in todos" :key="todo">
          <td>{{ todo.Name }}</td>
          <td>{{ todo.Description }}</td>
          <td>{{ todo.Status }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'editTodo', params: { id: todo._id } }">Edit</router-link>|
            <a href="#" @click="deleteTodo(todo._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      <p>
        There are no Todos currently, click
        <router-link v-bind:to="{ name: 'newTodo' }">here</router-link>
        to create one
      </p>
    </div>
  </div>
</template>

<script>
import TodosService from "@/services/todos";
export default {
  name: "todos",
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    this.fetchTodoList();
  },
  methods: {
    async fetchTodoList() {
      const response = await TodosService.fetchTodoList();
      console.log(response.data);
      this.todos = response.data;
    },
    async deleteTodo(id) {
      await TodosService.deleteTodo(id);
      this.$router.go('/todos');
    },
  },
};
</script>
<style scoped>
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table {
  margin: 0 auto;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #ccc;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: rgb(240, 248, 255);
}
table tr:nth-child(1) {
  background: #378eef;
  color: #fff;
}
a {
  color: #378eef;
  text-decoration: none;
}
a.add_post_link {
  background: #378eef;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
