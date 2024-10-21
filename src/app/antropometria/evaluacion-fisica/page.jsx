import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './style.css';
import Img1 from '../../../media/img_fondoBlanco.png';
import Img2 from '../../../media/img_comp_corp_porc.png';
import Img3 from '../../../media/img_comp_corp_kg.png';
import Img4 from '../../../media/img_somatocarta.png';
import Img5 from '../../../media/img_pliegues.png';
import Img6 from '../../../media/img_suma_pliegues.png';
import Img7 from '../../../media/img_perimetros.png';
import Img8 from '../../../media/img_imc_2.png';
import Img9 from '../../../media/img_ffmi.png';
import Img10 from '../../../media/img_indice_cormico.png';

export default function EvaluacionFisica() {
    return (
        <div className='d-flex flex-column mb-5'>
            <h2 className='h1 m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 mb-5'>Evaluación física</h2>

            <div className=' col-10 col-lg-9 d-flex flex-column-reverse flex-md-row-reverse justify-content-between m-auto mb-5'>
                <div className='col-12 col-md-5 col-lg-4 mb-3 mb-md-0 d-flex justify-content-center'>
                    <iframe height="250px" className='col-12' style={{ borderRadius: '20px' }}
                        src="https://www.youtube.com/embed/w5tOpQVNeOQ">
                    </iframe>
                </div>
                <div className='col-12 col-md-6 col-lg-7 d-flex flex-column justify-content-center '>
                    <h3 className=''>¿En qué consiste la evaluación?</h3>
                    <p className='' style={{ textAlign: 'justify' }}>
                        Durante la evaluación física el nutricionista realizará la toma de mediciones
                        corporales como lo son los pliegues, perímetros, diametros óseos, peso y talla,
                        todo según el estandar internacional ISAK I. Esta evaluación tiene una duración de
                        10 minutos.
                    </p>
                    <p>
                        Al finalizar la evaluación se le entrega al usuario un informe con los resultados
                        de sus mediciones, los cuales incluyen composición corporal (masa muscular y grasa corporal),
                        indicadores de uso deportivo como somatotipo, modelo phantom, indicadores de proporcionalidad,
                        entre otros.
                    </p>
                </div>
            </div>

            <div className='row d-flex flex-column'>
                <div className='col-10 col-lg-9 m-auto'>
                    <div className='row' data-aos="fade-up">

                        {/* Intro resultados mediciones */}
                        <div className='row mb-3 d-flex justify-content-center mx-0 px-0'>
                            <h4 className='h3 mb-4'>Resultados mediciones</h4>
                            <p className='psty'>
                                La evaluación física o antropométrica nos entrega como resultado una gran variedad de
                                indicadores de interés deportivo y de salud, como lo son los componentes corporales,
                                somatotipo, índice de masa corporal, entre otros
                                indicadores físicos.
                            </p>
                        </div>

                        {/* Componentes corporales y somatotipo */}
                        <div className='row d-flex justify-content-around mb-lg-3 mb-lg-5 mx-0'>

                            <div className='col-12  col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Composición corporal %
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <Image src={Img1} alt='...' className='col-10 col-lg-12' style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className=' text-primary'>
                                            Indicador que determina el porcentaje de masa muscular y grasa corporal
                                            del deportista.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <Image src={Img2} alt='Composición corporal' className='col-10 col-lg-12'
                                            style={{ objectFit: 'contain', height: '350px' }} ></Image>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Composición corporal KG
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <Image src={Img1} alt='...' className='col-10 col-lg-12' style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className=' text-primary'>
                                            Indicador que determina los kg de masa muscular y grasa corporal
                                            del deportista.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <Image src={Img3} alt='Composición corporal' className='col-10 col-lg-12'
                                            style={{ objectFit: 'contain', height: '350px' }} ></Image>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Somatotipo
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <Image src={Img1} alt='...' className='col-10 col-lg-12' style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className=' text-primary'>
                                            Indicador que grafica el cuerpo del deportista en base a la muscularidad,
                                            adiposidad y linealidad. <br /> Permite comparar el somatotipo del usuario con el
                                            de deportistas de mayor rendimiento.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <Image src={Img4} alt='Composición corporal' className='col-10 col-lg-12'
                                            style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pliegues, perimetros, sumatoria 6p */}
                        <div className='row d-flex justify-content-around mb-lg-3 mb-lg-5 mx-0'>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Pliegues cutáneos
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <Image src={Img1} alt='...' className='col-10 col-lg-12' style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className=' text-primary'>
                                            Indicador correspondiente a los pliegues sub cutaneos realizados en la evaluación
                                            física. Nos entregan una visión del de grasa corporal del usuario. Además, nos permite
                                            determinar el porcentaje de grasa corporal.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <Image src={Img5} alt='Composición corporal' className='col-10 col-lg-12'
                                            style={{ objectFit: 'contain', height: '350px' }} ></Image>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Perímetros corporales
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <Image src={Img1} alt='...' className='col-10 col-lg-12' style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className=' text-primary'>
                                            Correspondientes a brazo, cintura, cadera, muslo y pierna. Los perímetros son corregidos
                                            en base a la grasa sub cutánea, para así poder obtener el nivel real de masa
                                            muscular de cada medición.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <Image src={Img7} alt='Composición corporal' className='col-10 col-lg-12'
                                            style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Sumatoria 6 pliegues
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <Image src={Img1} alt='...' className='col-10 col-lg-12' style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className=' text-primary'>
                                            Indicador que nos entrega otra visión del nivel de grasa corporal del usuario.
                                            Implementado mayormente en deportes colectivos como fútbol o rugby.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <Image src={Img6} alt='Composición corporal' className='col-10 col-lg-12'
                                            style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* IMC, FFMI, Indice cormico */}
                        <div className='row d-flex justify-content-around mb-3 mx-0'>

                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Índice de masa corporal
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <Image src={Img1} alt='...' className='col-10 col-lg-12' style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className=' text-primary'>
                                            Indicador de proporcionalidad corporal. Puede ser utilizado para
                                            determinar el estado nutricional del usuario, sin embargo, por su poca sensibilidad puede
                                            inducir al error, por lo que es más recomendado utilizar otros indicadores como
                                            grasa corporal o circunferencia de cintura para determinar estado nutricional.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <Image src={Img8} alt='Composición corporal' className='col-10 col-lg-12'
                                            style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    índice de masa magra
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <Image src={Img1} alt='...' className='col-10 col-lg-12' style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className=' text-primary'>
                                            índice de gran utilidad para evaluar el nivel de masa muscular del individuo
                                            y el potencial de crecimiento de cada usuario. Valores sobre 25 en hombres y 22
                                            en mujeres se consideran como no alcanzables naturalmente,
                                            indicando un posible uso de anabólicos.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <Image src={Img9} alt='Composición corporal' className='col-10 col-lg-12'
                                            style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    índice cormico
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <Image src={Img1} alt='...' className='col-10 col-lg-12' style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className=' text-primary'>
                                            índice que evalúa la proporcionalidad corporal del usuario. Valores altos indican
                                            un tronco proporcionalmente más grande, lo cual supone una ventaja competitiva
                                            para deportes como halterofilia, lucha, natación, entre otros.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <Image src={Img10} alt='Composición corporal' className='col-10 col-lg-12'
                                            style={{ objectFit: 'contain', height: '350px' }}></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}