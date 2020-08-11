import Api from "@/services/Api";

export default {
  async fetchTodoList() {
    return Api().get("todos");
  },
  async addTodo(params) {
    return Api().post("todos", params);
  },
  async updateTodo(params) {
    return Api().put("todos/" + params.id, params);
  },
  async getTodo(params) {
    return Api().get("todo/" + params.id);
  },
  async deleteTodo(id) {
    return Api().delete("todos/" + id);
  },
};
