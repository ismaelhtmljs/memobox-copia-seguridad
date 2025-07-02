import Headertodolist from "./components/header";
import TodolistHome from "./main";
import AlertPoP from "@/components/alerts/alert";
import "@/app/todolist/css/global.css";
import "@/app/todolist/css/darkmode/dark.css";

export default function TodoListMain() {
  return (
    <>
      {/*  */}
      <AlertPoP />
      {/*  */}
      <Headertodolist />
      <TodolistHome />
      {/*  */}
    </>
  );
}
