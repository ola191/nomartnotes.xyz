import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-4/5 h-20 border-[#E6E6E6] border-b-4 rounded-md flex flex-row items-center justify-between fixed z-10 px-10">
      <Link href="/">
        <div className="flex aspect-square relative h-32">
          <Image src="/logo.png" alt="Logo" layout="fill" />
        </div>
      </Link>
      <ul className="flex w-full justify-end">
        <li className="px-4 text-lg">About</li>
        <li className="px-4 text-lg">Projects</li>
        <li className="px-4 text-lg">Contact</li>
        <li className="px-4 text-lg">Search</li>
      </ul>
      <div className="flex flex-col justify-around w-10 h-8 ml-10">
        <div className="flex w-full h-[3px] rounded-sm bg-black"></div>
        <div className="flex w-full h-[3px] rounded-sm bg-black"></div>
        <div className="flex w-full h-[3px] rounded-sm bg-black"></div>
      </div>
    </nav>
  );
}