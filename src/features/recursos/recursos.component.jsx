'use client'
import React from 'react'
import '../../app/globals.css'
import './style.css'

import { RecursosAyuda } from './recursos.data'
import { RecursoCard } from './components/recurso-card'

export function Recursos() {
    return (
        <div className='w-100 d-flex flex-column py-5'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-10'>

                <h2 className='h1 mb-2 text-tertiary fw-bold'>Recursos</h2>
                <p className='text-muted mb-5'>
                    Herramientas y guías para acompañar tu proceso nutricional
                </p>

                <div className='row g-4'>
                    {RecursosAyuda.map((rec) => (
                        <div key={rec.link} className='col-12 col-sm-6 col-lg-6'>
                            <RecursoCard
                                link={rec.link}
                                theme={rec.theme}
                                img={rec.img}
                                title={rec.title}
                                desc={rec.desc}
                                short={rec.short}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
