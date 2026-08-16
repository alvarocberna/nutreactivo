"use client"
import React, { useState } from 'react';
// import Img1 from '../../imgs/img_suples2.jpg';
// import Img2 from '../../imgs/img_creatina.jpg';
// import Img3 from '../../imgs/img_balanina.png';
// import Img4 from '../../imgs/img_bicarbonato.png';
// import Img5 from '../../imgs/img_betarraga.jpg';
// import Img6 from '../../imgs/img_cafeina.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default function Articulo1() {
    const [creatina, setCreatina] = useState(false);
    const [creatina1, setCreatina1] = useState(false);
    const [creatina2, setCreatina2] = useState(false);
    const [creatina3, setCreatina3] = useState(false);
    const [creatina4, setCreatina4] = useState(false);
    const [balanina, setBalanina] = useState(false);
    const [balanina1, setBalanina1] = useState(false);
    const [balanina2, setBalanina2] = useState(false);
    const [balanina3, setBalanina3] = useState(false);
    const [balanina4, setBalanina4] = useState(false);
    const [bicarbonato, setBicarbonato] = useState(false);
    const [bicarbonato1, setBicarbonato1] = useState(false);
    const [bicarbonato2, setBicarbonato2] = useState(false);
    const [bicarbonato3, setBicarbonato3] = useState(false);
    const [bicarbonato4, setBicarbonato4] = useState(false);
    const [bicarbonato5, setBicarbonato5] = useState(false);
    const [nitrato, setNitrato] = useState(false);
    const [nitrato1, setNitrato1] = useState(false);
    const [nitrato2, setNitrato2] = useState(false);
    const [nitrato3, setNitrato3] = useState(false);
    const [nitrato4, setNitrato4] = useState(false);
    const [nitrato5, setNitrato5] = useState(false);
    const [cafeina, setCafeina] = useState(false);
    const [cafeina1, setCafeina1] = useState(false);
    const [cafeina2, setCafeina2] = useState(false);
    const [cafeina3, setCafeina3] = useState(false);
    const [cafeina4, setCafeina4] = useState(false);

    return (
        <>
            <div className='container-fluid'>

                {/* Titulo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h3 className=' fw-bold display-6 '>
                            Suplementos deportivos con mayor efectividad en la actualidad
                        </h3>
                    </div>
                </div>

                {/* Parrafo con imagen */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <div className='row'>
                            <div className='col-12 col-lg-7 '>
                                <p className=''>
                                    Hoy en día es habitual que deportistas de alto rendimiento o personas que realizan
                                    ejercicio de forma recreativa usen suplementos deportivos, hecho que puede ser muy
                                    beneficioso para mejorar su rendimiento deportivo. Sin embargo, al momento de elegir
                                    que suplemento consumir, muchas veces esta elección se ve influenciada por mitos,
                                    creencias y campañas de publicidad de suplementos que no tienen el respaldo científico
                                    suficiente para acreditar algún beneficio concreto. Por este motivo, es importante que
                                    nos hagamos tres preguntas al momento de considerar consumir un suplemento:
                                </p>
                                <ul className=''>
                                    <li>
                                        ¿Existe evidencia de que funciona?
                                    </li>
                                    <li>
                                        ¿Está permitido en los deportes?
                                    </li>
                                    <li>
                                        ¿Es seguro?
                                    </li>
                                </ul>
                                <p className=''>
                                    Con estas preguntas creamos un filtro para asegurar la efectividad de los suplementos
                                    y prevenir complicaciones negativas, como por ejemplo marcar positivo a una prueba de dopaje.
                                </p>
                            </div>
                            <div className='col-12 col-lg-5 d-flex justify-content-end'>
                                {/* <img src={Img1} className='imgsty2 rounded' alt='suplementos deportivos'></img> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Parrafo solo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h4 className='fw-bold '>
                            Suplementos más efectivos
                        </h4>
                        <p className=''>
                            El Instituto Australiano del Deporte clasifica los suplementos en cuatro grupos según el
                            nivel de evidencia científica con el que cuentan, los cuales son los grupos A, B, C y D. El grupo
                            A incluye los suplementos con suficiente evidencia científica para ser recomendados en situaciones
                            específicas. Los suplementos tipo B son aquellos cuyas investigaciones son prometedoras, pero
                            todavía no son concluyentes. El grupo C incluye aquellos suplementos que tienen muy poca evidencia
                            sobre ser beneficiosos. Y, por último, el grupo D abarca los suplementos prohibidos o con riesgo de
                            contaminación de sustancias ilícitas.
                        </p>
                        <p>
                            Debemos considerar que no basta con que un suplemento cuente con respaldo científico para
                            asegurar que nos será de utilidad, también debemos considerar si el efecto del suplemento es
                            beneficioso para la disciplina deportiva que estamos practicando. Para ello, a continuación,
                            veremos las características de los suplementos ergogénicos tipo A, cuando los podemos utilizar
                            y que beneficios nos entregan.
                        </p>
                    </div>
                </div>

                {/* CREATINA */}

                <div className='row mb-3 pointer'>
                    <div className='col-10 col-lg-8 m-auto rounded d-flex justify-content-center align-items-center artboxsty'
                        onClick={() => setCreatina(!creatina)}>
                        Creatina
                        {
                            creatina ?
                                <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='sm' />
                                :
                                <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='sm' />
                        }

                    </div>
                </div>

                {
                    creatina &&

                    <div className='row mb-5'>
                        <div className='col-10 col-lg-8 m-auto border px-2 py-2 rounded'>
                            <h4 className='fw-bold '>
                                Creatina
                            </h4>
                            <div className='row mb-4'>
                                <p className='col-12 col-lg-8 '>
                                    La creatina es un nutriente que podemos obtener a partir de la misma síntesis del cuerpo humano,
                                    y también a partir de los alimentos, principalmente carnes y pescados. Por este motivo las dietas
                                    vegetarianas suelen ser bajas en creatina.
                                </p>
                                <div className='col-12 col-lg-4 d-flex rounded justify-content-center'>
                                    {/* <img className='w-75 rounded' src={Img2} alt='creatina' /> */}
                                </div>
                            </div>
                            {/* Creatina - efectos */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setCreatina1(!creatina1)}>
                                    <b>Efectos</b>
                                    {
                                        creatina1 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    creatina1 &&
                                    <div>
                                        <p>
                                            La función de la creatina es la de proporcionar energía en ejercicios breves pero intensos,
                                            entregando grandes cantidades de energía, pero de corta duración, aportando su pico de energía
                                            durante los primeros 8-10 segundos de actividad intensa, para luego decaer. Un perfecto ejemplo
                                            de deportes donde la creatina tiene un rol protagónico es la prueba de 100 metros planos.
                                        </p>
                                        <p>
                                            Al suplementar, se ha visto que la creatina tiene importantes efectos en la mejora del
                                            rendimiento en el entrenamiento y posteriormente en la recuperación del atleta, lo cual a su
                                            vez favorece el desarrollo de fuerza y masa muscular.
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* Creatina - cuando suplementar */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setCreatina2(!creatina2)}>
                                    <b>Cuando suplementar</b>
                                    {
                                        creatina2 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    creatina2 &&
                                    <div>
                                        <p>
                                            La creatina, al igual que los otros suplementos ergogénicos, tiene una función particular,
                                            en este caso sus beneficios se ven mayormente durante los primeros 8-10 segundos de actividad física intensa,
                                            por lo que se deduce que no podemos administrar creatina en todas las disciplinas deportivas.
                                            Por ejemplo, suplementar con creatina no generará un beneficio radical en el rendimiento de
                                            atletas de larga distancia, como carreras de 10mil metros, pero si en deportes cortos y explosivos
                                            como los vistos a continuación:
                                        </p>
                                        <ul className=''>
                                            <li>
                                                Esfuerzos máximos de alta intensidad menores a 30 segundos. Ej: eventos de
                                                velocidad como 100 y 200 metros planos.
                                            </li>
                                            <li>
                                                Al realizar sprints de alta intensidad durante o al final de un ejercicio de resistencia.
                                                Ej: remate de una carrera de 5000 o 10000 metros.
                                            </li>
                                            <li>
                                                Deportes que implican esfuerzos repetidos de alta intensidad. Ej: deportes grupales
                                                como fútbol o rugby.
                                            </li>
                                            <li>
                                                Para apoyar la recuperación en periodos de pérdida muscular por desuso. Ej:
                                                lesiones, inmovilización.
                                            </li>
                                            <li>
                                                Para mejorar el procesamiento cognitivo del cerebro, reducir el daño y mejorar
                                                la recuperación de lesiones cerebrales leves.
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            {/* Creatina - Recomendaciones al suplementar */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setCreatina3(!creatina3)}>
                                    <b>Recomendaciones al suplementar</b>
                                    {
                                        creatina3 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    creatina3 &&
                                    <div>
                                        <p>
                                            La mejor forma de creatina, independiente de las marcas, es la creatina monohidratada.
                                            Esta forma de creatina es la que mayor respaldo científico tiene, y por el momento no
                                            hay motivos para preferir otras formas alternativas de creatina.
                                        </p>
                                        <p>
                                            Debemos considerar que la captación de creatina en el músculo está mediada por la insulina,
                                            esto significa que su absorción se ve favorecida al consumirla junto con alimentos que aumenten
                                            la insulina en sangre como carbohidratos y proteínas. Una forma adecuada de consumirla sería
                                            después de comidas que aporten proteína (carnes, huevo, leche) y carbohidratos (arroz, pastas,
                                            avena, pan).
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* Creatina - Efectos secundarios */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start' onClick={() => setCreatina4(!creatina4)}>
                                    <b>Efectos secundarios</b>
                                    {
                                        creatina4 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    creatina4 &&
                                    <div>
                                        <p>
                                            No existe evidencia de efectos adversos graves relacionados con la suplementación de creatina
                                            monohidrato. Sin embargo, existen algunas implicancias respecto al consumo de creatina y el
                                            aumento de peso, debido a la retención de agua que esta genera, pudiendo generar un aumento de
                                            entre 1-2kg.
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }


                {/* BETA ALANINA */}

                <div className='row mb-3 pointer'>
                    <div className='col-10 col-lg-8 m-auto rounded d-flex justify-content-center align-items-center artboxsty'
                        onClick={() => setBalanina(!balanina)}>
                        Beta Alanina
                        {
                            balanina ?
                                <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='sm' />
                                :
                                <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='sm' />
                        }

                    </div>
                </div>

                {
                    balanina &&

                    <div className='row mb-5'>
                        <div className='col-10 col-lg-8 m-auto border px-2 py-2 rounded'>
                            <h4 className='fw-bold '>
                                Beta Alanina
                            </h4>
                            <div className='row mb-4'>
                                <p className='col-12 col-lg-8 '>
                                    La beta alanina es un aminoácido que puede encontrarse en el cuerpo de forma libre o
                                    formando parte de la carnosina. Podemos encontrarla en carnes rojas, blancas y pescados,
                                    aunque las cantidades en que se encuentran no son suficientes para generar un aumento en
                                    el rendimiento deportivo. Nuevamente, personas con dietas basadas en plantas tendrán niveles
                                    mucho más bajos de este nutriente.
                                </p>
                                <div className='col-12 col-lg-4 d-flex rounded justify-content-center'>
                                    {/* <img className='w-75 rounded' src={Img3} alt='beta alanina' /> */}
                                </div>
                            </div>
                            {/* Creatina - efectos */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setBalanina1(!balanina1)}>
                                    <b>Efectos</b>
                                    {
                                        balanina1 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    balanina1 &&
                                    <div>
                                        <p>
                                            La beta alanina disminuye la acidez muscular producto del ejercicio intenso
                                            y la acumulación de ácido láctico, generando una disminución de la fatiga y
                                            mejorando el rendimiento.
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* Creatina - cuando suplementar */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setBalanina2(!balanina2)}>
                                    <b>Cuando suplementar</b>
                                    {
                                        balanina2 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    balanina2 &&
                                    <div>
                                        <ul className=''>
                                            <li>
                                                Es recomendado suplementar en ejercicios cortos que van desde los 30s hasta los 10min,
                                                de carácter sostenidos y de alta intensidad. Por ejemplo: Remo, ciclismo, natación y
                                                carreras de media distancia que van desde los 400 metros planos hasta los 3mil.
                                            </li>
                                            <li>
                                                Deportes que involucran esfuerzos repetitivos de alta intensidad como fútbol, rugby entre otros.
                                            </li>
                                            <li>
                                                Como alternativa al bicarbonato de sodio si este nos produce malestar gastrointestinal.
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            {/* Creatina - Recomendaciones al suplementar */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setBalanina3(!balanina3)}>
                                    <b>Recomendaciones al suplementar</b>
                                    {
                                        balanina3 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    balanina3 &&
                                    <div>
                                        <p className=''>
                                            La beta alanina es un suplemento cuyo efecto se puede apreciar después de una
                                            suplementación de varias semanas, por lo que consumirla previamente al ejercicio
                                            no generará ningún efecto agudo respecto al rendimiento.
                                        </p>
                                        <p className=''>
                                            Existen suplementos de beta alanina de rápida y lenta absorción siendo estos últimos
                                            la mejor opción si consideramos que generan menos efectos secundarios, además que permiten
                                            ingerir una mayor dosis y tienen una mejor retención en el cuerpo.
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* Creatina - Efectos secundarios */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setBalanina4(!balanina4)}>
                                    <b>Efectos secundarios</b>
                                    {
                                        balanina4 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    balanina4 &&
                                    <div>
                                        <p>
                                            Hay que considerar que puede generar una sensación de hormigueo en el cuerpo, pero
                                            se puede disminuir consumiendo píldoras de absorción lenta en lugar de las formas de
                                            rápida absorción como el formato en polvo.
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }

                {/* BICARBONATO */}

                <div className='row mb-3 pointer'>
                    <div className='col-10 col-lg-8 m-auto rounded d-flex justify-content-center align-items-center artboxsty'
                        onClick={() => setBicarbonato(!bicarbonato)}>
                        Bicarbonato de Sodio
                        {
                            bicarbonato ?
                                <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='sm' />
                                :
                                <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='sm' />
                        }

                    </div>
                </div>

                {
                    bicarbonato &&

                    <div className='row mb-5'>
                        <div className='col-10 col-lg-8 m-auto border px-2 py-2 rounded'>
                            <h4 className='fw-bold '>
                                Bicarbonato de Sodio
                            </h4>
                            <div className='row mb-4'>
                                <p className='col-12 col-lg-8 '>
                                    El bicarbonato se produce de manera natural en el cuerpo y tiene la función de mantener el balance
                                    acido base. Sin embargo, cuando nos suplementamos con bicarbonato de sodio logramos aumentar mucho
                                    más estos niveles en la sangre, favoreciendo la absorción de la acidez producida en ejercicios
                                    prolongados de alta intensidad.
                                </p>
                                <div className='col-12 col-lg-4 d-flex rounded justify-content-center'>
                                    {/* <img className='w-75 rounded' src={Img4} alt='bicarbonato de sodio' /> */}
                                </div>
                            </div>
                            {/* Creatina - efectos */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setBicarbonato1(!bicarbonato1)}>
                                    <b>Efectos</b>
                                    {
                                        bicarbonato1 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    bicarbonato1 &&
                                    <div>
                                        <p>
                                            El bicarbonato de sodio tiene la función de ayudar a amortiguar la formación de ácido láctico
                                            al hacer ejercicios intensos, disminuyendo la fatiga y mejora el rendimiento.
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* Creatina - cuando suplementar */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setBicarbonato2(!bicarbonato2)}>
                                    <b>Cuando suplementar</b>
                                    {
                                        bicarbonato2 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    bicarbonato2 &&
                                    <div>
                                        <ul className=''>
                                            <li>
                                                En eventos de alta intensidad con una duración de 1-7 minutos, donde la acumulación
                                                de ácido láctico cause fatiga. Ej: remo, natación, carreras de mediana distancia.
                                            </li>
                                            <li>
                                                Para el remate de una carrera de larga distancia.
                                            </li>
                                            <li>
                                                Deportes con actividad repetitiva de alta intensidad como deportes de combate o equipo.
                                            </li>
                                            <li>
                                                Para mejorar la capacidad y adaptación en el entrenamiento.
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            {/* Creatina - Recomendaciones al suplementar */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setBicarbonato3(!bicarbonato3)}>
                                    <b>Recomendaciones al suplementar</b>
                                    {
                                        bicarbonato3 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    bicarbonato3 &&
                                    <div>
                                        <p className=''>
                                            La fuente más comúnmente disponible y económica de bicarbonato de sodio es el bicarbonato
                                            de sodio para productos domésticos/para hornear, pero también existe en tabletas, polvo de
                                            bicarbonato de sodio en alcalinizantes urinarios como el polvo efervescente Ural e incluso por
                                            administración transdérmica.
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* Creatina - Efectos secundarios */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setBicarbonato4(!bicarbonato4)}>
                                    <b>Efectos secundarios</b>
                                    {
                                        bicarbonato4 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    bicarbonato4 &&
                                    <div>
                                        <p>
                                            El principal efecto secundario con el bicarbonato de sodio es el malestar gastrointestinal
                                            que incluye: náuseas, diarrea, dolor de estómago y vómito. Para disminuir estos efectos vamos
                                            a empezar con la carga unos 120-150 minutos antes, y consumirla lentamente durante unos 30-60 minutos.
                                            Además, debemos consumir con abundante líquido y acompañarlo con carbohidratos para mejorar la absorción.
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* Creatina - Consideraciones */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setBicarbonato5(!bicarbonato5)}>
                                    <b>Consideraciones</b>
                                    {
                                        bicarbonato5 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    bicarbonato5 &&
                                    <div>
                                        <p>
                                            El pH de la orina puede tardar algunas horas en volver a niveles aceptables para las
                                            pruebas antidopaje.
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }

                {/* NITRATO */}

                <div className='row mb-3 pointer'>
                    <div className='col-10 col-lg-8 m-auto rounded d-flex justify-content-center align-items-center artboxsty'
                        onClick={() => setNitrato(!nitrato)}>
                        Nitrato
                        {
                            nitrato ?
                                <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='sm' />
                                :
                                <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='sm' />
                        }

                    </div>
                </div>

                {
                    nitrato &&

                    <div className='row mb-5'>
                        <div className='col-10 col-lg-8 m-auto border px-2 py-2 rounded'>
                            <h4 className='fw-bold '>
                                Nitrato
                            </h4>
                            <div className='row mb-4'>
                                <p className='col-12 col-lg-8 '>
                                    El nitrato es un compuesto que ayuda a mejorar la disponibilidad del óxido nítrico en el cuerpo,
                                    el cual participa en regulación de la presión arterial y el flujo sanguíneo, la respiración
                                    mitocondrial, la contracción muscular y la función inmunológica.
                                    Naturalmente podemos encontrarlo en betarraga, algunas frutas y carnes procesadas, pero el
                                    alimento más destacado es la raíz de betarraga.
                                </p>
                                <div className='col-12 col-lg-4 d-flex rounded justify-content-center'>
                                    {/* <img className='w-75 rounded' src={Img5} alt='nitrato betarraga' /> */}
                                </div>
                            </div>
                            {/* Creatina - efectos */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setNitrato1(!nitrato1)}>
                                    <b>Efectos</b>
                                    {
                                        nitrato1 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    nitrato1 &&
                                    <div>
                                        <p>
                                            El nitrato aumenta el nivel óxido nítrico en el organismo, el cual juega un rol importante
                                            en la regulación de la presión sanguínea y contracción muscular. En consecuencia, genera un
                                            aumento del flujo sanguíneo, oxigenación muscular, aumentando la capacidad al hacer ejercicio
                                            y el rendimiento.
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* Creatina - cuando suplementar */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setNitrato2(!nitrato2)}>
                                    <b>Cuando suplementar</b>
                                    {
                                        nitrato2 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    nitrato2 &&
                                    <div>
                                        <ul className=''>
                                            <li>
                                                Nos podemos beneficiar si realizamos ejercicios de resistencia que vayan entre 4-30 minutos,
                                                como correr o andar en bicicleta.
                                            </li>
                                            <li>
                                                Para apoyar el entrenamiento aeróbico.
                                            </li>
                                            <li>
                                                Ejercicios intermitentes de alta intensidad donde hayan sprints de corta duración como el fútbol, rugby.
                                            </li>
                                            <li>
                                                En la exposición a condiciones hipóxicas, o con poco oxígeno, como entrenamiento de altura o montañismo.
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            {/* Creatina - Recomendaciones al suplementar */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setNitrato3(!nitrato3)}>
                                    <b>Recomendaciones al suplementar</b>
                                    {
                                        nitrato3 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    nitrato3 &&
                                    <div>
                                        <p className=''>
                                            Además de las fuentes dietéticas como las verduras ricas en nitratos, también se comercializan
                                            una gran cantidad de suplementos a base de remolacha para atletas, incluidos concentrados de jugo,
                                            geles y polvos.
                                        </p>
                                        <p className=''>
                                            En este caso podemos hacer una suplementación aguda, es decir, antes del ejercicio en cuestión
                                            y obtener resultados inmediatos, no como otros suplementos donde nos demoramos semanas en aumentar
                                            los niveles basales.
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* Creatina - Efectos secundarios */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setNitrato4(!nitrato4)}>
                                    <b>Efectos secundarios</b>
                                    {
                                        nitrato4 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    nitrato4 &&
                                    <div>
                                        <p>
                                            El jugo de betarraga concentrado puede causar molestias gastrointestinales, así que siempre
                                            debemos probarlo primero en el entrenamiento antes de aplicarlo en alguna competencia.
                                        </p>
                                        <p className=''>
                                            Puede causar un color rosado en la orina y en las heces, esto es temporal e inofensivo
                                            así que no hay que preocuparse.
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* Creatina - Consideraciones */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setNitrato5(!nitrato5)}>
                                    <b>Consideraciones</b>
                                    {
                                        nitrato5 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    nitrato5 &&
                                    <div>
                                        <p>
                                            El uso erróneo de este suplemento puede causar intoxicación, por lo que si no se cuenta con
                                            asesoría profesional para consumirlo, es más seguro utilizar fuentes naturales como verduras.
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }

                {/* CAFEINA */}

                <div className='row mb-3 pointer'>
                    <div className='col-10 col-lg-8 m-auto rounded d-flex justify-content-center align-items-center artboxsty'
                        onClick={() => setCafeina(!cafeina)}>
                        Cafeína
                        {
                            cafeina ?
                                <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='sm' />
                                :
                                <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='sm' />
                        }

                    </div>
                </div>

                {
                    cafeina &&

                    <div className='row mb-5'>
                        <div className='col-10 col-lg-8 m-auto border px-2 py-2 rounded'>
                            <h4 className='fw-bold '>
                                Cafeína
                            </h4>
                            <div className='row mb-4'>
                                <p className='col-12 col-lg-8 '>
                                    La cafeína es una sustancia que se encuentra de forma natural en las hojas, los frijoles y los
                                    frutos de una variedad de plantas, siendo el café la fuente dietética más común. También se encuentra
                                    presente en el té, las bebidas de cola, las bebidas energéticas, el chocolate y en suplementos
                                    deportivos especializados.
                                </p>
                                <div className='col-12 col-lg-4 d-flex rounded justify-content-center'>
                                    {/* <img className='w-75 rounded' src={Img6} alt='cafeina' /> */}
                                </div>
                            </div>
                            {/* Creatina - efectos */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setCafeina1(!cafeina1)}>
                                    <b>Efectos</b>
                                    {
                                        cafeina1 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    cafeina1 &&
                                    <div>
                                        <p>
                                            Es un estimulante natural, que ejerce un efecto estimulador en los músculos, lo que se vuelve
                                            beneficioso al hacer deporte ya que activa el sistema nervioso disminuye la percepción del esfuerzo,
                                            disminuye el dolor y mejora el rendimiento.
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* Creatina - cuando suplementar */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setCafeina2(!cafeina2)}>
                                    <b>Cuando suplementar</b>
                                    {
                                        cafeina2 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    cafeina2 &&
                                    <div>
                                        <ul className=''>
                                            <li>
                                                Deportes de resistencia sobre 60 minutos como ciclismo.
                                            </li>
                                            <li>
                                                Deportes de equipo como fútbol o rugby.
                                            </li>
                                            <li>
                                                Deportes breves, sostenidos y de alta intensidad como el remo.
                                            </li>
                                            <li>
                                                Esfuerzos únicos que impliquen fuerza o potencia como levantamiento de pesas.
                                            </li>
                                            <li>
                                                Antes de entrenar si se siente fatigado.
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            {/* Creatina - Recomendaciones al suplementar */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setCafeina3(!cafeina3)}>
                                    <b>Recomendaciones al suplementar</b>
                                    {
                                        cafeina3 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    cafeina3 &&
                                    <div>
                                        <p className=''>
                                            Existen diversos protocolos de ingesta de cafeína para mejorar el rendimiento pudiendo
                                            administrarse antes de la sesión de ejercicio, distribuida durante el ejercicio o al final
                                            del ejercicio cuando la fatiga comienza a ocurrir.
                                        </p>
                                        <p className=''>
                                            Respecto al tiempo de consumo, los estudios ahora muestran que los beneficios de la cafeína ocurren poco
                                            después de la ingesta y no dependen del logro de las concentraciones máximas de cafeína en la sangre que
                                            generalmente ocurren alrededor de los 60 minutos, por lo cual puede ser igual de efectiva tomarla antes o
                                            durante el entrenamiento.
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* Creatina - Efectos secundarios */}
                            <div className='border rounded  px-2 py-2 mb-2'>
                                <div className='pointer d-flex justify-content-between justify-content-lg-start'
                                    onClick={() => setCafeina4(!cafeina4)}>
                                    <b>Consideraciones</b>
                                    {
                                        cafeina4 ?
                                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg' />
                                            :
                                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg' />
                                    }
                                </div>
                                {
                                    cafeina4 &&
                                    <div>
                                        <p className=''>
                                            El hecho de abstenerse de tomar cafeína días antes de la competición, no potencia el efecto de la cafeína.
                                        </p>
                                        <p>
                                            Una dosis alta puede tener efectos secundarios como malestar estomacal, falta de concentración,
                                            confusión, ansiedad y trastornos del sueño.
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }

                <div className='row'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <p>
                            <b>Bibliografía</b>
                        </p>
                        <ul>
                            <li>
                                Australian Institute of Sport.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='' />
        </>
    )
}
