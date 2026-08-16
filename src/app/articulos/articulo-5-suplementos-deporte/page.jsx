import React from 'react';
// import { NavLink } from "react-router-dom";
// import Img0 from '../../imgs/img_suples4.png';
// import Img1 from '../../imgs/img_sello1.png';
// import Img2 from '../../imgs/img_sello2.png';
// import Img3 from '../../imgs/img_sello3.png';

export default function Articulo5() {
    return (
        <>
            <div className='' />

            <div className='container-fluid'>

                {/* Titulo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h2 className=' fw-bold display-6 '>
                            Suplementos indicados para cada deporte
                        </h2>
                    </div>
                </div>

                {/* Video */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto d-flex'>
                        <iframe height="350px" className='col-12 col-md-8  m-auto redondearSty'
                            src="https://www.youtube.com/embed/FPoO3NFnmyw">
                        </iframe>
                    </div>
                </div>

                {/* Parrafo solo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <p className=''>
                            En la búsqueda de maximizar el rendimiento deportivo, el uso de suplementos se perfila como una opción ideal,
                            gracias a su seguridad y resultados efectivos.
                        </p>
                        <p className=''>
                            Antes de considerar el uso de suplementos es necesario considerar que no todos están
                            permitidos por la Agencia Mundial Antidopaje (WADA), así como que no todos los suplementos disponibles
                            en el mercado presentan efectos comprobados realmente.  En comparación con los suplementos que se ofrecen
                            en el mercado, la lista real de suplementos efectivos es más bien corta, estando compuesta por:
                        </p>
                        <ol className=''>
                            <li>
                                Nitrato
                            </li>
                            <li>
                                Creatina
                            </li>
                            <li>
                                Cafeína
                            </li>
                            <li>
                                Bicarbonato de sodio
                            </li>
                            <li>
                                Beta alanina
                            </li>
                            <li>
                                Glicerol
                            </li>
                        </ol>
                        <p className=''>
                            Si bien, cada suplemento de los mencionados ha demostrado ser efectivo, no podemos aplicar cualquiera
                            de ellos en cualquier disciplina y esperar beneficios. Para un beneficio real debemos implementar
                            el suplemento correcto en la disciplina apropiada, y esto dependerá de las características particulares
                            de cada disciplina, como vías energéticas implicadas, sustratos energéticos utilizados, entre otros
                            factores. &nbsp;
                            {/* <NavLink to='/Articulos/Fuentes-de-energia-segun-deporte'>
                                Puedes conocer más sobre la utilización de sustratos energéticos aquí.
                            </NavLink> */}
                        </p>
                    </div>
                </div>


                {/* Parrafo solo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h4 className=' fw-bold'>
                            Explosividad máxima
                        </h4>
                        <p className=''>
                            Cuando buscamos lograr una máxima explosividad en periodos de tiempo mínimos, como en el levantamiento de
                            pesas o en la carrera de 100 metros planos, debemos considerar que la principal fuente de energía utilizada
                            es la fosfocreatina muscular. Mientras más altos tengamos nuestros niveles de fosfocreatina, más fácilmente
                            podremos alcanzar una mayor explosividad, por lo que la suplementación con <span className='fw-bold'>creatina </span>es una gran opción,
                            la cual es indispensable en este tipo de ejercicios.
                        </p>
                        <p className=''>
                            Otro suplemento apropiado es la <span className='fw-bold'>cafeína</span>, la cual tiene un efecto excitatorio en los músculos y sistema nervioso,
                            disminuyendo la percepción del esfuerzo.
                        </p>
                    </div>
                </div>

                {/* Parrafo solo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h4 className=' fw-bold'>
                            Ejercicios cortos de alta intensidad
                        </h4>
                        <p className=''>
                            Disciplinas de duración breve y alta intensidad (30s a 5min) como el remo, ciclismo, combate o pruebas de
                            400 u 800 metros planos, van a depender principalmente de la fosfocreatina muscular y de la glucolisis anaeróbica,
                            es decir, fuentes de energía que no requieren oxígeno, y en consecuencia se generará un aumento del lactato y
                            acidez en el cuerpo.
                        </p>
                        <p className='bg-quaternary rounded text-primary p-4 '>
                            Cabe señalar que, al lactato o ácido láctico, usualmente se le atribuye el aumento de acidez en
                            la sangre, sin embargo, este efecto no es generado por el lactato, sino por el aumento de iones H+
                            (protones). El lactato es una molécula que se forma a la par del aumento de acidez, y su rol es absorber
                            los iones H+.
                        </p>
                        <p className=''>
                            En esta situación, al igual que en el caso anterior, suplementar con creatina permitirá llevar los
                            niveles de explosividad al máximo. Adicionalmente, producto del aumento de iones H+ en la sangre, lo
                            cual induce un aumento de acidez, suplementos como el <span className='fw-bold'>bicarbonato de sodio y beta alanina</span> serán muy
                            beneficiosos para disminuir la acidez en la sangre, disminuyendo la fatiga y manteniendo el rendimiento.
                        </p>
                        <p className=''>
                            El bicarbonato de sodio aumenta los niveles de bicarbonato en sangre, ayudando a “absorber” la acidez.
                            Por otro lado, la beta alanina tiene una función muy similar, al ser precursora de la carnosina, que
                            ayuda a tamponar la acidez del cuerpo, siendo otro suplemento que nos ayudará a disminuir la acidez
                            producto del ejercicio.
                        </p>
                    </div>
                </div>

                {/* Parrafo solo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h4 className=' fw-bold'>
                            Ejercicios prolongados o resistencia
                        </h4>
                        <p className=''>
                            Disciplinas de mayor duración, como deportes en equipo o carreras, van a depender mayormente del
                            metabolismo de los carbohidratos y grasas. La naturaleza de estas disciplinas implica que la mayor
                            fuente de energía provendrá de la vía aeróbica, es decir, dependerá del consumo de oxígeno del atleta.
                            Frente a esta situación, la suplementación con <span className='fw-bold'>nitrato</span> se presenta como una ayuda efectiva y segura,
                            ya que ayuda a aumentar las concentraciones de óxido nítrico en el cuerpo, el cual es un vaso dilatador,
                            permitiendo una mayor oxigenación muscular y mejor rendimiento.
                        </p>
                        <p className=''>
                            Al involucrar también esfuerzos cortos e intensos, como piques cortos en el caso de los deportes de
                            equipo, igual que en el caso anterior, veremos un aumento de lactato y acidez en sangre, por lo que
                            nuevamente el bicarbonato y la beta alanina se presentan como una excelente opción para amortiguar
                            el nivel de acidez, manteniendo el rendimiento deportivo.
                        </p>
                    </div>
                </div>

                {/* Parrafo solo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h4 className=' fw-bold'>
                            Resistencia extrema
                        </h4>
                        <p className=''>
                            En disciplinas de resistencia extrema, como maratones, donde la naturaleza del deporte
                            impide reponer el líquido corporal a la misma velocidad que se pierde, se presentan como
                            una opción beneficiosa y segura el <span className='fw-bold'>glicerol</span>. El glicerol es un azúcar alcohólico utilizado
                            en la industria alimentaria y farmacéutica. Sin embargo, en este tipo de deportes nos ayuda
                            a aumentar la capacidad del cuerpo de retener líquido, reduciendo la pérdida de rendimiento
                            producto de la deshidratación.
                        </p>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h4 className=' fw-bold'>
                            Conclusión
                        </h4>
                        <p className=''>
                            En conclusión, el uso de suplementos representa una excelente alternativa para mejorar el
                            rendimiento, especialmente en atletas de alto nivel donde un aumento de rendimiento se hace muy
                            difícil a través del entrenamiento. Sin embargo, es importante considerar que la dosificación debe
                            estar proporcionada por un profesional competente.
                        </p>
                    </div>
                </div>
            </div>
            <div className='' />

        </>
    )
}