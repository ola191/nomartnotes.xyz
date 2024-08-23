import {useState, useEffect} from "react"
import Image from "next/image";
import Link from "next/link";

export default function Nav() {

  return (
  <main className="flex w-full h-[50vh] rounded-md flex-col items-center justify-center z-10 px-10">
    <div className="flex w-full flex-col">
        <h2 className="font-semibold text-xl py-2">Hi, I&apos;m Ola</h2>
        <h1 className="font-semibold text-4xl py-3"><mark>Software Developer,</mark></h1>
        <h3 className="font-semibold text-2xl py-1 text-gray-800">websites, <span className="opacity-[90%]">dsc bots,</span> <span className="opacity-[85%]">scripts,</span> <span className="opacity-[80%]">apps, </span> <span className="opacity-[75%]">programms </span><span className="opacity-60">and more</span></h3>  
    </div>
    <div className="flex w-full pt-8 gap-x-8">
        <Link href="contact"><button className="bg-gray-800 text-[#efefef] px-4 py-2 rounded-md text-lg">Contact Me</button></Link>
        <Link href="projects"><button className="border-gray-800 border-2 px-4 py-2 rounded-md text-lg">My Projects</button></Link>
    </div>
  </main>
  );
}