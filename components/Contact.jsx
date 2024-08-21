import {FaGithub} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import { MdOutlineMail } from "react-icons/md";

import Link from 'next/link'

export default function Contact() {
    return (
        <main className="flex w-full h-[calc(100vh-12rem)] flex-col rounded-md items-center justify-center px-10">
            {/* <h3 className="font-semibold text-gray-600 text-xl py-2">GET IN TOUCH</h3> */}
            <h2 className="font-semibold text-gray-600 text-3xl pt-8 pb-4">Get in touch</h2>
            {/* <div className="flex flex-row justify-between w-full max-w-3xl">
                <div className="flex flex-col w-64 justify-center items-center">
                    <div className="w-16 h-16 bg-gray-700"></div>
                    <div className="text-xl py-4 font-semibold">GitHub</div>
                    <div className="text-center text-md text-gray-600">github.com/yourusername</div>
                </div>
                <div className="flex flex-col w-64 justify-center items-center">
                    <div className="w-16 h-16 bg-gray-700"></div>
                    <div className="text-xl py-4 font-semibold">Discord</div>
                    <div className="text-center text-md text-gray-600">discord.gg/yourinvite</div>
                </div>
            </div> */}
             <div className="flex flex-row w-full h-full gap-x-4 justify-center">
                <div className="flex w-auto h-fit px-4 py-2 shadow-md border-2 border-borderColorDarker rounded-md flex-row gap-x-2 items-center">
                    <FaGithub /> <Link href="https://github.com/ola191">GitHub ola191</Link>
                </div>
                <div className="flex w-auto h-fit px-4 py-2 shadow-md border-2 border-borderColorDarker rounded-md flex-row gap-x-2 items-center">
                    <FaDiscord  /> <Link href="https://discord.gg/bx7YrSA2UF">Discord ProjectServer</Link>
                </div>
                <div className="flex w-auto h-fit px-4 py-2 shadow-md border-2 border-borderColorDarker rounded-md flex-row gap-x-2 items-center">
                    <MdOutlineMail /> <Link href="mailto:ola.krassowska@hotmail.com">ola.krassowska@nomartnotes.xyz</Link>
                </div>
             </div>
             <div className='flex flex-col w-full h-full justify-center items-center bg-red-500'>

             </div>
        </main>
    );
}
