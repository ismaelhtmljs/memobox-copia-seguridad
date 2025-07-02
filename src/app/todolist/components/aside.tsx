"use client"
import { useEffect, useState } from "react";

export default function TodolistAside() {

  const [placeholder, Setplaceholder] = useState("");
  
  const ChangeResizePlaceholder = () => {
    const width = window.innerWidth;

    if (width < 538) {
      Setplaceholder("Buscar en google ...");
    } else if (width < 1011) {
      Setplaceholder("Buscar ...");
    } else {
      Setplaceholder("Buscar en Google .....");
    }
  };
  
  useEffect(() => {
    ChangeResizePlaceholder()
    window.addEventListener("resize", ChangeResizePlaceholder)

    return () => {
      window.removeEventListener("resize", ChangeResizePlaceholder)
    }
  }, [] )

  return (
    <div className="p-2.5">
      <aside className="shadow-md bg-white p-[15px] sticky top-3.5 aside-dark">
        <div className="p-[10px] flex flex-col gap-3.5">
          <div className="p-[5px]">
            <h2 className="text-xl text-aling-res">
              🔎 <strong>Buscador web</strong>
            </h2>
          </div>
          <div>
            <form
              action="https://www.google.com/search"
              method="get"
              target="_blank"
              className="flex flex-col mb-6 gap-[20px]"
            >
              <div>
                <input
                  type="text"
                  name="q"
                  className="border p-2 flex-1 rounded w-full asideInput-res"
                  placeholder={placeholder}
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Buscar"
                  className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-indigo-800 w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
}
