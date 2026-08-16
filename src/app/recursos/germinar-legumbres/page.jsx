
import Image from 'next/image';

import React from 'react'

export default function GerminarLegumbres() {
    return (
        <div className='d-flex flex-column'>
            <div className='m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-8 d-flex flex-column'>
                <h3 className='h2 text-tertiary mb-5'>
                    ¿Cómo germinar legumbres?
                </h3>
                <div className='d-flex flex-column'>
                    <h4 className='text-primary mb-3'>Qué es la germinación</h4>
                    <p style={{ textAlign: 'justify' }}>
                        La germinación es la primera etapa en el desarrollo de una semilla para convertirse en planta,
                        caracterizado por la aparición del brote de la semilla. Este proceso genera cambios nutricionales,
                        bioquímicos y sensoriales en los alimentos. El objetivo de germinar ciertos alimentos es
                        despertarlos de su estado de latencia, para que una vez activos liberen todo su potencial
                        nutricional, eliminando sus antinutrientes.
                    </p>
                    <Image src='/media/img_semilla_germinada.png' width={600} height={300} className='col-12 col-md-6 col-lg-6 rounded m-auto' style={{ objectFit: 'cover' }}></Image>
                </div>
                <div>
                    <h4 className='text-primary mb-3'>Qué alimentos germinar</h4>
                    <p style={{ textAlign: 'justify' }}>
                        Es posible germinar cualquier grano/semilla, ya que son contenedores de vida la cual se
                        encuentra en estado latente. Estos granos están a la espera de poder germinar y crecer en
                        el momento indicado.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        Entre las legumbres podemos germinar: lentejas, porotos, garbanzos, poroto de soja,
                        arvejas, habas.
                    </p>
                </div>
                <div>
                    <h4 className='text-primary mb-3'>Beneficios de la germinación</h4>
                    <p style={{ textAlign: 'justify' }}>
                        La germinación le entrega mucho valor nutricional a los alimentos, ya que al perder una
                        gran cantidad de antinutrientes, obtenemos beneficios como:
                    </p>
                    <ul>
                        <li>
                            Mejora del valor biológico de las proteínas.
                        </li>
                        <li>
                            Facilita la digestibilidad de los carbohidratos.
                        </li>
                        <li>
                            Mejora del contenido de fibra del alimento.
                        </li>
                        <li>
                            Favorece la disponibilidad de minerales como hierro, zinc y calcio.
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-primary mb-3'>Pasos a seguir para la germinación</h4>
                    <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
                        <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                            <h4 className='text-secondary'>Paso 1</h4>
                            <p className='' style={{ textAlign: 'justify' }}>
                                Poner legumbres en un bowl, cubrir con agua y dejar remojando durante 12 horas.
                                Este proceso es el que suele hacer la mayoría de las personas, para posteriormente cocinar
                                las legumbres. Sin embargo, para poder germinarlas necesitaremos realizar los siguientes
                                pasos.

                            </p>
                        </div>
                        <Image className='col-12 col-md-4 rounded' src='/media/img_bowl_lentejas.jpeg' width={300} height={150} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
                        <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                            <h4 className='text-secondary'>Paso 2</h4>
                            <p className='' style={{ textAlign: 'justify' }}>
                                Pasadas las 12 horas de remojo, vamos a traspasar las legumbres a un colador eliminando todo el
                                agua del remojo, y aplicaremos un chorro de agua corriente sobre las legumbres en el colador
                                para eliminar cualquier residuo.
                            </p>
                        </div>
                        <Image className='col-12 col-md-4 rounded' src='/media/img_lentejas_chorro_agua.jpeg' width={300} height={150} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
                        <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                            <h4 className='text-secondary'>Paso 3</h4>
                            <p className='' style={{ textAlign: 'justify' }}>
                                Mantendremos las legumbres en el colador, y las cubriremos con un paño húmedo o papel
                                absorbente húmedo (toalla nova). Dejaremos las legumbres en un lugar oscuro y fresco durante uno a dos
                                días en lo que se produce la germinación.
                            </p>
                        </div>
                        <Image className='col-12 col-md-4 rounded' src='/media/img_lentejas_tapadas.jpeg' width={300} height={150} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
                        <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                            <h4 className='text-secondary'>Paso 4</h4>
                            <p className='' style={{ textAlign: 'justify' }}>
                                Adicionalmente, cada día debemos lavar las legumbres en germinación una o dos veces por día,
                                para así evitar la proliferación de sustancias indeseadas. Cada vez que hagamos este proceso debemos
                                cambiar el papel absorbente por uno nuevo.
                            </p>
                        </div>
                        <Image className='col-12 col-md-4 rounded' src='/media/img_lentejas_chorro_agua.jpeg' width={300} height={150} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
                        <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                            <h4 className='text-secondary'>Paso 5</h4>
                            <p className='' style={{ textAlign: 'justify' }}>
                                Transcurridos uno o dos días, las legumbres estarán listas para ser cocinadas. Podemos
                                evidenciar que ahora las legumbres presentan un pequeño brote, tal cual se ve en la imagen,
                                signo de que la germinación ha sido exitosa.
                            </p>
                        </div>
                        <Image className='col-12 col-md-4 rounded' src='/media/img_lentejas_germinadas.jpg' width={300} height={150} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
                        <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                            <h4 className='text-secondary'>Paso 6</h4>
                            <p className='' style={{ textAlign: 'justify' }}>
                                Finalmente podemos cocinar nuestras legumbres de forma tradicional.
                            </p>
                        </div>
                        <Image className='col-12 col-md-4 rounded' src='/media/img_plato_lentejas.jpg' width={300} height={150} style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
