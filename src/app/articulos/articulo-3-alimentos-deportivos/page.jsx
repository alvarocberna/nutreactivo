import React from 'react';
// import Img1 from '../../imgs/img_scoop_prote.png';
// import Img2 from '../../imgs/img_alimentos_deportivos.jpg';
// import Img3 from '../../imgs/img_ganador_peso.png';
// import Img4 from '../../imgs/img_electrolitos.png';

export default function Articulo3() {
    return (
        <>
            <div className='' />

            <div className='container-fluid'>

                {/* Titulo - Alimentos deportios */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h2 className=' fw-bold display-6 '>
                            Alimentos deportivos
                        </h2>
                    </div>
                </div>

                {/* Introducción */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <div className='row'>
                            <div className='col-12 col-lg-12 '>
                                <p className=''>
                                    Los alimentos deportivos son una alternativa facilitadora para todos los deportistas
                                    al momento de entrenar o competir, ya que permiten abastecer al cuerpo de energía y
                                    electrolitos con pequeñas dosis de alimentos, que de otra forma requerirán grandes
                                    cargas de comida.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Proteína */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h4 className='fw-bold '>
                            1 - Suplementos de proteína aislada
                        </h4>
                        <div className='row d-flex flex-column-reverse flex-lg-row mb-3 mb-lg-0'>
                            <div className='col-12 col-lg-7  d-flex flex-column align-items-center'>
                                <p className=' mb-4'>
                                    Aunque se pueden lograr los objetivos de proteína diarios fácilmente a través de la dieta,
                                    los alimentos proteicos facilitan el poder consumir fácilmente las cargas de proteína requeridas
                                    en momentos críticos, como después de un entrenamiento intenso para así disminuir el catabolismo
                                    muscular.
                                </p>
                                <div className='btn btn-primary d-flex justify-content-center align-items-center ' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <p className=' mx-0 my-0'>¿Cuando consumirlos?</p>
                                </div>
                            </div>
                            <div className='col-12 col-lg-5 d-flex flex-column align-items-end'>
                                {/* <img src={Img1} className='imgsty2 mb-1 rounded'></img> */}
                            </div>
                        </div>
                        <p className=''>
                            <b>1.1 - Suero de leche</b>
                        </p>
                        <p className=''>
                            Es una proteína de alto valor biológico, siendo la proteína más efectiva por ser alta en aminoácidos
                            de cadena ramificada, como la leucina.
                        </p>
                        <ul className=''>
                            En el mercado se pueden encontrar tres tipos:
                            <li>
                                <b>Concentrado:</b> 70-80% de proteína con cantidades pequeñas de carbohidratos y grasas,
                                puede presentar una pequeña cantidad de lactosa.
                            </li>
                            <li>
                                <b>Aislado:</b> presenta alrededor de un 90% de proteína.
                            </li>
                            <li>
                                <b>Hidrolizado</b> presenta péptidos de cadena corta o “predigeridos” que la dan una absorción más rápida.
                            </li>
                        </ul>
                        <p className=''>
                            <b>1.2 - Caseína</b>
                        </p>
                        <p className=''>
                            Es una proteína de alto valor biológico, constituye el 80% de la proteína láctea.
                            Se caracterisa por tener una lenta velocidad de digestión y absorción, por este motivo
                            a menudo se recomienda como una alternativa en la alimentación nocturna, para lograr una
                            liberación de proteína prolongada y sostenida durante la noche.
                            Puede comprarse como caseína, caseinato de calcio o hidrolizado de caseína.
                        </p>
                        <p className=''>
                            <b>1.3 - Soja</b>
                        </p>
                        <p className=''>
                            Proteína de origen vegetal de alto valor biológico y de fácil digestión, suele encontrarse
                            como concentrado o aislado de soja. Es más barata que el
                            suero de leche, y por lo mismo suele utilizarse como ingrediente en barras de proteína. Una
                            desventaja de esta proteína es que tiene un nivel inferior del aminoácido leucina en relación
                            a otras proteínas como el suero de leche, sin embargo, puede solucionarse mediante la fortificación.

                        </p>
                        <p className=''>
                            <b>1.4 - Albumina de huevo (clara de huevo)</b>
                        </p>
                        <p className=''>
                            Proteína de alto valor biológico, con ausencia de carbohidratos y grasas. Solía ser
                            uno de los suplementos proteicos más populares hasta que fue reemplazado por proteínas
                            lácteas más económicas. A menudo se puede encontrar en supermercados como ingrediente para
                            añadirlo a otros alimentos.
                        </p>
                    </div>
                </div>

                {/* Ricos en carbohidratos */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h4 className='fw-bold '>2 - Aportadores de carbohidratos</h4>
                        <div className='row d-flex flex-column-reverse flex-lg-row mb-3 mb-lg-0'>
                            <div className='col-12 col-lg-7 d-flex flex-column align-items-center '>
                                <p className=''>
                                    Este tipo de alimentos tienen una gran utilidad para facilitar el aporte de grandes
                                    cantidades de energpía de fácil absorción a los deportistas durante momentos importantes,
                                    como entrenamientos y competencias, al mismo tiempo que son fáciles de transportar y consumir.
                                </p>
                                <ul className='w-100 mb-4  '>
                                    <b>Beneficios:</b>
                                    <li>
                                        Provisión de combustible para el músculo.
                                    </li>
                                    <li>
                                        Detección bucal para el cerebro y SNC que retrasa la fatiga.
                                    </li>
                                </ul>
                                <div className='btn btn-primary d-flex justify-content-center align-items-center ' data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                    <p className=' mx-0 my-0'>¿Cuando tomarla?</p>
                                </div>
                            </div>
                            <div className='col-12 col-lg-5 d-flex flex-column align-items-end'>
                                {/* <img src={Img2} className='imgsty2 mb-1 rounded'></img> */}
                            </div>
                        </div>
                        <p className=''>
                            <b>2.1 - Bebidas deportivas</b>
                        </p>
                        <p className=''>
                            Las bebidas deportivas están diseñadas para que los atletas se rehidraten, recarguen energía
                            y electrolitos simultáneamente durante y después del ejercicio. En promedio las bebidas deportivas
                            aportan entre 4 a 8 gramos de carbohidratos por 100 ml.
                        </p>
                        <ul className=''>
                            <b>Cuando usarlos:</b>
                            <li>
                                Antes del ejercicio para mejorar el estado de líquidos y combustible previo al entrenamiento.
                            </li>
                            <li>
                                Durante el ejercicio para promover la reducción de la percepción del esfuerzo durante el ejercicio.
                            </li>
                            <li>
                                Después del ejercicio para contribuir a la recarga rápida de combustible y electrolitos.
                            </li>
                        </ul>
                        <p className=''>
                            <b>2.2 - Geles deportivos</b>
                        </p>
                        <p className=''>
                            Los geles deportivos son alimentos que brindan una fuente compacta y portátil de carbohidratos,
                            son de fácil consumo y digestión. Estos permiten mejorar el rendimiento deportivo, ya que suministran
                            combustible para el músculo y retrasan la fatiga a nivel de sistema nervioso central. Un sobre de gel
                            deportivo típico aporta 20 a 30 gramos de carbohidratos y entre 80 a 120 calorías.
                        </p>
                        <p className=''>
                            A diferencia de las bebidas deportivas, los geles son más concentrados en carbohidratos
                            para proporcionar una mayor cantidad de energía en una menor porción, por lo que es recomendado
                            consumirlos acompañados de líquido, para así reducir el riesgo de trastornos gastrointestinales.
                        </p>
                        <p className=''>
                            <b>2.3 - Barras deportivas</b>
                        </p>
                        <p className=''>
                            Las formas sólidas de carbohidratos también se pueden tolerar bien y pueden proporcionar un
                            combustible rápido para el músculo. Las barritas deportivas/energéticas ofrecen la ventaja de
                            ser una fuente de combustible más compacta y conveniente para escenarios en los que el atleta
                            necesita transportar su propio soporte nutricional, siendo muy útiles en situaciones que impidan
                            la ingesta de alimentos completos, por ejemplo, durante los viajes.
                        </p>
                        <p className=''>
                            <b>2.4 - Confitería deportiva</b>
                        </p>
                        <p className=''>
                            Los dulces deportivos, a menudo llamados “masticables deportivos”, proporcionan una fuente
                            altamente concentrada de carbohidratos en forma de gominolas masticables que se digieren rápidamente.
                            El contenido típico de carbohidratos varía de 4 a 6 gramos de carbohidratos por pieza.
                        </p>
                        <div className='bg-quaternary rounded text-primary p-4 '>
                            Los alimentos deportivos ricos en carbohidratos suelen tener asociadas las siguientes
                            consideraciones y preocupaciones:<br />
                            <ul>
                                <li>
                                    Aportes innecesarios de energía si están mal planificados.
                                </li>
                                <li>
                                    Malestar gastrointestinal, acentuado por una mala hidratación.
                                </li>
                                <li>
                                    Erosión dental si no se toman los cuidados necesarios.
                                </li>
                                <li>
                                    Interferencia con estrategias de adaptación fisiológica como la periodización.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/*Suplementos de macronutrientes mixtos */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h4 className='fw-bold '>3 - Suplementos de macronutrientes mixtos</h4>
                        <div className='row d-flex flex-column-reverse flex-lg-row mb-3 mb-lg-0'>
                            <div className='col-12 col-lg-7 d-flex flex-column align-items-center '>
                                <p className=''>
                                    Estos suplementos son alimentos deportivos que poseen cantidades variables de proteínas
                                    y carbohidratos en un formato compacto y práctico de consumir, haciéndolos ideales para
                                    usar en situaciones en las que sea poco práctico comer alimentos más complejos o exista
                                    poco apetito.
                                </p>
                                <p className=''>
                                    Este tipo de suplementos los podemos hallar en el mercado, siendo muy conocidos en
                                    su formato en polvo como los famosos ganadores de pesos.
                                </p>
                                <div className='btn btn-primary d-flex justify-content-center align-items-center '
                                    data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    <p className=' mx-0 my-0'>¿Cuando tomarla?</p>
                                </div>
                            </div>
                            <div className='col-12 col-lg-5 d-flex flex-column align-items-end'>
                                {/* <img src={Img3} className='imgsty2 mb-1 rounded'></img> */}
                            </div>
                        </div>
                        <div className='bg-quaternary rounded text-primary p-4 '>
                            <b>Consideraciones</b>
                            <ul>
                                <li>
                                    El uso excesivo de estos productos altos en energía, pero baja saciedad puede generar un exceso calórico si está mal regulado.
                                </li>
                                <li>
                                    Puede ocasionar malestar gastrointestinal.
                                </li>
                                <li>
                                    Existe riesgo de alergias en caso de contener frutos secos, leche o gluten.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/*Suplementos de electrolitos */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h4 className='fw-bold '>4 - Suplementos de electrolitos</h4>
                        <div className='row d-flex flex-column-reverse flex-lg-row mb-3 mb-lg-0'>
                            <div className='col-12 col-lg-7 d-flex flex-column align-items-center '>
                                <p className=''>
                                    Estos suplementos se encuentran en polvos, tabletas o productos listos
                                    para beber diseñados para reemplazar los líquidos y electrolitos (en particular, sodio y
                                    potasio) perdidos a través del sudor u otros fluidos.
                                </p>
                                <p className=''>
                                    La diferencia con las típicas bebidas deportivas es que los suplementos de
                                    electrolitos son una alternativa para reemplazar grandes pérdidas de electrolitos
                                    durante y después del ejercicio con un enfoque más agresivo.
                                </p>
                                <p className=''>
                                    Son una manera para prevenir problemas como la hiponatremia, que se da por altas
                                    ingestas de líquido, lo cual causa una baja en la concentración de sodio en la sangre,
                                    y que en casos graves puede generar síntomas como confusión, náuseas,
                                    dolores de cabeza y el desenlace potencialmente fatal de edema cerebral.
                                </p>
                                <div className='btn btn-primary d-flex justify-content-center align-items-center '
                                    data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                    <p className=' mx-0 my-0'>¿Cuando tomarla?</p>
                                </div>
                            </div>
                            <div className='col-12 col-lg-5 d-flex flex-column align-items-end'>
                                {/* <img src={Img4} className='imgsty2 mb-1 rounded'></img> */}
                            </div>
                        </div>
                    </div>
                </div>

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

            {/* Modal 1 */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">¿Cuando es recomendado consumir
                                suplementos de proteína aislada?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className=''>
                                <li>
                                    Cuando la entrega de proteínas es una prioridad, como en el período inmediatamente
                                    posterior a los entrenamientos.
                                </li>
                                <li>
                                    Como un medio para fortalecer las comidas bajas en proteínas.
                                </li>
                                <li>
                                    Como alternativa a las comidas voluminosas cuando el apetito es escaso.
                                </li>
                                <li>
                                    Cuando las instalaciones, el tiempo o el contexto no permiten para almacenar o preparar una
                                    forma alimenticia de proteína.
                                </li>
                                <li>
                                    Durante programas especializados de pérdida de peso donde se requiere una mayor
                                    ingesta de proteínas para optimizar la retención/aumento de la masa magra.
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal 2 */}
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">¿Cuando es recomendado consumir
                                alimentos deportivos ricos en carbohidratos?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className=''>
                                <li>
                                    <b>Ejercicios breves de menos de 45 min:</b> es innecesario consumir carbohidratos durante la actividad.
                                </li>
                                <li>
                                    <b>Ejercicio intenso de 45 a 75 min de duración:</b> se recomienda consumir pequeñas cantidades,
                                    incluido enjuague bucal con carbohidratos.
                                </li>
                                <li>
                                    <b>Ejercicios de resistencia de 1 a 3 horas:</b> Se recomienda consumir desde 30 a 90 gr de carbohidratos
                                    por hora.
                                </li>

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal 3 */}
            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">¿Cuando es recomendado consumir
                                suplementos con macronutrientes mixtos?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className=''>
                                <li>
                                    Cuando se requieran refrigerios antes del ejercicio si el atleta experimenta nerviosismo
                                    y pérdida de apetito previo al evento competitivo.
                                </li>
                                <li>
                                    Si el atleta necesita comer inmediatamente antes de una sesión de entrenamiento,
                                    como por ejemplo antes de un entrenamiento temprano en la mañana.
                                </li>
                                <li>
                                    Durante ejercicios prolongados, como en eventos de ultra resistencia.
                                </li>
                                <li>
                                    Cuando no hayas alimentos más completos disponibles o no sea práctico consumirlos,
                                    y se requiera de una fuente conveniente de proteína y energía.
                                </li>
                                <li>
                                    Cuando se requiera una fuente compacta y portátil de energía.
                                </li>
                                <li>
                                    Cuando se busque manipular la masa corporal y el contenido intestinal en los días anteriores
                                    a una competencia.
                                </li>

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal 4 */}
            <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">¿Cuando es recomendado consumir
                                suplementos de electrolitos?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className=''>
                                <li>
                                    Antes de ejercicios en ambientes calurosos.
                                </li>
                                <li>
                                    Para la prevención y el tratamiento de la deshidratación durante la diarrea y la gastroenteritis.
                                </li>
                                <li>
                                    En la restauración de déficits de líquidos moderados a grandes durante el ejercicio.
                                </li>

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='' />
        </>
    )
}
