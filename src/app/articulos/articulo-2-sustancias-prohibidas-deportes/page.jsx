import React from 'react';
// import Img0 from '../../imgs/img_suples4.png';
// import Img1 from '../../imgs/img_sello1.png';
// import Img2 from '../../imgs/img_sello2.png';
// import Img3 from '../../imgs/img_sello3.png';

export default function Articulo2() {
    return (
        <>
            <div className='' />

            <div className='container-fluid'>

                {/* Titulo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h2 className=' fw-bold display-6 '>
                            Sustancias prohibidas en los deportes y el riesgo de contaminación en los suplementos.
                        </h2>
                    </div>
                </div>

                {/* Parrafo con imagen */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <div className='row'>
                            <div className='col-12 col-lg-7 '>
                                <p className=''>
                                    En el mundo de los suplementos deportivos existen ciertos riesgos y prohibiciones
                                    que debemos considerar para poder suplementarnos de forma segura.
                                </p>
                                <p className=''>
                                    Principalmente, debemos considerar que los suplementos que adquirimos no siempre
                                    pueden ser lo que esperamos, ya que pueden estar mal etiquetados o contaminados con
                                    sustancias ilícitas. En el mundo, pesar de que existen organismos que se encargan de
                                    regular estos aspectos, la realidad es que los suplementos dietéticos, a diferencia
                                    de medicamentos y drogas, tienen una regulación y control menos estricto para su
                                    comercialización, terminando por definirse según la regulación establecida de cada país.
                                </p>
                            </div>
                            <div className='col-12 col-lg-5 d-flex justify-content-end'>
                                {/* <img src={Img0} className='imgsty2 rounded'></img> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Parrafo solo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h4 className=''>
                            Sustancias prohibidas
                        </h4>
                        <p className=''>
                            Son aquellas sustancias ergogénicas prohibidas en los deportes, y que pueden
                            arrojar un doping positivo, dejando al deportista fuera de competencia.
                        </p>
                        <p className='bg-quaternary rounded text-primary p-4 '>
                            Las sustancias prohibidas están definidas como tal debido a que representar
                            un riesgo para la salud, o violan el espíritu deportivo, el cual es definido por
                            la WADA como  "la búsqueda por medios éticos de la excelencia humana a través del
                            perfeccionamiento del talento natural de cada deportista".
                        </p>
                        <p className=''>
                            El uso de sustancias y suplementos está regulado por organismos internacionales
                            como el Comité Olímpico Internacional (COI) y la Agencia Mundial Antidopaje (WADA).
                            La WADA establece en el Código Mundial Antidopaje las políticas antidopaje junto con
                            la Lista anual de las sustancias prohibidas en el deporte, en la cual encontramos las
                            siguientes sustancias:
                        </p>

                        <ol className=''><b>Sustancias prohibidas en todo momento:</b>
                            <li>
                                Agentes anabolizantes (esteroides anabólicos androgénicos y otros agentes anabolizantes)
                            </li>
                            <li>
                                Hormonas peptídicas, factores de crecimiento, sustancias afines y miméticos
                                (Eritropoyetinas, agentes que afectan la eritropoyesis, hormonas peptídicas y sus
                                factores de liberación, factores de crecimiento y moouladores de factores de crecimiento).
                            </li>
                            <li>
                                Agonistas Beta-2
                            </li>
                            <li>
                                Moduladores hormonales y metabólicos (inhibidores de la aromatasa,
                                sustancias anti-estrogenicas y moduladores selectivos de los receptores
                                de estrógeno (SERMS), moduladores metabólicos, agentes que previenen la
                                activación del receptor IIB de la activina).
                            </li>
                            <li>
                                Diuréticos y agentes enmascarantes.
                            </li>
                        </ol>


                        <ol className=''><b>Sustancias prohibidas en competición:</b>
                            <li>
                                Estimulantes.
                            </li>
                            <li>
                                Narcóticos.
                            </li>
                            <li>
                                Cannabinoides.
                            </li>
                            <li>
                                Glucocorticoides.
                            </li>
                        </ol>

                        <h4 className='mt-5 '>
                            Contaminación en suplementos deportivos
                        </h4>
                        <p className=''>
                            La contaminación de suplementos deportivos puede causar varios riesgos para la salud,
                            así como la posibilidad de resultar positivo en las pruebas antidoping debido a la presencia
                            de sustancias prohibidas en los suplementos deportivos, lo que implicaría una suspensión
                            temporal o definitiva en el ámbito competitivo.
                        </p>
                        <p className=''>
                            En 2007 en el Reino Unido, el HFL Sport Science (un laboratorio especializado de la
                            Agencia Mundial Antidopaje), analizó 58 suplementos comercializados en EE. UU, y en
                            el estudio se observó que 25% de los suplementos estaban contaminados con esteroides
                            prohibidos y 11% estaban contaminados con estimulantes prohibido. En 2008, HFL continuó
                            con el análisis de 152 productos comercializados en Reino Unido y observó que más del
                            10% estaba contaminado con esteroides y/o estimulantes.
                        </p>
                        <h4 className='mt-5 '>
                            Regulación de los suplementos en Chile
                        </h4>
                        <p className=''>
                            En nuestro país no se venden todos los suplementos que se comercializan en el
                            exterior, debido a la los estándares establecidos por la reglamentación chilena
                            que crean un filtro en el ingreso al país. En Chile es el ministerio de salud el
                            que determina los ingredientes permitidos en base al RSA. Mientras que son los SEREMIS
                            de salud los entes encargados en fiscalizar que se cumpla la normativa.
                        </p>
                        <p className='bg-quaternary rounded text-primary p-4 '>
                            <b>RSA articulo 535:</b> Los ingredientes dietarios para suplementos alimentarios
                            deberán cumplir con la identidad y pureza indicada en las especificaciones
                            de calidad e inocuidad.
                        </p>
                        <p className='bg-quaternary rounded text-primary p-4 '>
                            <b>RSA articulo 539:</b> En ellos no se podrá incorporar, solos ni en asociación,
                            hormonas o compuestos con efecto anabolizante. Tampoco se les podrá incorporar
                            sustancias con acción estimulante sobre el sistema nervioso, salvo aquellas que
                            estén expresamente autorizadas y dentro de los límites permitidos para este tipo
                            de alimentos en este Reglamento.
                        </p>
                        <h4 className='mt-5 '>
                            Recomendaciones para una suplementación segura
                        </h4>
                        <p className=''>
                            Para asegurar la pureza y seguridad de los suplementos que consumimos, siempre es bueno tener en cuenta los siguientes puntos:
                        </p>

                        <ul className=''>
                            <li>
                                Buscar marcas y productos con experiencia y sellos de calidad nacional
                                e internacional: Algunos sellos de calidad son “Informed-Sport”, “Informed-Choice”,
                                “BSCG (Banned Subtances Control Group)” o “Cologne List”.
                                <div className='row d-flex justify-content-around my-3'>
                                    {/* <img className='col-3' src={Img1}></img> */}
                                    {/* <img className='col-3' src={Img2}></img> */}
                                    {/* <img className='col-3' src={Img3}></img> */}


                                </div>
                            </li>
                            <li>
                                Usar productos y compuestos con respaldo científico: Generalmente los
                                suplementos de macronutrientes y micronutrientes de mayor pureza no presentan contaminantes.
                            </li>
                            <li>
                                Adquirir o comprar en lugares seguros.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <p>
                            <b>Bibliografía</b>
                        </p>
                        <ul>
                            <li>
                                Agencia Mundial Anti Dopaje (WADA) - Código mundial antidopaje. La lista de prohibiciones.
                            </li>
                            <li>
                                Comisión Nacional Anti Dopaje - Suplementos y sus riesgos de contaminación.
                            </li>
                            <li>
                                Reglamento Sanitario de los Alimentos (RSA).
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='' />
        </>
    )
}