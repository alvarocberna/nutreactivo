
import React from 'react'
import Image from 'next/image'

export default function ActivarSemillas() {
    return (
        <div className='d-flex flex-column'>
            <div className='m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-8 d-flex flex-column'>
                <h3 className='h2 text-tertiary mb-5'>
                    ¿Cómo activar semillas?
                </h3>
                <div className='d-flex flex-column mb-3'>
                    <h4 className='text-primary mb-3'>Qué es la activación</h4>
                    <p style={{ textAlign: 'justify' }}>
                        La activación es un proceso fácil y simple que consiste en remojar las semillas en agua
                        por un tiempo determinado, con el fin de mejorar la disponibilidad de nutrientes del alimento.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        El agua y un ambiente templado simulan el riego de la lluvia para las semillas,  lo que activa
                        el inicio de su desarrollo. En este proceso ocurre una serie de reacciones al interior de la semilla,
                        en la cual disminuyen aquellas sustancias que la mantenían inactiva la semilla (antinutrientes) aumentando
                        la calidad nutricional del alimento. De este modo,
                        las semillas liberan todo su potencial nutritivo.
                    </p>
                    <Image src='/media/img_semillas_agua.jpeg' width={600} height={300} className='col-12 col-md-6 col-lg-6 rounded m-auto' style={{ objectFit: 'cover' }}></Image>
                </div>
                <div className='d-flex flex-column'>
                    <h4 className='text-primary mb-3'>Beneficios de activar semillas</h4>
                    <p style={{ textAlign: 'justify' }}>
                        La activación genera una serie de reacciones bioquímicas al interior de la semilla,
                        favoreciendo la liberación de sus reservas de nutrientes. Esto nos proporciona beneficios
                        como mayor disponibilidad de proteínas y minerales, así como una mejor digestión del alimento.
                    </p>
                </div>
                <div>
                    <h4 className='text-primary mb-3'>Pasos a seguir para la activación</h4>
                    <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
                        <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                            <h4 className='text-secondary'>Paso 1</h4>
                            <p className='' style={{ textAlign: 'justify' }}>
                                Vamos a lavar las semillas bajo un chorro de agua corriente, las cuales deben ser crudas y
                                naturales (no tostadas, partidas o peladas).
                            </p>
                        </div>
                        <Image className='col-12 col-md-4 rounded' src='/media/img_semillas_chorro_agua.jpeg' width={300} height={150} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
                        <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                            <h4 className='text-secondary'>Paso 2</h4>
                            <p className='' style={{ textAlign: 'justify' }}>
                                Pondremos las semillas en un recipiente, y le añadiremos agua filtrada o mineral en una proporción
                                de 1:4 entre las semillas y el agua.
                            </p>
                        </div>
                        <Image className='col-12 col-md-4 rounded' src='/media/img_semillas_agua.jpeg' width={300} height={150} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
                        <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                            <h4 className='text-secondary'>Paso 3</h4>
                            <p className='' style={{ textAlign: 'justify' }}>
                                Dejaremos las semillas remojando a temperatura ambiente. Las semillas más pequeñas, como
                                sésamo, girasol, zapallo, chía, alpiste, quinoa, las vamos a dejar remojando por 4 a 6 horas.
                                Mientras que, las semillas grandes las dejaremos por 8 a 12 horas.
                            </p>
                        </div>
                        <Image className='col-12 col-md-4 rounded' src='/media/img_reloj.png' width={300} height={150} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
                        <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                            <h4 className='text-secondary'>Paso 4</h4>
                            <p className='' style={{ textAlign: 'justify' }}>
                                Una vez transcurrido el tiempo, vamos a eliminar el agua y enjuagar las semillas.
                                Con esto ya estarán listas para consumir.
                            </p>
                        </div>
                        <Image className='col-12 col-md-4 rounded' src='/media/img_semillas_zapallo.jpg' width={300} height={150} style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
