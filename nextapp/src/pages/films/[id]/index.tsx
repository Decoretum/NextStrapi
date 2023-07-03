"use client"
import {useMutation, useQuery} from '@tanstack/react-query'
import axios, * as others from 'axios'
import react, {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { useForm } from 'react-hook-form'


axios.defaults.baseURL= 'http://localhost:1337'
export default function Info(){
    const [movie, setMovie] = useState({})
    const {register, handleSubmit} = useForm()
    const router = useRouter()
    const {push} = useRouter()

    const deleteMutation = useMutation({
        mutationFn: async (data) => {
            return axios.delete(`/api/films/${router.query.id}`, {
                data : {
                    title: data.title,
                    director: data.director,
                    plot: data.plot
                }
            })
            .then(()=>{
                push('/films')
            })
        } 
    })
    
    const movieQuery = useQuery({
        queryKey: ['movie'],
        queryFn: async () => {
            return axios.get(`/api/films/${router.query.id}`)
            .then(res => {
                setMovie(res.data.data)
                return res.data.data
            })
        }
    })

    if (movieQuery.isLoading){
        return <h1> Movie Loading </h1>
    }


    function del(e){
        deleteMutation.mutate(e)
    }

    return (
        <>  
            <h1> This is for Film number {router.query.id} </h1>
            <h2> Movie: {movie.attributes.title} </h2>
            <h2> Director: {movie.attributes.director} </h2>
            <h2> Plot: </h2>
            <p> {movie.attributes.plot} </p>
            <h2 style={{marginTop: '5vh'}}> Date Released: {movie.attributes.released} </h2> 

            <Link href={`/films/${router.query.id}/edit`}> Edit Film </Link> <br/><br/>
            <Link href={'/films'}> Back to Films Pages </Link>

            <form onSubmit={handleSubmit(del)}>
                <input type='hidden' {...register('title')} value={movie.attributes.title} />
                <input type='hidden' {...register('plot')} value={movie.attributes.plot} />
                <input type='hidden' {...register('director')} value={movie.attributes.director} />
                <button type='submit'> Delete Film </button>
            </form>
        </>
    )
}