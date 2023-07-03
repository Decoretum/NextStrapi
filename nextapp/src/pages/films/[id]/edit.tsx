"use client"
import {QueryClientProvider, QueryClient, useQuery, useMutation} from '@tanstack/react-query'
import axios, * as others from 'axios'
import react, {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function Edit(){
    axios.defaults.baseURL = 'http://localhost:1337'
    const router = useRouter()
    const {push} = useRouter()
    const {register, handleSubmit, reset} = useForm()
    const [movie, setMovie] = useState({})

    const mutation = useMutation({
        mutationFn: async (data) => {
            console.log(data)
            return axios.put(`/api/films/${router.query.id}`, {
                data: {
                    title: data.title,
                    director: data.director,
                    plot: data.plot
                }
            }).then(()=>{
                push('/films')
            }
            )
        }
    })

    const movieQuery = useQuery({
        queryKey: ['movie'],
        queryFn: async () => {
            return axios.get(`/api/films/${router.query.id}`)
            .then(res => {
                let movie = res.data.data
                setMovie(movie)
                let defaulting = {}
                defaulting.title = movie.title
                defaulting.plot = movie.plot
                defaulting.director = movie.director 
                reset({...defaulting})
                return res
            })
        }
    })

    if (movieQuery.isLoading){
        return <h1> Loading movie data </h1>
    }

    function submit(e){
        mutation.mutate(e)
    }
    return(
        <>
            <h1> Edit Movie {router.query.id} </h1>
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor='title'> Title </label> <br/>
                <input {...register('title')} name='title' defaultValue={movie.attributes.title} /> <br/><br/>

                <label htmlFor='director'> Director </label> <br/>
                <input {...register('director')} name='director' defaultValue={movie.attributes.director} /> <br/><br/>

                <label htmlFor='title'> Plot </label> <br/>
                <textarea {...register('plot')} name='plot' defaultValue={movie.attributes.plot} /> <br/><br/>

                <button type='submit'> Edit Film </button>
            </form>

            <Link href={`/films/${router.query.id}`}> Back </Link>
        </>
    )
}