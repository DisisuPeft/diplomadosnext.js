import Image from "next/image";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <main className="mt-[110px]">
        <Main />
        <div className="contenedorMain">
          <div className="w-full h-[400px]"></div>
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer> */}
    </div>
  );
}
