<template>
  <div class="todos">
    <h1>Add Todo</h1>
    <div class="form container">
      <div>
        <input type="text" name="Name" placeholder="Name" v-model="Name" />
      </div>
      <div>
        <textarea
          rows="15"
          cols="15"
          placeholder="Decription"
          v-model="Description"
        ></textarea>
      </div>
      <div>
        <select name="Status" v-model="Status">
          <option value="NA">Status</option>
          <option value="Done">Done</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div>
        <button class="todo_btn" @click="addTodo">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodosService from "@/services/todos";

export default {
  name: "NewTodo",
  data() {
    return {
      Name: "",
      Description: "",
      Status: "NA",
    };
  },
  methods: {
    async addTodo() {
      await TodosService.addTodo({
        Name: this.Name,
        Description: this.Description,
        Status: this.Status,
      });
      this.$router.push({ name: "Todos" });
    },
  },
};
</script>
<style type="text/css">
.form input,
.form textarea,
.form select {
  width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.todo_btn {
  background: #378eef;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
