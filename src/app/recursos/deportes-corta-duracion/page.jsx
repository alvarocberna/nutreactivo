import React from 'react'
import { faBolt, faFire } from '@fortawesome/free-solid-svg-icons'
import {
    RecursoPageHeader,
    RecursoVideoEmbed,
    RecursoSection,
    RecursoTip,
} from '@/features/recursos/components/recurso-article'

export default function DeportesCortaDuracion() {
    return (
        <div className='w-100 d-flex flex-column py-5'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9' style={{ gap: '20px' }}>

                <RecursoPageHeader
                    title='Rendimiento en deportes de corta duración'
                    description='¿Cómo optimizar mi rendimiento en disciplinas de alta intensidad y corta duración?'
                />

                <RecursoVideoEmbed
                    src='https://youtube.com/embed/fyrDUOv2CWk'
                    title='Fuentes de energía en deportes'
                />

                <p className='text-muted' style={{ textAlign: 'justify' }}>
                    Un aspecto clave en el rendimiento deportivo de cualquier atleta consiste en
                    mantener fuentes de energía del cuerpo bien abastecidas, en especial aquellas fuentes
                    utilizadas en la disciplina deportiva que practicamos.
                </p>
                <p className='text-muted' style={{ textAlign: 'justify' }}>
                    En deportes de corta duración y alta intensidad como lo es la halterofilia,
                    100 y 200 metros planos, además de deportes de combate como el karate, tenemos trabajando
                    dos sistemas energéticos.
                </p>

                <RecursoSection icon={faBolt} title='Sistema fosfágeno (anaeróbico aláctico)'>
                    <p className='mb-0'>
                        Su sustrato energético corresponde a la fosfocreatina de nuestros músculos. Este sistema
                        inicia en el segundo cero, alcanzando su pico entre los primeros 6 a 8 segundos, para posteriormente
                        decaer, hasta finalizar aproximadamente a los 30 segundos. Su mecanismo de acción consiste en que
                        la molécula de fosfocreatina muscular es metabolizada, liberando un fosfato inorgánico y energía,
                        elementos que son utilizados para convertir las moléculas de ADP en ATP, la cual es la principal
                        molécula energética del cuerpo.
                    </p>
                </RecursoSection>
                <RecursoTip>
                    Una estrategia nutricional para favorecer este sistema energético es la suplementación con
                    creatina, lo cual aumentará los depósitos de fosfocreatina muscular, aumentando la explosividad
                    del atleta.
                </RecursoTip>

                <RecursoSection icon={faFire} title='Sistema anaeróbico láctico'>
                    <p className='mb-0'>
                        Aquí es producido el famoso ácido láctico o lactato. Este sistema
                        inicia entre los primeros 6-8 segundos, alcanzando su pico entre los primeros 30 a 90 segundos,
                        posteriormente su aporte empieza a disminuir a medida que va aumentando el nivel de acidez corporal,
                        alcanzando su límite entre los 2 a 5 minutos dependiendo de la intensidad del ejercicio realizado.
                        Su mecanismo de acción consiste en que las moléculas de glucosa son metabolizadas en el proceso conocido
                        como glucólisis, en el cual liberan moléculas de ATP. Debido a que el cuerpo requiere una alta cantidad
                        de energía de rápido aporte, el cuerpo para agilizar la obtención de energía opta por el metabolismo
                        anaeróbico en lugar de la respiración celular, generando como consecuencia la acumulación de H+,
                        molécula que aumentará el nivel de acidez. El cuerpo intenta atenuar la acidez generada metabolizando el
                        H+ con el piruvato produciendo moléculas de lactato, lo cual permite extender la duración de este sistema
                        energético por un tiempo más.
                    </p>
                </RecursoSection>
                <RecursoTip>
                    Otra estrategia nutricional para favorecer este sistema energético es la suplementación con
                    bicarbonato de sodio, el cual al tener un pH base ayuda a neutralizar el nivel de acidez
                    generado durante el ejercicio.
                </RecursoTip>

            </div>
        </div>
    )
}
