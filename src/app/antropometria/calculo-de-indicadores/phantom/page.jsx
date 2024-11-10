'use client'
import React from 'react'
import { useState } from 'react'
import { phantom } from './datos';

function Indicador({ ancho, ejex, ejexref, refer, nombre, zscore, zscoreref, refinival }) {
    return (
        <div className='' style={{ width: ancho, height: '80px', position: 'relative' }}>
            {/* Linea del medio */}
            <div style={{ width: '1px', height: '80px', background: '#C9C9C9', position: 'absolute', left: (ancho / 2) }} />
            {/* Nombre indicador */}
            <div style={{ height: '20px', position: 'absolute', left: '0px', top: '30px' }}>
                <p className='mb-0'>{nombre}</p>
            </div>
            {/* numero zScore */}
            <p className='mb-0 text-center' style={{ width: '20px', position: 'absolute', left: ejex, top: '10px', fontSize: '12px' }}>
                {zscore.toFixed(2)}
            </p>
            {
                refer === 'none' || refinival === 0 ?
                    <></>
                    :
                    <p className='mb-0 text-center' style={{ width: '20px', position: 'absolute', left: ejexref, top: '10px', fontSize: '12px' }}>
                        {zscoreref.toFixed(2)}
                    </p>
            }
            {/* punto zscore */}
            <div className='bg-primary' style={{ width: '20px', height: '20px', position: 'absolute', left: ejex, top: '30px', borderRadius: '20px' }} />
            {
                refer === 'none' || refinival === 0 ?
                    <></>
                    :
                    <div className='bg-secondary' style={{ width: '20px', height: '20px', position: 'absolute', left: ejexref, top: '30px', borderRadius: '20px' }} />

            }
        </div>
    );
}

