
import React from 'react';
import Image from 'next/image';
import { InfoIndicadores } from './datos';
import './style.css';

function Indicador(props) {
    let titulo = props.titulo;
    let img = props.img;
    let cuerpo = props.cuerpo;
    let idInd = props.idInd;
    let targetInd = props.targetInd;
    let idBox = props.idBox;
    let targetBox = props.targetBox;
    return (
        <div className="accordion px-0 col-12 col-md-5 col-xl-3 mx-1 mb-3 mb-sm-5 rounded" style={{ position: 'relative' }} id={idBox}>
            <div className="accordion-item py-3 d-flex flex-column">
                <h2 className="accordion-header h4 text-tertiary text-center" style={{ height: '60px' }}>
                    {titulo}
                </h2>
                <Image src={img} alt='...' height={250} width={250} className='m-auto' />
                <button className="col-10 px-3 py-1 bg-secondary text-white m-auto rounded" style={{ border: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target={targetInd} aria-expanded="false" aria-controls={idInd}>
                    Ver detalles
                </button>
                <div id={idInd} className="accordion-collapse collapse" data-bs-parent={targetBox}>
                    <p className='mx-3 my-3' style={{ textAlign: 'justify' }}>{cuerpo}</p>
                </div>
            </div>
        </div>
    )
}

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

            <div className='row m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 mb-3 d-flex flex-column mb-5'>
                <h4 className='h3 mb-4'>Resultados mediciones</h4>
                <p className=''>
                    La evaluación física o antropométrica nos entrega como resultado una gran variedad de
                    indicadores de interés deportivo y de salud, como lo son los componentes corporales,
                    somatotipo, índice de masa corporal, entre otros
                    indicadores físicos.
                </p>
            </div>

            <div className='row m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-10 justify-content-around'>
                <Indicador {...InfoIndicadores.componentesPorc} />
                <Indicador {...InfoIndicadores.componentesKg} />
                <Indicador {...InfoIndicadores.somatocarta} />
                <Indicador {...InfoIndicadores.phantom} />
                <Indicador {...InfoIndicadores.imc} />
                <Indicador {...InfoIndicadores.ffmi} />
                <Indicador {...InfoIndicadores.pliegues} />
                <Indicador {...InfoIndicadores.perimetros} />
                <Indicador {...InfoIndicadores.sumatorias} />
                <Indicador {...InfoIndicadores.indiceCormico} />
                <Indicador {...InfoIndicadores.indiceEsquelico} />
                <Indicador {...InfoIndicadores.envergadura} />
            </div>

        </div>
    )
}