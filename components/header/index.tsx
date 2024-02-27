"use client"


import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const links = [
    {href: '/', label: 'Home'},
    {href: '/produtos', label: 'Produtos'},
    {href: '/contatos', label: 'Contatos'},
    {href: '/membros', label: 'Membros'},
    {href: '/admin', label: 'Gerenciamento'},
]

const link_login = [
    {href: '/login', label: 'Login'}
]

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const toggleNav = () => setIsNavOpen(!isNavOpen)

    return(
        <header className="bg-red-950 sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-0">
            <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
                <Link href='/' className="flex gap-4 items-center">
                    <Image
                    src={'/Home/logos/logo.png'}
                    alt="Logo do site"
                    width={904}
                    height={904}
                    className="h-20 w-20 rounded-xl"
                    />
                    <span className="text-white text-3xl font-semibold">IRONPULSE</span>
                </Link>
                <nav className="flex justify-end">
                    <div className="hidden w-full md:flex justify-end items-center gap-4">
                        {links.map((link, index) => 
                            <Link href={link.href} key={index}>
                                <span className="text-xl text-white hover:underline underline-offset-2 transition-transform duration-1000 p-2 rounded-xl">{link.label}</span>
                            </Link>
                        )}
                        {link_login.map((link, index) => 
                            <Link href={link.href} key={index}>
                                <button className="text-xl text-white border-2 border-white py-2 px-4 bg-transparent rounded-full hover:bg-white hover:text-black hover:border-transparent transition duration-300 ease-in-out">{link.label}</button>
                            </Link>
                        )}
                    </div>
                    <div className="md:hidden">
                        {isNavOpen ?
                            <X onClick={toggleNav} className="w-10 h-10 text-white corsor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"/>
                            :
                            <Menu onClick={toggleNav} className="w-12 h-12 text-white cursor-pointer"/>
                        }
                    </div>
                </nav>
                {isNavOpen && (
                    <div className="md:hidden flex basis-full flex-col items-center gap-6 mt-10">
                        {links.map((link, index) => 
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-white hover:underline transition-transform duration-1000 p-2 rounded-xl">{link.label}</span>
                            </Link>
                        )}
                        {link_login.map((link, index) => 
                            <Link href={link.href} key={index}>
                                <button className="text-2xl text-white border-2 border-white py-2 px-4 bg-transparent rounded-full hover:bg-white hover:text-black hover:border-transparent transition duration-300 ease-in-out">{link.label}</button>
                            </Link>
                        )}
                        </div>
                )}

            </div>

        </header>
    )
}