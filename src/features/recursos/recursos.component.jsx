'use client'
import React from 'react'
import '../../app/globals.css'
import './style.css'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { RecursosAyuda } from './recursos.constants'

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
                            <Link href={rec.link} className={`objCardSty recursoCardSty recursoCardBg--${rec.theme} h-100`}>

                                <div className='recursoCardBg'>
                                    <span className='recursoBlob'/>
                                    <span className='recursoBlob'/>
                                </div>

                                <div className='recursoCardImgLayer'>
                                    <Image
                                        src={rec.img}
                                        alt={rec.title}
                                        fill
                                        sizes='40vw'
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>

                                <div className='recursoCardContent'>
                                    <h3 className='h6 fw-bold mb-2' style={{ color: '#1a1a2e', lineHeight: 1.3 }}>
                                        {rec.title}
                                    </h3>
                                    <p className='text-muted small mb-0' style={{ lineHeight: 1.6 }}>
                                        {rec.desc}
                                    </p>
                                    <span className='objArrowSty recursoCardBtn mt-auto'>
                                        Ver {rec.short}
                                        <span className='objArrowIconBoxSty'>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
