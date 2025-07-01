import '@/components/css/card1.css'

export default function Card1() {
  return (
    <div className='card-bg p-[30px] rounded-[10px]'>
      <div className="flex flex-col gap-[20px]">
        <div className="text-center">
          <h2 className="text-[1.5em] text-color-mod">
            <strong>¿Por qué usar MemoBox?</strong>
          </h2>
        </div>
        <div className="text-center">
          <ul className="flex flex-col items-center gap-[10px]">
            <li>📌 Guarda tareas rápidamente</li>
            <li>🧠 Organiza tus ideas en cualquier momento</li>
            <li>🔒 Almacenamiento local: tus datos son tuyos</li>
            <li>💡 Interfaz clara, sin distracciones</li>
            <li>🚀 Ideal para móviles y escritorio</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
