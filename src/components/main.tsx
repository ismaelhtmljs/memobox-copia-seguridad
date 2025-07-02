import Card1 from "./target/card_1";
import Card2 from "./target/card_2";
import "@/components/css/main.css";

export default function Main() {
  return (
    <main className="flex justify-center items-center">
      <div className="block flex-[1] max-w-[900px] p-m-moded p-m-moded-res-1">
        {/* Titulo */}
        <div className="flex flex-col justify-center items-center text-center gap-[10px] p-[10px] mb-[50px]">
          <h1 className="text-[2.5rem] text-color-h txt-t-res">
            <strong>Bienvenido a MemoBox</strong>
          </h1>
          <div>
            <p className="text-[1.2rem] opacity-[0.9] txt-t-res-des-1">
              Tu espacio personal para guardar ideas, tareas y pensamientos
              importantes.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-[30px] p-m-moded-res-2">
          <Card1/>
          <Card2/>
        </div>
      </div>
    </main>
  );
}