export default function Phantom() {
    //tamaño pantalla
    let screenWidth;
    let screenHeight;
    if (typeof window !== "undefined") {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
    }
    //alineación elementos grafico phantom
    let ejexinicial = 0;
    let multiplo = 0;
    let phanWidth = 0;
    if (screenWidth < 1000) {
        ejexinicial = 140;
        multiplo = 15;
        phanWidth = 300;
    } else if (screenWidth > 999) {
        ejexinicial = 190;
        multiplo = 20;
        phanWidth = 400;
    }
    // usuario
    const [talla, setTalla] = useState(0);
    const [peso, setPeso] = useState(0);
    const [zScorePeso, setZScorePeso] = useState(0);
    const [phanPeso, setPhanPeso] = useState(ejexinicial);
    const [brazo, setBrazo] = useState(0);
    const [zScoreBrazo, setZScoreBrazo] = useState(0);
    const [phanBrazo, setPhanBrazo] = useState(ejexinicial);
    const [cintura, setCintura] = useState(0);
    const [zScoreCintura, setZScoreCintura] = useState(0);
    const [phanCintura, setPhanCintura] = useState(ejexinicial);
    const [pantorrilla, setPantorrilla] = useState(0);
    const [zScorePantorrilla, setZScorePantorrilla] = useState(0);
    const [phanPantorrilla, setPhanPantorrilla] = useState(ejexinicial);
    // referencia
    const [referencia, setReferencia] = useState('none')
    const [refTalla, setRefTalla] = useState(0);
    const [refPeso, setRefPeso] = useState(0);
    const [refBrazo, setRefBrazo] = useState(0);
    const [refCintura, setRefCintura] = useState(0);
    const [refPantorrilla, setRefPantorrilla] = useState(0);
    const [refZScorePeso, setRefZScorePeso] = useState(0);
    const [refZScoreBrazo, setRefZScoreBrazo] = useState(0);
    const [refZScoreCintura, setRefZScoreCintura] = useState(0);
    const [refZScorePantorrilla, setRefZScorePantorrilla] = useState(0);
    const [refPesoVal, setRefPesoVal] = useState(0);
    const [refBrazoVal, setRefBrazoVal] = useState(0);
    const [refCinturaVal, setRefCinturaVal] = useState(0);
    const [refPantorrillaVal, setRefPantorrillaVal] = useState(0);
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        // actualiza los valores del usuario
        setPhanPeso(ejexinicial + (((1 / 8.6) * (((peso * (170.18 / talla)) * 1) - 64.58)) * multiplo))
        setPhanBrazo(ejexinicial + (((1 / 2.37) * (((brazo * (170.18 / talla)) * 1) - 29.41)) * multiplo))
        setPhanCintura(ejexinicial + (((1 / 4.45) * (((cintura * (170.18 / talla)) * 1) - 71.91)) * multiplo))
        setPhanPantorrilla(ejexinicial + (((1 / 2.3) * (((pantorrilla * (170.18 / talla)) * 1) - 35.25)) * multiplo))
        setZScorePeso((((1 / 8.6) * (((peso * (170.18 / talla)) * 1) - 64.58))))
        setZScoreBrazo((((1 / 2.37) * (((brazo * (170.18 / talla)) * 1) - 29.41))))
        setZScoreCintura((((1 / 4.45) * (((cintura * (170.18 / talla)) * 1) - 71.91))))
        setZScorePantorrilla((((1 / 2.3) * (((pantorrilla * (170.18 / talla)) * 1) - 35.25))))
        // define los valores de la referencia en base a la opción seleccionada
        const datosRef = phantom.find(phan => phan.name === document.getElementById("refPhantom").value)
        setRefPesoVal(datosRef.peso);
        setRefBrazoVal(datosRef.brazo);
        setRefCinturaVal(datosRef.cintura);
        setRefPantorrillaVal(datosRef.pantorrilla);
        setRefTalla(datosRef.talla)
        setRefPeso(ejexinicial + (((1 / 8.6) * (((datosRef.peso * (170.18 / datosRef.talla)) * 1) - 64.58)) * multiplo))
        setRefBrazo(ejexinicial + (((1 / 2.37) * ((((datosRef.brazo) * (170.18 / datosRef.talla)) * 1) - 29.41)) * multiplo))
        setRefCintura(ejexinicial + (((1 / 4.45) * ((((datosRef.cintura) * (170.18 / datosRef.talla)) * 1) - 71.91)) * multiplo))
        setRefPantorrilla(ejexinicial + (((1 / 2.3) * ((((datosRef.pantorrilla) * (170.18 / datosRef.talla)) * 1) - 35.25)) * multiplo))
        setRefZScorePeso((((1 / 8.6) * (((datosRef.peso * (170.18 / datosRef.talla)) * 1) - 64.58))))
        setRefZScoreBrazo((((1 / 2.37) * ((((datosRef.brazo) * (170.18 / datosRef.talla)) * 1) - 29.41))))
        setRefZScoreCintura((((1 / 4.45) * ((((datosRef.cintura) * (170.18 / datosRef.talla)) * 1) - 71.91))))
        setRefZScorePantorrilla((((1 / 2.3) * ((((datosRef.pantorrilla) * (170.18 / datosRef.talla)) * 1) - 35.25))))
        setReferencia(datosRef.name);
        //mensaje
        setMensaje("El modelo phantom cuantifica los resultados de la evaluación física en base a nuestra proporcionalidad. De forma simple, los resultados sobre cero son proporcionalmente más grandes, y bajo cero son proporcionalmente más pequeños.");
    };

    return (
        <div className='d-flex flex-column align-items-center'>
            {/* Calculadora */}
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-6 col-lg-5 col-xl-5 col-xxl-4 border align-items-center px-3 px-sm-5 py-4'
                style={{ border: '#9C9C9C', borderRadius: '15px' }}>
                <h4 className='mb-3'>Cálculo modelo Phantom</h4>
                {/* Formulrio */}
                <form onSubmit={handleSubmit} className='w-100 row mb-3'>
                    <div className='col-6 mb-2'>
                        <label className='w-100 mb-1'>Talla (cm)</label>
                        <input className='w-100 form-control' type='number' name='inptalla' id='inptalla' onChange={(e) => setTalla(e.target.value)}></input>
                    </div>
                    <div className='col-6 mb-2'>
                        <label className='w-100 mb-1'>Peso (kg)</label>
                        <input className='w-100 form-control' type='number' onChange={(e) => setPeso(e.target.value)}></input>
                    </div>
                    <div className='col-6 mb-2'>
                        <label className='w-100 mb-1'>Brazo contraido (cm)</label>
                        <input className='w-100 form-control' type='number' onChange={(e) => setBrazo(e.target.value)}></input>
                    </div>
                    <div className='col-6 mb-2'>
                        <label className='w-100 mb-1'>Cintura (cm)</label>
                        <input className='w-100 form-control' type='number' onChange={(e) => setCintura(e.target.value)}></input>
                    </div>
                    <div className='col-6 mb-2'>
                        <label className='w-100 mb-1'>Pantorrilla (cm)</label>
                        <input className='w-100 form-control' type='number' onChange={(e) => setPantorrilla(e.target.value)}></input>
                    </div>
                    <div className='mb-4 col-6'>
                        <label className='mb-1'>Seleccionar referencia</label>
                        <select id='refPhantom' name='refPhantom' className='w-100 form-control'>
                            <option value='none' >none</option>
                            <option value='culturista'>culturista</option>
                            <option value='remero'>remero</option>
                        </select>
                    </div>
                    <button className='btn btn-primary w-100' type='submit'>Calcular</button>
                </form>
                {/* Resultdos */}
                <div className='w-100'>
                    <div className='w-100 mt-3 d-flex flex-column align-items-center rounded' style={{ border: '1px solid #C9C9C9' }}>
                        <Indicador ancho={phanWidth} ejex={phanPeso} ejexref={refPeso} refer={referencia} zscore={zScorePeso} zscoreref={refZScorePeso} nombre='Peso' refinival={refPesoVal} />
                        <Indicador ancho={phanWidth} ejex={phanBrazo} ejexref={refBrazo} refer={referencia} zscore={zScoreBrazo} zscoreref={refZScoreBrazo} nombre='Brazo' refinival={refBrazoVal} />
                        <Indicador ancho={phanWidth} ejex={phanCintura} ejexref={refCintura} refer={referencia} zscore={zScoreCintura} zscoreref={refZScoreCintura} nombre='Cintura' refinival={refCinturaVal} />
                        <Indicador ancho={phanWidth} ejex={phanPantorrilla} ejexref={refPantorrilla} refer={referencia} zscore={zScorePantorrilla} zscoreref={refZScorePantorrilla} nombre='Pantorrilla' refinival={refPantorrillaVal} />
                    </div>
                    <div className='d-flex w-100  py-3'>
                        <div className='col-6 ps-3 d-flex  d-flex align-items-center'>
                            <div className='bg-primary me-3' style={{ width: '20px', height: '20px', borderRadius: '20px' }} />
                            <p className='mb-0'>Usuario </p>
                        </div>
                        {
                            referencia === 'none' ?
                                <></>
                                :
                                <div className='col-6 ps-3 d-flex  d-flex align-items-center'>
                                    <div className='bg-secondary me-3' style={{ width: '20px', height: '20px', borderRadius: '20px' }} />
                                    <p className='mb-0'>{referencia} </p>
                                </div>

                        }
                    </div>
                    {
                        mensaje === "" ?
                            <></>
                            :
                            <div className='p-3 bg-quaternary'>
                                {mensaje}
                            </div>
                    }
                </div>
            </div>

        </div>
    )
}
