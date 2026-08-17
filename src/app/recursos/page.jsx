'use client'
import React from 'react'
import '../globals.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { RecursosAyuda } from './datos'

export default function Recursos() {
    return (
        <div className='w-100 d-flex flex-column py-5'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-10'>

                <h2 className='h1 mb-2 text-tertiary fw-bold'>Recursos</h2>
                <p className='text-muted mb-5'>
                    Herramientas y guías para acompañar tu proceso nutricional
                </p>

                <div className='row g-4 justify-content-center'>
                    {RecursosAyuda.map((rec) => (
                        <div key={rec.link} className='col-12 col-sm-6 col-lg-4 col-xl-3'>
                            <Link href={rec.link} className='objCardSty h-100'>
                                <div className='objCardAccent' />
                                <div className='p-4 d-flex flex-column h-100' style={{ gap: '16px' }}>
                                    <div className='objIconWrap'>
                                        <FontAwesomeIcon icon={rec.icon} />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h3 className='h6 fw-bold mb-2' style={{ color: '#1a1a2e', lineHeight: 1.3 }}>
                                            {rec.title}
                                        </h3>
                                        <p className='text-muted small mb-0' style={{ lineHeight: 1.6 }}>
                                            {rec.desc}
                                        </p>
                                    </div>
                                    <span className='objArrowSty mt-auto'>
                                        Explorar
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
