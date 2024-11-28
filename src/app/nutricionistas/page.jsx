
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import ImgNutri from '../../media/img-alvaro-cañete-nutricionista.jpeg'

export default function Nutricionistas() {
    return (
        <div className='d-flex flex-column'>
            <div className='m-auto col-10 col-sm-9 col-md-10 col-lg-11 col-xl-9'>
                <h3 className='h2 text-tertiary mb-5'>Nutricionista Álvaro Cañete Berna</h3>
                <figure className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
                    <Image src={ImgNutri} alt='Nutricionista deportivo Álvaro Cañete Berna' height={400} width={300}
                        className='mb-3 mb-md-0' style={{ borderRadius: '15px' }} />
                    <figcaption className='col-12 col-md-6 col-lg-8 d-flex flex-column justify-content-center'>
                        <FontAwesomeIcon icon={faQuoteLeft} style={{ fontSize: '40px', width: '40px', color: '#673DE6' }}
                            className='mb-3' />
                        <p className='h5 color-tertiary mb-3' style={{ textAlign: 'justify' }}>
                            Mi nombre es Álvaro, nutricionista con amplia experiencia trabajando con deportistas
                            que buscan mejorar su rendimiento y estado físico, así como personas que simplemente
                            buscan un cambio nutricional, mejorar su salud y sentirse mejor.
                        </p>
                        <p className='h5 color-tertiary' style={{ textAlign: 'justify' }}>
                            Respecto a mi formación, estudié en la Universidad de Valparaíso, donde me titulé
                            con distinción el año 2019. Soy antropometrista ISAK 1, y diplomado en Nutrición
                            Deportiva y Fitness U Andes. Además, cuento con varias certificaciones en nutrición
                            deportiva y nutrición para vegetarianos.
                        </p>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}
