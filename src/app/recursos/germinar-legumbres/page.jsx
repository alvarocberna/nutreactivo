import React from 'react'
import { faSeedling, faWheatAwn, faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import {
    RecursoPageHeader,
    RecursoSection,
    RecursoInlineImg,
    RecursoChecklist,
    RecursoStepList,
    RecursoStep,
} from '@/features/recursos/components/recurso-article'

export default function GerminarLegumbres() {
    return (
        <div className='w-100 d-flex flex-column py-5'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9' style={{ gap: '20px' }}>

                <RecursoPageHeader
                    title='¿Cómo germinar legumbres?'
                    description='Guía paso a paso para germinar legumbres en casa y aprovechar todo su potencial nutricional.'
                />

                <RecursoSection icon={faSeedling} title='Qué es la germinación'>
                    <p className='mb-0'>
                        La germinación es la primera etapa en el desarrollo de una semilla para convertirse en planta,
                        caracterizado por la aparición del brote de la semilla. Este proceso genera cambios nutricionales,
                        bioquímicos y sensoriales en los alimentos. El objetivo de germinar ciertos alimentos es
                        despertarlos de su estado de latencia, para que una vez activos liberen todo su potencial
                        nutricional, eliminando sus antinutrientes.
                    </p>
                    <RecursoInlineImg src='/media/img_semilla_germinada.png' alt='Semilla germinada' />
                </RecursoSection>

                <RecursoSection icon={faWheatAwn} title='Qué alimentos germinar'>
                    <p>
                        Es posible germinar cualquier grano/semilla, ya que son contenedores de vida la cual se
                        encuentra en estado latente. Estos granos están a la espera de poder germinar y crecer en
                        el momento indicado.
                    </p>
                    <p className='mb-0'>
                        Entre las legumbres podemos germinar: lentejas, porotos, garbanzos, poroto de soja,
                        arvejas, habas.
                    </p>
                </RecursoSection>

                <RecursoSection icon={faHeartPulse} title='Beneficios de la germinación'>
                    <p>
                        La germinación le entrega mucho valor nutricional a los alimentos, ya que al perder una
                        gran cantidad de antinutrientes, obtenemos beneficios como:
                    </p>
                    <RecursoChecklist
                        items={[
                            'Mejora del valor biológico de las proteínas.',
                            'Facilita la digestibilidad de los carbohidratos.',
                            'Mejora del contenido de fibra del alimento.',
                            'Favorece la disponibilidad de minerales como hierro, zinc y calcio.',
                        ]}
                    />
                </RecursoSection>

                <h4 className='text-tertiary fw-bold mb-1'>Pasos a seguir para la germinación</h4>
                <RecursoStepList>
                    <RecursoStep number={1} img='/media/img_bowl_lentejas.jpeg' imgAlt='Legumbres remojando en un bowl'>
                        Poner legumbres en un bowl, cubrir con agua y dejar remojando durante 12 horas.
                        Este proceso es el que suele hacer la mayoría de las personas, para posteriormente cocinar
                        las legumbres. Sin embargo, para poder germinarlas necesitaremos realizar los siguientes pasos.
                    </RecursoStep>
                    <RecursoStep number={2} img='/media/img_lentejas_chorro_agua.jpeg' imgAlt='Legumbres bajo el chorro de agua'>
                        Pasadas las 12 horas de remojo, vamos a traspasar las legumbres a un colador eliminando todo el
                        agua del remojo, y aplicaremos un chorro de agua corriente sobre las legumbres en el colador
                        para eliminar cualquier residuo.
                    </RecursoStep>
                    <RecursoStep number={3} img='/media/img_lentejas_tapadas.jpeg' imgAlt='Legumbres tapadas con un paño húmedo'>
                        Mantendremos las legumbres en el colador, y las cubriremos con un paño húmedo o papel
                        absorbente húmedo (toalla nova). Dejaremos las legumbres en un lugar oscuro y fresco durante uno a dos
                        días en lo que se produce la germinación.
                    </RecursoStep>
                    <RecursoStep number={4} img='/media/img_lentejas_chorro_agua.jpeg' imgAlt='Lavado diario de las legumbres'>
                        Adicionalmente, cada día debemos lavar las legumbres en germinación una o dos veces por día,
                        para así evitar la proliferación de sustancias indeseadas. Cada vez que hagamos este proceso debemos
                        cambiar el papel absorbente por uno nuevo.
                    </RecursoStep>
                    <RecursoStep number={5} img='/media/img_lentejas_germinadas.jpg' imgAlt='Legumbres germinadas'>
                        Transcurridos uno o dos días, las legumbres estarán listas para ser cocinadas. Podemos
                        evidenciar que ahora las legumbres presentan un pequeño brote, tal cual se ve en la imagen,
                        signo de que la germinación ha sido exitosa.
                    </RecursoStep>
                    <RecursoStep number={6} img='/media/img_plato_lentejas.jpg' imgAlt='Plato de legumbres cocinadas'>
                        Finalmente podemos cocinar nuestras legumbres de forma tradicional.
                    </RecursoStep>
                </RecursoStepList>

            </div>
        </div>
    )
}
