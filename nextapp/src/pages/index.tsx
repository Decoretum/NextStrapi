"use client"
import Link from 'next/link'

export default function Home(){
    return(
        <>
            <h1> Home! This is the "index" or root page of the application located in the pages directory! </h1>
            <h2> You can view the succeeding paths here: </h2>
            <p> Films: <Link href='/films'> Films </Link> </p> 
        
        </>
    )
}