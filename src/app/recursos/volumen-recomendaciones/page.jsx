import React from 'react'
import {
    RecursoPageHeader,
    RecursoVideoEmbed,
} from '@/features/recursos/components/recurso-article'

export default function VolumenRecomendaciones() {
    return (
        <div className='w-100 d-flex flex-column py-5'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9' style={{ gap: '20px' }}>

                <RecursoPageHeader
                    title='Recomendaciones nutricionales para optimizar crecimiento muscular'
                    description='Nutrición enfocada en volumen y ganancia de masa muscular.'
                />

                <RecursoVideoEmbed
                    src='https://youtube.com/embed/0v58vwE6tAk'
                    title='Recomendaciones para crecimiento muscular'
                />

            </div>
        </div>
    )
}
