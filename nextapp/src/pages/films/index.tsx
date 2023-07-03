"use client"
import {QueryClientProvider, QueryClient, useQuery} from '@tanstack/react-query'
import axios, * as others from 'axios'
import react, {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

// type Film = {
//     title: string
// }

type el = {
    id: number
    attributes : {
        title: string
    }
}

export default function Films(){
    const router = useRouter()
    const [films, setFilms] = useState([])
    axios.defaults.baseURL = 'http://localhost:1337'
    const filmQuery  = useQuery({
        queryKey: ['films'],
        queryFn: async () => {
            return axios.get(`/api/films`)
            .then(res => {
                console.log(res)
                setFilms(res.data.data)
                return res
            })
        }
    }) 

    return (
    <>
        <h1> Films Page! </h1>
        <p> Create new Film: <Link href='/films/create'> Create New </Link> </p>
        <p> Back to Home: <Link href='/'> Home </Link> </p>
        {
            films.map((film:el) => {
                return (
                    <>
                    <h1 style={{fontSize: '15px'}}> {film.attributes.title} </h1>
                    <Link href={`/films/${film.id}`}> Details </Link>
                    </>
                )
            })
        }
    </>
    )
}