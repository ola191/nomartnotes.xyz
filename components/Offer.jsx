import { svgIcon } from "../public/icons/discord.svg"
import Image from "next/image";

export default function Offer() {
  return (
    <main className="flex w-full h-[60vh] flex-col rounded-md items-center justify-center z-10 px-10">
      <h3 className="font-semibold text-gray-600 text-xl py-2">PROVIDING SERVICE</h3>
      <h2 className="font-bold text-gray-800 text-3xl pt-4 pb-4">What Can I Do for You</h2>
      <div className="flex flex-row justify-between w-full flex-wrap h-full">
        <div className="flex w-1/3 justify-center">
          <div className="flex flex-col w-64 justify-center items-center">
            <div className="w-16 h-16 flex relative">
              <Image 
                src="icons/website.svg"
                layout="fill"
              />
            </div>
            <div className="text-xl py-4 font-semibold">Web Development</div>
            <div className="text-center text-md">Websites and web apps using Next.js, Django, Flask.</div>
          </div>
        </div>
        <div className="flex w-1/3 justify-center">
          <div className="flex flex-col w-64 justify-center items-center">
            <div className="w-16 h-16 flex relative">
              <Image 
                src="icons/discord.svg"
                layout="fill"
              />
            </div>
            <div className="text-xl py-4 font-semibold">Discord Bots</div>
            <div className="text-center text-md">Discord bots for automation, integration and fun.</div>
          </div>
        </div>
        <div className="flex w-1/3 justify-center">
          <div className="flex flex-col w-64 justify-center items-center">
            <div className="w-16 h-16 flex relative">
              <Image 
                src="icons/android.svg"
                layout="fill"
              />
            </div>
            <div className="text-xl py-4 font-semibold">Android Apps</div>
            <div className="text-center text-md">Mobile apps for Android in Flutter / Dart.</div>
          </div>
        </div>
        <div className="flex w-1/3 justify-center">
          <div className="flex flex-col w-64 justify-center items-center">
            <div className="w-16 h-16 flex relative">
              <Image 
                src="icons/windows.svg"
                layout="fill"
              />
            </div>
            <div className="text-xl py-4 font-semibold">Windows Apps</div>
            <div className="text-center text-md">Simple desktop apps for Windows using PyQt.</div>
          </div>
        </div>
        <div className="flex w-1/3 justify-center">
          <div className="flex flex-col w-64 justify-center items-center">
            <div className="w-16 h-16 flex relative">
              <Image 
                src="icons/script.svg"
                layout="fill"
              />
            </div>
            <div className="text-xl py-4 font-semibold">Custom Scripts</div>
            <div className="text-center text-md">Scripts in Python and JavaScript for various automation and tasks.</div>
          </div>
        </div>
        <div className="flex w-1/3 justify-center">
          <div className="flex flex-col w-64 justify-center items-center">
            <div className="w-16 h-16 flex relative">
              <Image 
                src="icons/extension-black.svg"
                layout="fill"
              />
            </div>
            <div className="text-xl py-4 font-semibold">Browser Extensions</div>
            <div className="text-center text-md">Handy and simply extensions to enhance your browsing experience.</div>
          </div>
        </div>
      </div>
    </main>
  );
}