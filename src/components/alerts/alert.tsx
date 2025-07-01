"use client";
import { useState } from "react";
import "@/components/alerts/alert.css";

export default function AlertPoP() {
  const [isVisible, SetVisbile] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      <div className="alert-bgmoded p-2.5">
        <div className="text-center flex justify-around items-center">
          <p className="alertPop-p-size-res">
            <strong>📢 ¡Atención! : </strong> En unos días llega una nueva
            actualización de MemoBox. Mejoras en diseño, nuevas funciones y más
            personalización. ¡No te la pierdas! 😉
          </p>
          <button
            type="button"
            onClick={() => SetVisbile(false)}
            className="p-1.5 bg-red-500 rounded hover:cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
}
