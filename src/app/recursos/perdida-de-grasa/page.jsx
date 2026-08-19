import React from 'react'
import {
    RecursoPageHeader,
    RecursoVideoEmbed,
    RecursoStepList,
    RecursoStep,
} from '@/features/recursos/components/recurso-article'

export default function PerdidaGrasa() {
    return (
        <div className='w-100 d-flex flex-column py-5'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9' style={{ gap: '20px' }}>

                <RecursoPageHeader
                    title='Recomendaciones nutricionales para optimizar la pérdida de grasa corporal'
                    description='Tres factores clave a considerar cuando el objetivo es reducir el nivel de grasa corporal.'
                />

                <RecursoVideoEmbed
                    src='https://youtube.com/embed/S88m8J_QO2c'
                    title='Pérdida de grasa corporal: aspectos clave'
                />

                <p className='text-muted' style={{ textAlign: 'justify' }}>
                    Si nuestro objetivo es la disminución de nuestro nivel de grasa corporal, entonces
                    debemos tener en consideración 3 factores importantes que jugarán un papel clave.
                </p>

                <RecursoStepList>
                    <RecursoStep number={1} title='Cantidad de energía ingerida'>
                        Para que el cuerpo pueda degradar sus depósitos de grasa corporal, es necesario que el gasto
                        energético del cuerpo sea superior a la energía que nos aportan los alimentos. De esta forma,
                        el cuerpo al no obtener toda la energía requerida, empezará a degradar sus reservas de grasa
                        para obtener energía, proceso conocido como lipólisis.
                    </RecursoStep>
                    <RecursoStep number={2} title='Calidad de los alimentos'>
                        Otro aspecto importante es la calidad de los alimentos que consumimos. No es lo mismo consumir
                        alimentos ricos en fibra como frutas y verduras, que alimentos procesados altos en azúcar como
                        pan blanco o azúcar, incluso si estos aportan la misma cantidad de energía. Esto se debe a que
                        los alimentos procesados son digeridos mucho más rápidos, lo cual eleva el nivel de insulina del
                        cuerpo de forma abrupta, generando un ambiente favorable para la acumulación de grasa, al tratarse
                        la insulina de una hormona que favorece la lipogénesis. Por tal motivo es recomendado consumir
                        mayormente alimentos sin procesar, como frutas, verduras, frutos secos y legumbres.
                    </RecursoStep>
                    <RecursoStep number={3} title='Ejercicio físico'>
                        Debemos considerar que al estar con un déficit energético, nuestro cuerpo está funcionando con
                        menos energía de la habitual, por lo que es fácil sentirse cansados y tener una menor adherencia
                        al régimen alimenticio, condición que el ejercicio mal implementado podría incrementar. Para
                        evitar esto, es necesario que los días que hagamos entrenamientos de alta intensidad, como pesas,
                        acompañemos la sesión de ejercicio con una colación previa o un jugo isotónico que nos aporte
                        energía. De esta manera, evitamos agotar las reservas de energía interna del organismo,
                        previniendo la fatiga. Esta estrategia no afectará la pérdida de grasa corporal, ya que en
                        ejercicios intensos la principal fuente de energía del cuerpo es el glucógeno (reservas de
                        carbohidratos del cuerpo) y no la grasa, y llevar esta fuente de energía a niveles muy bajos
                        favorecerá la fatiga y el cansancio, haciendo más difícil de conseguir nuestro objetivo.
                    </RecursoStep>
                </RecursoStepList>

            </div>
        </div>
    )
}
