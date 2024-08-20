import Image from "next/image";
import Link from "next/link";

export default function FilterPanel() {

    return (
        <aside className="flex w-full h-16 border-borderColorDarker border-2 rounded-full flex-row items-center justify-between z-10 my-8">
            <div className="flex w-full h-full border-r-2 border-borderColorDarker items-center align-bottom">
                <div className="aspect-square h-full flex justify-center">
                    <span className="-scale-x-100 text-[48px] flex justify-center items-center text-borderColorDarker -translate-y-1">&#8981;</span>
                </div>
                <span className="text-3xl flex justify-center items-center text-borderColorDarker">Search projects</span>
                </div>
            <div className="flex w-auto px-8 gap-x-2">
                <button className="bg-borderColorDarker text-[#efefef] px-2 py-1 rounded-md text-md">Projects</button>
                <button className="border-borderColorDarker border-2 px-2 py-1 rounded-md text-md">Websites</button>
                <button className="border-borderColorDarker border-2 px-2 py-1 rounded-md text-md">Apps</button>
                <button className="border-borderColorDarker border-2 px-2 py-1 rounded-md text-md">Bots</button>
                <button className="border-borderColorDarker border-2 px-2 py-1 rounded-md text-md">Scripts</button>
                <button className="border-borderColorDarker border-2 px-2 py-1 rounded-md text-md">programms</button>
                <button className="border-borderColorDarker border-2 px-2 py-1 rounded-md text-md">Other</button>
            </div>
        </aside>
    );
}