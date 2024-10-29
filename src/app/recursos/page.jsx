import React from 'react'
import './style.css'
import Link from 'next/link'

export default function Recursos() {
    return (
        <>
            <div className='w-100 d-flex flex-column'>
                <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9'>

                    <h2 className='h1 mb-5'>Recursos</h2>

                    <Link href='/recursos/porciones-de-alimentos' className='w-100 mb-3 px-3 py-3 h5 boxRec'>
                        Porciones de Intercambio de Alimentos
                    </Link>

                    <Link href='/recursos/perdida-de-grasa' className='w-100 mb-3 px-3 py-3 h5 boxRec'>
                        Recomendaciones clave para la pérdida de grasa corporal
                    </Link>

                    <Link href='/recursos/deportes-corta-duracion' className='w-100 mb-3 px-3 py-3 h5 boxRec'>
                        Recomendaciones para deportes de corta duración y alta intensidad
                    </Link>

                    <Link href='/recursos/deportes-media-duracion' className='w-100 mb-3 px-3 py-3 h5 boxRec'>
                        Recomendaciones para deportes de mediana resisrencia (+1 min)
                    </Link>

                </div>
            </div>
        </>
    )
}
