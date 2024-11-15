import Image from "next/image";
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-[110px]">
        <div className="flex justify-center">Hola</div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer> */}
    </div>
  );
}
