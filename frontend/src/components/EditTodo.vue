<template>
  <div class="todos">
    <h1>Edit Todo</h1>
    <div class="form">
      <div>
        <input type="text" name="Name" placeholder="Name" v-model="Name" />
      </div>
      <div>
        <textarea
          rows="15"
          cols="15"
          placeholder="Description"
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
        <button class="app_post_btn" @click="updateTodo">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodosService from "@/services/todos";
export default {
  name: "editTodo",
  data() {
    return {
      Name: "",
      Description: "",
      Status: "NA",
    };
  },
  mounted() {
    this.getTodo();
  },
  methods: {
    async getTodo() {
      const response = await TodosService.getTodo({
        id: this.$route.params.id,
      });
      this.Name = response.data.Name;
      this.Description = response.data.Description;
      this.Status = response.data.Status;
    },
    async updateTodo() {
      await TodosService.updateTodo({
        id: this.$route.params.id,
        Name: this.Name,
        Description: this.Description,
        Status: this.Status,
      });
      this.$router.push({ name: "Todos"});
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
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
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
