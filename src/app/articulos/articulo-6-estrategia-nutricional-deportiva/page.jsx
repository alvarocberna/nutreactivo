import React from 'react';

export default function Articulo6() {
    return (
        <>
            <div className='' />

            <div className='container-fluid'>

                {/* Titulo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h2 className=' fw-bold display-6 '>
                            Timing nutricional como estrategia de la nutrición deportiva
                        </h2>
                    </div>
                </div>

                {/* Video */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto d-flex'>
                        <iframe height="350px" className='col-12 col-md-8  m-auto '
                            src="https://www.youtube.com/embed/HYtsCsrhheI">
                        </iframe>
                    </div>
                </div>

                {/* Parrafo solo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <p className=''>
                            El timing nutricional es una estrategia deportiva que consiste en distribuir ciertos alimentos
                            de forma estratégica antes, durante y después de un evento deportivo, con el fin de aumentar el
                            rendimiento del atleta y maximizar su recuperación.
                        </p>
                        <p className=''>
                            El timing se fundamenta en que las reservas de energía del cuerpo son limitadas y se pueden agotar
                            rápidamente durante una sesión de entrenamiento o competencia, lo cual implica una pérdida importante
                            del rendimiento. Sin embargo, al introducir alimentos de rápida absorción alrededor del evento deportivo
                            vamos a favorecer la carga de energía y utilización de fuentes externar (alimentos) en lugar de las
                            reservas internas, permitiendo retrasar el agotamiento y prolongar el rendimiento lo máximo posible.
                        </p>
                    </div>
                </div>
            </div>

            {/* Parrafo solo */}
            <div className='row mb-5'>
                <div className='col-10 col-lg-8 m-auto'>
                    <h4 className=' fw-bold'>
                        Antes de competir
                    </h4>
                    <p className=''>
                        Al igual que un vehículo requiere ser cargado con combustible antes de un viaje largo para evitar
                        agotarse durante el camino, el cuerpo también requiere cargar sus reservas de energía antes de un
                        evento competitivo. Esto lo podemos hacer mediante el suministro de altas cantidades de hidratos de
                        carbono de absorción simple las horas previas o incluso días antes del evento. Empezar la actividad
                        deportiva con una alta disponibilidad energética afecta en gran medida el rendimiento, ya que retrasa
                        la fatiga y mejora el rendimiento durante la sesión.
                    </p>
                </div>
            </div>

            {/* Parrafo solo */}
            <div className='row mb-5'>
                <div className='col-10 col-lg-8 m-auto'>
                    <h4 className=' fw-bold'>
                        Durante la competencia
                    </h4>
                    <p className=''>
                        Los eventos competitivos son instancias de alto gasto energético, por lo que suministrar
                        fuentes de energía externas a través de alimentos, bebidas, o geles deportivos ayuda a mantener
                        la energía alta durante toda la sesión, evitando el agotamiento de las reservas de energía del
                        organismo, previniendo la fatiga y manteniendo el rendimiento del deportista.
                    </p>
                </div>
            </div>

            {/* Parrafo solo */}
            <div className='row mb-5'>
                <div className='col-10 col-lg-8 m-auto'>
                    <h4 className=' fw-bold'>
                        Después de competir
                    </h4>
                    <p className=''>
                        Una vez terminado el evento deportivo el timing sigue siendo relevante, ya que el aporte de proteína y
                        carbohidratos ayuda a acelerar la regeneración de energía y la recuperación muscular. Esta estrategia
                        es en especial importante si tenemos más de un evento competitivo en el día, y necesitamos recuperar
                        nuestras reservas de energía de forma rápida y efectiva para la siguiente sesión de entrenamiento o
                        competencia.
                    </p>
                </div>
            </div>

            {/* Parrafo solo */}
            <div className='row mb-5'>
                <div className='col-10 col-lg-8 m-auto'>
                    <h4 className=' fw-bold'>
                        Conclusión
                    </h4>
                    <p className=''>
                        El timing es una estrategia segura y efectiva para asegurar un buen rendimiento durante un evento
                        deportivo. Sin embargo, para que tenga el efecto esperado es importante seguir las recomendaciones
                        del nutricionista, respecto a cantidad de alimentos, tiempo previo e hidratación.
                    </p>
                </div>
            </div>

            <div className='' />

        </>
    )
}
