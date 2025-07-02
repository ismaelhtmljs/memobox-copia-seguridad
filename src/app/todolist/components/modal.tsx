"use client";
import "@/app/todolist/css/modal.css";
import { useState } from "react";

export default function ModalTodolist({
  onClose,
  onCreate,
  onCreateLista,
}: {
  onClose: () => void;
  onCreate: (titulo: string) => void;
  onCreateLista: (titulo: string) => void;
}) {
  const [input, Setinput] = useState("");
  const CreateBlock = () => {
    if (!input.trim()) return;
    Setinput("");
    onCreate(input);
    onClose();
  };

  const CreateLista = () => {
    if (!input.trim()) return;
    Setinput("");
    onCreateLista(input);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#000000bf] bg-opacity-50 z-50"
      id="modal"
    >
      {/* modal */}
      <div className="bg-white p-6 rounded shadow w-[24rem] modal-dark">
        <div className="p-2.5 flex flex-col gap-[10px]">
          {/*  */}
          <div className="p-2.5">
            <h2 className="text-[25px] font-system font-bold">
              💻 <strong>Agregar Lista</strong>
            </h2>
          </div>
          {/*  */}
          <div>
            <input
              type="text"
              name=""
              onChange={(e) => Setinput(e.target.value)}
              placeholder="Título de la lista"
              className="w-full border p-2 rounded-[5px] mb-2.5 mt-2.5"
            />
          </div>
          {/*  */}
          <div>
            <button
              type="button"
              onClick={CreateLista}
              className="bg-indigo-500 text-white p-2.5 rounded w-full mb-2 cursor-pointer hover:bg-indigo-800"
            >
              <span className="text-[18px]">🗒️ Lista Normal</span>
            </button>
          </div>
          {/*  */}
          <div>
            <button
              type="button"
              onClick={CreateBlock}
              className="bg-purple-500 text-white p-2.5 rounded w-full mb-2 cursor-pointer hover:bg-purple-900"
            >
              <span className="text-[18px]">📕 Block de notas</span>
            </button>
          </div>
          {/*  */}
          <div className="text-center rounded-[5px] bg-red-500 text-white hover:bg-red-900">
            <button
              type="button"
              onClick={onClose}
              className="w-full cursor-pointer p-2.5 rounded"
            >
              <span className="text-[18px]">Cerrar</span>
            </button>
          </div>
          {/*  */}
        </div>
      </div>
      {/* modal */}
    </div>
  );
}
