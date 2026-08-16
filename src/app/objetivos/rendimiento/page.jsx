
import Image from "next/image";
import Link from "next/link";
import img1 from '../../../shared/media/img_halterofilia.jpg';
import img2 from '../../../shared/media/img_remo2.jpeg';
import img3 from '../../../shared/media/img_atletismo.jpeg';

export default function Rendimiento() {
    return (

        <div className='container-fluid'>

            {/* SECCION 1: TITULO */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex m-auto'>
                    <h2 className='h1'>
                        ¿Cómo trabajar el rendimiento en cada deporte?
                    </h2>
                </div>
            </div>

            {/* SECCION 1: DEPORTES DE ALTA INTENSIDAD */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex flex-column m-auto'>
                    <p className='h3 col-12 mb-3'>
                        Rendimiento en deportes de alta intensidad
                    </p>
                    <div className='col-12 d-flex flex-column flex-lg-row justify-content-evenly'>
                        <Image alt="..." src={img1} style={{ objectFit: 'cover', height: '350px' }} className='col-12 col-lg-4 mb-2 mb-md-0 rounded'></Image>
                        <div className='col-12 col-lg-7'>
                            <p className='psty' style={{ textAlign: 'justify' }}>
                                Al trabajar en deportes de alta intensidad y corta duración primero
                                debemos poner el foco en el <b>metabolismo energético</b> de este tipo de
                                actividades, las cuales dependen principalmente de la vía
                                anaeróbica. Para mejorar el rendimiento de cada sistema energético
                                podemos recurrir a la suplementación, para así abastecer las fuentes de
                                energía implicadas en el deporte y extender la utilización de estas vías.
                                Conoce más sobre estos sistemas energéticos
                                en el siguiente <Link href='/'>enlace</Link>.

                            </p>
                            <p className='psty' style={{ textAlign: 'justify' }}>
                                El segundo enfoque que debemos considerar es la <b>composición corporal</b>.
                                Muchos de estos deportes requieren realizar un desplazamiento del
                                cuerpo a alta velocidad (como 100 y 200m en atletismo), capacidad que se ve
                                beneficiada con un bajo nivel de grasa corporal. Por otro lado, en deportes
                                que se requiere desplazar objetos externos, como el caso de la halterofilia o
                                lanzamiento de bala, suele ser beneficioso tener un mayor centro de
                                gravedad, lo cual se relaciona directamente con un mayor nivel de grasa abdominal.
                                Sea cual sea el objetivo antropométrico, podemos implementar indicadores como
                                el porcentaje de grasa, somatotipo o sumatoria de pliegues para guiar nuestros
                                objetivos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECCION 2: DEPORTES MEDIANA RESISTENCIA */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex flex-column m-auto'>
                    <p className='h3 col-12 mb-3'>
                        Rendimiento en deportes de mediana resistencia
                    </p>
                    <div className='col-12 d-flex flex-column-reverse mb-2 mb-lg-0 flex-lg-row justify-content-evenly'>
                        <div className='col-12 col-lg-7'>
                            <p className='psty' style={{ textAlign: 'justify' }}>
                                En deportes de mediana intensidad, con una duración superior a 1 minuto y que pueda
                                durar varios minutos, como lo son las pruebas de 800 y 1500m del atletismo, remo y
                                natación, debemos poner el enfoque en
                                el <b>metabolismo energético</b> de este tipo de
                                actividades, las cuales dependen de las vías anaeróbicas y aeróbicas.
                                Para mejorar el rendimiento de cada vía y sustrato utilizado
                                podemos recurrir a la suplementación para abastecer las fuentes de
                                energía implicadas y extender la utilización de estas vías de energía.
                                Además, podemos implementar estrategias como el timing nutricional, para
                                repletar nuestras reservas de energía previo a la competencia.
                                Conoce más sobre estos sistemas energéticos
                                en el siguiente <Link href='/'>enlace</Link>.
                            </p>
                            <p className='psty' style={{ textAlign: 'justify' }}>
                                El segundo enfoque que debemos considerar es la <b>composición corporal</b>.
                                Estos deportes suelen favorecerse de ciertas características físicas específicas,
                                como un determinado nivel de grasa corporal o masa muscular. Para observar esto
                                podemos guiarnos de indicadores como el porcentaje de grasa corporal y el somatotipo
                                de cada deportista.
                            </p>
                        </div>
                        <Image src={img2} alt="..." style={{ objectFit: 'cover', height: '350px' }} className='col-12 col-lg-4 mb-2 mb-md-0 rounded'></Image>
                    </div>
                </div>
            </div>

            {/* SECCION 3: DEPORTES DE RESISTENCIA */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex flex-column m-auto'>
                    <p className='h3 col-12 mb-3'>
                        Rendimiento en deportes de resistencia
                    </p>
                    <div className='col-12 d-flex flex-column flex-lg-row justify-content-evenly'>
                        <Image src={img3} alt="..." style={{ objectFit: 'cover', height: '350px' }} className='col-12 col-lg-4 mb-2 mb-md-0 rounded'></Image>
                        <div className='col-12 col-lg-7'>
                            <p className='psty' style={{ textAlign: 'justify' }}>
                                En deportes de larga duración como lo son pruebas de 5 y 10K,
                                debemos poner el enfoque en
                                el <b>metabolismo energético</b> de este tipo de
                                actividades, las cuales dependen principalmente del metabolismo aeróbico, es decir,
                                la oxidación de las reservas de grasas y carbohidratos.
                                Para mejorar el rendimiento de cada vía y sustrato utilizado
                                podemos implementar periodos de carga nutricional,
                                repletando nuestras reservas de energía previo a la competencia.
                            </p>
                            <p className='psty' style={{ textAlign: 'justify' }}>
                                El segundo enfoque que debemos considerar es la <b>composición corporal</b>.
                                Estos deportes suelen favorecerse de ciertas características físicas específicas,
                                como un nivel de grasa corporal bajo, o una menor masa por unidad de altura.
                                Para observar esto
                                podemos guiarnos de indicadores como el porcentaje de grasa corporal y el somatotipo
                                de cada deportista.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}