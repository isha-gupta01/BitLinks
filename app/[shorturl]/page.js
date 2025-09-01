import { useRouter } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({params}){
    const router = useRouter();
    const shorturl = (await params).shorturl
    const client = await clientPromise;
    const db = client.db("BitLinks") 
    const collection = db.collection("url")
    const doc = await collection.findOne({shorturl:shorturl})
    if(doc){
        router.push(doc.url)
    }
    else{
        router.push(`${process.env.NEXT_PUBLIC_HOST}`)
    }
    return <div>My Webpage: {shorturl}</div>

}