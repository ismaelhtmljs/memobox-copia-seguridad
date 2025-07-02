"use client";
import { useEffect, useState } from "react";
export default function MiniTodoList({storageKey} : {storageKey : string}) {
  // OPALJNX => la entrada del nombre de la lista

  const [input, Setinput] = useState("");
  const [list, SetList] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const guardado = localStorage.getItem(storageKey)
      return guardado ? JSON.parse(guardado) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(list))
  }, [list, storageKey])

  const CreateList = () => {
    if (input.trim()) {
      SetList([...list, input]);
      Setinput("");
    }
  };

  const DeleteList = (index: number) => {
    const element = list.filter((_, i) => i !== index);
    SetList(element);
  };

  return (
    <>
      <div>
        <div className="flex items-center gap-2.5 minitodolist-conteiner-titulo-res justify-between">
          <div>
            <input
              type="text"
              name="OPALJNX"
              value={input}
              onChange={(e) => Setinput(e.target.value)}
              className="border rounded p-2 mt-2 mb-2 minitodolist-input-w"
            />
          </div>
          <button
            type="button"
            onClick={CreateList}
            className="bg-green-400 p-2 rounded cursor-pointer hover:bg-green-800 text-white minitodolist-input-w-res"
          >
            Añadir
          </button>
        </div>
        {/* donde se va a añadir la lista */}
        <div className="p-1.5 overflow-auto bg-[#bee1ff] shadow rounded minitodolist-dark">
          <div className="overflow-y-auto h-[146px] p-2.5 w-auto minitodolist-res-w">
            {list.map((lista, i) => (
              <ul key={i}>
                <li>
                  <p className="flex items-center justify-between">
                    {lista}
                    <span
                      className="bg-red-500 p-1.5 rounded cursor-pointer hover:bg-red-800"
                      onClick={() => DeleteList(i)}
                    >
                      🗑️
                    </span>
                  </p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
