import React from 'react'
import { faDroplet, faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import {
    RecursoPageHeader,
    RecursoSection,
    RecursoInlineImg,
    RecursoStepList,
    RecursoStep,
} from '@/features/recursos/components/recurso-article'

export default function ActivarSemillas() {
    return (
        <div className='w-100 d-flex flex-column py-5'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9' style={{ gap: '20px' }}>

                <RecursoPageHeader
                    title='¿Cómo activar semillas?'
                    description='Un proceso simple para mejorar la disponibilidad de nutrientes de tus semillas.'
                />

                <RecursoSection icon={faDroplet} title='Qué es la activación'>
                    <p>
                        La activación es un proceso fácil y simple que consiste en remojar las semillas en agua
                        por un tiempo determinado, con el fin de mejorar la disponibilidad de nutrientes del alimento.
                    </p>
                    <p className='mb-0'>
                        El agua y un ambiente templado simulan el riego de la lluvia para las semillas, lo que activa
                        el inicio de su desarrollo. En este proceso ocurre una serie de reacciones al interior de la semilla,
                        en la cual disminuyen aquellas sustancias que la mantenían inactiva la semilla (antinutrientes) aumentando
                        la calidad nutricional del alimento. De este modo, las semillas liberan todo su potencial nutritivo.
                    </p>
                    <RecursoInlineImg src='/media/img_semillas_agua.jpeg' alt='Semillas remojando en agua' />
                </RecursoSection>

                <RecursoSection icon={faHeartPulse} title='Beneficios de activar semillas'>
                    <p className='mb-0'>
                        La activación genera una serie de reacciones bioquímicas al interior de la semilla,
                        favoreciendo la liberación de sus reservas de nutrientes. Esto nos proporciona beneficios
                        como mayor disponibilidad de proteínas y minerales, así como una mejor digestión del alimento.
                    </p>
                </RecursoSection>

                <h4 className='text-tertiary fw-bold mb-1'>Pasos a seguir para la activación</h4>
                <RecursoStepList>
                    <RecursoStep number={1} img='/media/img_semillas_chorro_agua.jpeg' imgAlt='Semillas bajo el chorro de agua'>
                        Vamos a lavar las semillas bajo un chorro de agua corriente, las cuales deben ser crudas y
                        naturales (no tostadas, partidas o peladas).
                    </RecursoStep>
                    <RecursoStep number={2} img='/media/img_semillas_agua.jpeg' imgAlt='Semillas remojando en agua'>
                        Pondremos las semillas en un recipiente, y le añadiremos agua filtrada o mineral en una proporción
                        de 1:4 entre las semillas y el agua.
                    </RecursoStep>
                    <RecursoStep number={3} img='/media/img_reloj.png' imgAlt='Reloj de tiempo de remojo'>
                        Dejaremos las semillas remojando a temperatura ambiente. Las semillas más pequeñas, como
                        sésamo, girasol, zapallo, chía, alpiste, quinoa, las vamos a dejar remojando por 4 a 6 horas.
                        Mientras que, las semillas grandes las dejaremos por 8 a 12 horas.
                    </RecursoStep>
                    <RecursoStep number={4} img='/media/img_semillas_zapallo.jpg' imgAlt='Semillas listas para consumir'>
                        Una vez transcurrido el tiempo, vamos a eliminar el agua y enjuagar las semillas.
                        Con esto ya estarán listas para consumir.
                    </RecursoStep>
                </RecursoStepList>

            </div>
        </div>
    )
}
