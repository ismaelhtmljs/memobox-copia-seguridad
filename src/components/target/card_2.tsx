"use client"
import "@/components/css/card2.css";

export default function Card2() {
  const openTodolist = () => {
    window.location.href = "/todolist"
  }

  return (
    <div className="card-bg p-[30px] rounded-[10px]">
      <div className="flex flex-col items-center gap-[10px]">
        <div className="text-center">
          <p>
            En MemoBox podrás crear, editar y guardar tus notas de manera
            sencilla. Está diseñada para ayudarte a organizar tu día a día sin
            complicaciones. Ideal para estudiantes, programadores, creativos o
            cualquier persona que necesite recordar cosas importantes.
          </p>
          <p>
            Desde tareas pendientes hasta ideas espontáneas, todo queda guardado
            en tu caja digital.
          </p>
        </div>
        <div>
          <button
            type="button"
            onClick={openTodolist}
            className="bton-bg-moded p-md cursor-pointer text-[#1e293b] font-bold rounded-[8px] text-[13px]"
          >
            Usar MemoBox
          </button>
        </div>
      </div>
    </div>
  );
}
