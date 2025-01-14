'use client'
import React from 'react'
import './style.css'
import Link from 'next/link'
import Image from 'next/image'

import { RecursosAyuda } from './datos'

export default function Recursos() {

    let todosLosRecursos = RecursosAyuda.map((rec, index) => {
        return (
            <Link key={index} href={rec.link} className='col-12 col-md-5 col-lg-3 me-1 mb-5 d-flex align-items-center boxRec'>
                <h3 className='h5 text-center w-100'>
                    {rec.title}
                </h3>
            </Link>
        )
    })
    return (
        <div className='w-100 d-flex flex-column'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9'>

                <h2 className='h1 mb-5'>Recursos</h2>

                <div className='d-flex row d-flex justify-content-around'>
                    {todosLosRecursos}
                </div>

            </div>
        </div>
    )
}
