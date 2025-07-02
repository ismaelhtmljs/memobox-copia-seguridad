"use client";
import "@/app/todolist/css/header.css";
import { useState, useEffect } from "react";

export default function Headertodolist() {
  const [theme, setThemeColor] = useState<string>("");

  // montamos el localstorage y revisamos si hay un theme guardado
  useEffect(() => {
    const localtheme = localStorage.getItem("theme")
    if (localtheme) {
      setThemeColor(localtheme)
    }else{
      // Detecta el sistema si no hay nada guardado
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setThemeColor(prefersDark ? "dark" : "light")
    }
  },[]);

  useEffect(() => {
    if (theme) {
      const body = document.querySelector('body');
      body?.classList.toggle("dark", theme === "dark")
      localStorage.setItem("theme",theme)
    }
  },[theme])

  const DarkToggle = () => {
    setThemeColor(prev => (prev === "dark" ? "light" : "dark"));
  }

  const openLink = (Url: string) => {
    window.open(Url, "_blank");
  };

  return (
    <header className="bg-moded p-moded text-mod ">
      <div className="p-1.5 flex justify-around items-center h-res">
        <div className="flex gap-2.5 items-center">
          <h1 className="text-[20px] cursor-pointer">
            <strong>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/">MemoBox</a>
            </strong>
          </h1>
        </div>
        <nav>
          <ul className="flex gap-5 items-center text-[15px] w-max ul-res-header">
            <li>
              <a
                onClick={() => openLink("https://github.com/ismaelhtmljs")}
                className="cursor-pointer hover-a-git text-white"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  openLink("https://github.com/ismaelhtmljs/memobox")
                }
                className="cursor-pointer hover-a-repo text-white"
              >
                Repositorio
              </a>
            </li>
            <li>
              <button type="button" onClick={DarkToggle}>
                <span className="p-1 bg-white text-black rounded-[.25rem] cursor-pointer">
                  {theme === "light" ? '🌙 Oscuro' : '🌞 Claro'}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
