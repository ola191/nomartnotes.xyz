import {useState, useEffect} from "react"
import Image from "next/image";
import Link from "next/link";

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);
  let changed = false;
  const toggleMenu = () => {
    changed = true;
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (changed == false) {
        setIsOpen(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="flex w-full h-20 border-[#E6E6E6] border-b-4 rounded-md flex-row items-center justify-between z-10 px-10">
      <Link href="/">
        <div className="flex aspect-square relative h-32 select-none">
          <Image className="select-none" src="/logo.png" alt="Logo" layout="fill" />
        </div>
      </Link>
      <ul className="flex w-full justify-end">
        <li className={`px-4 text-lg -z-20 transition-all duration-[600ms] ease-in-out ${isOpen ? 'translate-x-0 z-20' : 'translate-x-96'}`}><span className={`opacity-0 transition-all ease-in-out ${isOpen ? 'opacity-100 delay-[50ms] duration-[150ms]' : 'text-red-[#EEEAE4] duration-[600ms]'}`}>About</span></li>
        <li className={`px-4 text-lg -z-20 transition-all duration-[600ms] ease-in-out ${isOpen ? 'translate-x-0 z-20' : 'translate-x-96'}`}><span className={`opacity-0 transition-all ease-in-out ${isOpen ? 'opacity-100 delay-[125ms] duration-[300ms]' : 'text-red-[#EEEAE4] duration-[450ms]'}`}>Projects</span></li>
        <li className={`px-4 text-lg -z-20 transition-all duration-[600ms] ease-in-out ${isOpen ? 'translate-x-0 z-20' : 'translate-x-96'}`}><span className={`opacity-0 transition-all ease-in-out ${isOpen ? 'opacity-100 delay-[200ms] duration-[450ms]' : 'text-red-[#EEEAE4] duration-[300ms]'}`}>Contact</span></li>
        <li className={`px-4 text-lg -z-20 transition-all duration-[600ms] ease-in-out ${isOpen ? 'translate-x-0 z-20' : 'translate-x-96'}`}><span className={`opacity-0 transition-all ease-in-out ${isOpen ? 'opacity-100 delay-[275ms] duration-[600ms]' : 'text-red-[#EEEAE4] duration-[150ms]'}`}>Search</span></li>
      </ul>
      <div className="flex flex-col justify-around w-10 h-8 ml-10 z-40 relative" onClick={toggleMenu}>
        <div className={`flex w-full h-[3px] rounded-sm bg-black transition-all duration-[600ms] ease-in-out ${isOpen ? '-translate-y-1 bg-[#E6E6E6]' : ''}`}></div>
        <div className={`flex w-full h-[3px] rounded-sm bg-black transition-all duration-[600ms] ease-in-out ${isOpen ? 'translate-x-5 bg-[#E6E6E6] opacity-0' : ''}`}></div>
        <div className={`flex w-full h-[3px] rounded-sm bg-black transition-all duration-[600ms] ease-in-out ${isOpen ? 'translate-y-1 bg-[#E6E6E6]' : ''}`}></div>
      </div>
    </nav>
  );
}