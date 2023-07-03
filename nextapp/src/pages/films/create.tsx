"use client"
import {QueryClientProvider, QueryClient, useQuery, useMutation} from '@tanstack/react-query'
import axios, * as others from 'axios'
import react, {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function Create(){
    axios.defaults.baseURL = 'http://localhost:1337'
    const router = useRouter()
    const {push} = useRouter()
    const {register, handleSubmit} = useForm()

    const mutation = useMutation({
        mutationFn: async (data) => {
            console.log(data)
            return axios.post(`/api/films`, {
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

    function submit(e){
        if (e.title === ''){
            push('/films')
        }
        mutation.mutate(e)
    }
    return(
        <>
            <h1> Create Movie  </h1>
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor='title'> Title </label> <br/>
                <input {...register('title')} name='title' /> <br/><br/>

                <label htmlFor='director'> Director </label> <br/>
                <input {...register('director')} name='director' /> <br/><br/>

                <label htmlFor='title'> Plot </label> <br/>
                <textarea {...register('plot')} name='plot' /> <br/><br/>

                <button type='submit'> Create Film </button>
            </form>

            <Link href={`/films`}> Back </Link>
        </>
    )

}