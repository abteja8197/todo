import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Todos from "@/components/Todos";
import NewTodo from "@/components/NewTodo";
import EditTodo from "@/components/EditTodo";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/todos",
      name: "Todos",
      component: Todos,
    },
    {
      path: "/todos/new",
      name: "newTodo",
      component: NewTodo,
    },
    {
      path: "/todo/:id",
      name: "editTodo",
      component: EditTodo,
    },
  ],
});
