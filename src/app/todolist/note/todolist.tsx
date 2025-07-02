"use client";
import { useEffect, useState } from "react";
import ModalTodolist from "../components/modal";
import MiniTodoList from "../components/minitodolist";

export default function TodolistContent() {
  const [isModalOpen, SetisModalOpen] = useState(false);

  // 
  const [Note_pad, SetNotePad] = useState<
    { titulo: string; contenido: string }[]
  >(() => {
    if (typeof window !== "undefined") {
      const guardado = localStorage.getItem("memoboxNotePads");
      return guardado ? JSON.parse(guardado) : [];
    }
    return [];
  });

  const [To_do_list, SetTo_do_list] = useState<{ titulo_list: string }[]>(
    () => {
      if (typeof window !== "undefined") {
        const guardado = localStorage.getItem("memoboxTodoList");
        return guardado ? JSON.parse(guardado) : [];
      }
      return [];
    }
  );

  useEffect(() => {
    localStorage.setItem("memoboxNotePads", JSON.stringify(Note_pad));
  }, [Note_pad]);

  useEffect(() => {
    localStorage.setItem("memoboxTodoList", JSON.stringify(To_do_list));
  }, [To_do_list]);

  // ✅ Pedir permiso y registrar SW al cargar
  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      if (Notification.permission === "default") {
        Notification.requestPermission().then((permiso) => {
          if (permiso !== "granted") {
            alert("🔔 Por favor habilita las notificaciones en tu navegador");
          }
        });
      } else if (Notification.permission === "denied") {
        alert(
          "🔒 No se puede enviar notificaciones. Actívalas en configuración del navegador."
        );
      }

      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").catch(console.error);
      }
    }
  }, []);

  const CreateBlock = (titulo: string) => {
    SetNotePad([...Note_pad, { titulo, contenido: "" }]);
  };

  const UpdateNotePadContent = (index: number, contenido: string) => {
    const Actualizar = [...Note_pad];
    Actualizar[index].contenido = contenido;
    SetNotePad(Actualizar);
  };

  const DeleteNotePad = (index: number) => {
    const eliminar = Note_pad.filter((_, i) => i !== index);
    SetNotePad(eliminar);
  };

  const CreateList = (titulo_list: string) => {
    SetTo_do_list([...To_do_list, { titulo_list }]);
  };

  const DeleteTodoList = (index: number) => {
    const eliminar = To_do_list.filter((_, i) => i !== index);
    SetTo_do_list(eliminar);
    localStorage.removeItem(`MemoboxTodoList_${index}`);
  };

  async function programarNotiAutomatica(fechaInput: string) {
    if (!fechaInput) return;

    const tiempoRestante = new Date(fechaInput).getTime() - Date.now();
    if (tiempoRestante <= 0) {
      alert("⏰ La fecha debe ser futura");
      return;
    }

    if (Notification.permission !== "granted") {
      alert("❌ No tienes permiso para recibir notificaciones");
      return;
    }

    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      ),
    });

    setTimeout(() => {
      fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(sub),
      });
    }, tiempoRestante);

    alert("✅ Notificación programada para " + new Date(fechaInput).toLocaleString());
  }

  return (
    <div className="p-2.5 w-full mt-5 todolist-conteiner-res">
      <div className="flex justify-between items-center todolist-titulo-memobox">
        <div>
          <h2 className="text-3xl font-bold">📝 Mis Listas</h2>
        </div>
        <div>
          <button
            type="button"
            onClick={() => SetisModalOpen(true)}
            className="bg-[#4f46e5] text-white px-4 py-2 rounded cursor-pointer hover:bg-indigo-800"
          >
            Agregar lista
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ModalTodolist
          onClose={() => SetisModalOpen(false)}
          onCreate={CreateBlock}
          onCreateLista={CreateList}
        />
      )}

      <div className="grid p-2.5 gap-[25px] p-res-conteiner-lista grid-res">
        {Note_pad.map((lista, i) => (
          <div
            key={i}
            className="p-4 bg-white shadow h-fit w-res-block note-bg-dark"
            id="note-pad"
          >
            <div
              className={`p-2.5 flex gap-2.5 block-titulo-res ${
                lista.titulo.length > 15
                  ? "items-start"
                  : "justify-between items-center"
              }`}
            >
              <h3
                className={`text-2xl ${
                  lista.titulo.length > 17 ? "break-all text-xl" : ""
                }`}
              >
                <strong>{lista.titulo}</strong>
              </h3>
              <div>
                <button
                  type="button"
                  className="p-[5px] bg-red-500 rounded text-white cursor-pointer hover:bg-red-800"
                  onClick={() => DeleteNotePad(i)}
                >
                  eliminar
                </button>
              </div>
            </div>

            <div className="p-2.5">
              <textarea
                name="UIWODS"
                value={lista.contenido}
                onChange={(e) => UpdateNotePadContent(i, e.target.value)}
                className="border p-2 rounded mt-2 w-full resize-none h-[233px]"
              ></textarea>

              <h2 className="mt-2 mb-1 font-semibold">🔔 Notificarme</h2>
              <input
                type="datetime-local"
                className="border px-2 py-1 rounded mb-2 block"
                onChange={(e) => programarNotiAutomatica(e.target.value)}
              />
            </div>
          </div>
        ))}

        {To_do_list.map((todolist, n) => (
          <div
            key={n}
            className="p-4 bg-white shadow h-fit todolist-conteiner-total-w todolist-bg-dark"
            id="todolist"
          >
            <div className="p-2.5 flex flex-col">
              <div className="flex items-center gap-2.5 justify-between minitodolist-res-titulo">
                <h3
                  className={`text-2xl ${
                    todolist.titulo_list.length > 14 ? "break-all text-xl" : ""
                  }`}
                >
                  <strong>{todolist.titulo_list}</strong>
                </h3>
                <button
                  type="button"
                  className="p-[5px] bg-red-500 rounded text-white cursor-pointer hover:bg-red-800 bton-delete-todolist-res"
                  onClick={() => DeleteTodoList(n)}
                >
                  eliminar
                </button>
              </div>
              <p className="text-xs">tipo de lista : Desordenada</p>
            </div>
            <MiniTodoList storageKey={`MemoboxTodoList_${n}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}
