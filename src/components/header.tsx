"use client";
import '@/components/css/header.css'

export default function Header() {
  const openLink = (Url: string) => {
    window.open(Url, "_blank");
  };

  return (
    <header className="bg-moded p-moded text-mod sticky top-0 z-50">
      <div className="p-1.5 flex justify-around items-center h-res">
        <div className="flex gap-2.5 items-center">
          <h1 className="text-[20px]">
            <strong>MemoBox</strong>
          </h1>
        </div>
        <nav>
          <ul className="flex gap-5 items-center text-[15px]">
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
                onClick={() => openLink("https://github.com/ismaelhtmljs/memobox")}
                className="cursor-pointer hover-a-repo text-white"
              >
                Repositorio
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
