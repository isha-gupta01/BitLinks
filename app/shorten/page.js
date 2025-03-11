"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
    variable: "--font-playfair_display",
    subsets: ["latin"],
});

const shortener = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "url": url,
          "shorturl": shorturl
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("/api/generate", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
              setUrl("")
              setshorturl("")
              console.log(result)
            alert(result.message)
          })
          .catch((error) => console.error(error));
    }
    return (
        <div className='mx-auto max-w-lg  text-center my-10 bg-yellow-100 px-9 py-10'>
            <h1 className={`text-2xl ${playfair.className}`}>Generate your short URLs</h1>
            <div className='flex flex-col gap-3 my-6'>
                <input type='text'
                    value={url}
                    className='p-2 border border-yellow-400 rounded-lg'
                    placeholder='Enter your URLs'
                    onChange={(e) => setUrl(e.target.value)} />
                <input type='text'
                    value={shorturl}
                    className='p-2 border border-yellow-400 rounded-lg'
                    onChange={(e) => setshorturl(e.target.value)}
                    placeholder='Enter preferred short URL' />
                <button className={`bg-yellow-500 shadow-lg p-3 py-1 font-bold rounded-lg text-white ${playfair.className}`} onClick={generate}>Generate</button>
            </div>
            {generated && <code>
                <Link href={generated}>{generated}</Link>
                </code>}
        </div>
    )
}

export default shortener
