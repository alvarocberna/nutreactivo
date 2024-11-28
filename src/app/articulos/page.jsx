import React from 'react'
import Link from 'next/link'

export default function page() {
    return (
        <div className='w-100 d-flex'>
            <div className='m-auto col-6 d-flex flex-column justify-content-center'>
                <Link href='/articulos/articulo-1-suplementos-deportivos' className='border px-5 py-3 mb-3 w-100'>
                    articulo 1 - suplementos deportivos
                </Link>
                <Link href='/articulos/articulo-2-sustancias-prohibidas-deportes' className='border px-5 py-3 mb-3 w-100'>
                    articulo 2 - sustancias prohibidas deportes
                </Link>
                <Link href='/articulos/articulo-3-alimentos-deportivos' className='border px-5 py-3 mb-3 w-100'>
                    articulo 3 - alimentos deportivos
                </Link>
                <Link href='/articulos/articulo-4-perdida-grasa-corporal' className='border px-5 py-3 mb-3 w-100'>
                    articulo 4 - perdida grasa corporal
                </Link>
                <Link href='/articulos/articulo-5-suplementos-deporte' className='border px-5 py-3 mb-3 w-100'>
                    articulo 5 - suplementos indicados para cada deporte
                </Link>
                <Link href='/articulos/articulo-6-estrategia-nutricional-deportiva' className='border px-5 py-3 mb-3 w-100'>
                    articulo 6 - timing como estrategia nutricional deportiva
                </Link>
            </div>
        </div>
    )
}
