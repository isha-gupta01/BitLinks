import React from 'react'
import Link from 'next/link'
import { PlayfairDisplay } from "@/app/layout";
import { PlayfairDisplayItallic } from '@/app/layout';

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center justify-between px-4 bg-yellow-700 h-16 text-white' >
        <div className={`font-bold text-2xl ${PlayfairDisplay.className}`}><Link href="/">BitLinks</Link></div>
        <div className={`font-bold text-md ${PlayfairDisplayItallic.className}`} >
            <ul className='flex items-center justify-center gap-6'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/shorten"><li>Shortner</li></Link>
                <li className='flex gap-3 text-white'>
                <Link href="/shorten"><button className="bg-yellow-500 shadow-lg p-3 py-1 font-bold rounded-lg">Try Now</button></Link>
                <Link href="/github"><button className="bg-yellow-500 shadow-lg p-3 py-1 font-bold rounded-lg">Github</button></Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
