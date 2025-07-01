"use client"
import TodolistAside from "./components/aside";
import TodolistContent from "./note/todolist";
import '@/app/todolist/css/responsive/responsive.css'

export default function TodolistHome() {
  return (
    <>
      <div className="_nextjs">
        <main>
          {/*  */}
          <div className="flex flex-row p-2.5 conteiner-principe-res">
            <TodolistAside />
            <TodolistContent />
          </div>
          {/*  */}
        </main>
      </div>
    </>
  );
}
