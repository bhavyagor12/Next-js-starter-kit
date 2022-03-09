import React from 'react'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BsNewspaper } from 'react-icons/bs'
import { VscFileSubmodule, VscSearch } from 'react-icons/vsc'
import { BsChatSquareDots } from 'react-icons/bs'
import { signout, useSession } from "next-auth/react";

export default function Sidebar() {

    const { data: session, status } = useSession();


    return (
        <div className="text-gray-500 p-5 text-sm border-r border-gray-900 h-screen">
            <div className="space-y-4">
                <button className="flex items-center space-x-2 hover:text-white" onClick={()=> signOut()}>
                    <p>Log out</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <CgProfile className="h-5 w-5" />
                    <p>Profile</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <AiOutlineHome className="h-5 w-5" />
                    <p>Home</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <VscFileSubmodule className="h-5 w-5" />
                    <p> Post a Projects</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <VscSearch className="h-5 w-5" />
                    <p>Find Projects</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <BsNewspaper className="h-5 w-5" />
                    <Link href='/newsPage'>
                        <p>News</p>
                    </Link>


                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <BsChatSquareDots className="h-5 w-5" />
                    <p>Chat</p>
                </button>

                <hr className="border-t-[0.1px] border-gray-900" />
            </div>
        </div>
    )
}
