
import React from 'react'

export default function PerdidaGrasa() {
    return (
        <div className='d-flex flex-column'>
            <div className='m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-8 d-flex flex-column'>
                <h3 className='h2 text-tertiary mb-5'>
                    Recomendaciones nutricionales para optimizar la pérdida de grasa corporal
                </h3>
                <iframe src='https://youtube.com/embed/S88m8J_QO2c' height={400}
                    className='m-auto col-12 col-md-10 col-lg-8 rounded mb-5' alt='Video Perdida Grasa Corporal aspectos Clave' />
                <p style={{ textAlign: 'justify' }}>
                    Si nuestro objetivo es la disminución de nuestro nivel de grasa corporal, entonces
                    debemos tener en consideración 3 factores importantes que jugarán un papel clave.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <b>1- Cantidad de energía ingerida: </b> Para que el cuerpo pueda degradar
                    sus depositos de grasa corporal, es necesario que el gasto energético del cuerpo sea
                    superior a la energía que nos aportan los alimentos. De esta forma, el cuerpo al no
                    obtener toda la energía requerida, empezará a degradar sus reservas de grasa para obtener
                    energía, proceso conocido como lipolisis.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <b>2-Calidad de los alimentos: </b> Otro aspecto importante es la calidad de los alimentos
                    que consumimos. No es lo mismo consumir alimentos ricos en fibra como frutas y verduras, que
                    alimentos procesados altos en azucar como pan blanco o azucar, incluso si estos aportan la
                    misma cantidad de energía. Esto se debe a que los alimentos procesados son digeridos mucho
                    más rápidos, lo cual eleva el nivel de insulina del cuerpo de forma abrupta, generando un ambiente
                    favorable para la acumulación de grasa, al tratarse la insulina de una hormona
                    que favorece la lipogénesis. Por tal motivo es recomendado consumir mayormente alimentos
                    sin procesar, como frutas, verduras, frutos secos y legumbres.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <b>3-Ejercicio físico: </b> Debemos considerar que al estar con un déficit energético, nuestro
                    cuerpo está funcionando con menos energía de la habitual, por lo que es facil sentirse cansados y tener
                    una menor adherencia al régimen alimenticio,
                    condición que el ejercicio mal implementado podría incrementar. Para evitar esto, es necesario que
                    los días que hagamos entrenamientos de alta intensidad, como pesas, acompañemos la sesión de ejercicio
                    con una colación previa o un jugo isotónico que nos aporte energía. De esta manera, evitamos agotar las
                    reservas de energía interna del organismo, previniendo la fatiga. Esta estrategia no afectará la pérdida
                    de grasa corporal, ya que en ejercicios intensos la principal fuente de energía del cuerpo es el glucógeno
                    (reservas de carbohidratos del cuerpo) y no la grasa, y llevar esta fuente de energía a niveles muy bajos
                    favorecerá la fatiga y el cansancio, haciendo más dificil de conseguir nuestro objetivo.
                </p>
            </div>
        </div>
    )
}
