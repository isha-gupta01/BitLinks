import Image from "next/image";
import { PlayfairDisplay } from "./layout";
import { PlayfairDisplayItallic } from "./layout";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-yellow-50 ">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 justify-center items-center text-center">
          <p className={`text-4xl font-bold ${PlayfairDisplay.className}`}>This is best shortener</p>
          <p className={`text-xl px-20  ${PlayfairDisplayItallic.className}`}>This is straightforward shortener.Most of the url shortener will track you and ask you for your needs.But we don't demand such request from you.</p>
          <div className={`flex gap-3 text-white justify-start font-bold text-md ${PlayfairDisplayItallic.className}`}>
            <Link href="/shorten"><button className="bg-yellow-500 shadow-lg p-3 py-1 font-bold rounded-lg">Try Now</button></Link>
            <Link href="/github"><button className="bg-yellow-500 shadow-lg p-3 py-1 font-bold rounded-lg">Github</button></Link>
          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" src={"/work.JPG"} alt="vector" fill={true}></Image>
        </div>
      </section>
    </main>
  );
}
