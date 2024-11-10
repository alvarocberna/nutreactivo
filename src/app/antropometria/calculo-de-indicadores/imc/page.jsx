'use client'
import React from 'react'
import { useState } from 'react'

export default function Imc() {
    const [peso, setPeso] = useState(0);
    const [talla, setTala] = useState(0);
    const [imc, setImc] = useState(0)
    const [resultado, setResultado] = useState(false)

    const handleSumbit = (event) => {
        event.preventDefault()
        setResultado(!resultado)
        setImc(peso / ((talla / 100) ** 2))
    }
    const reiniciar = (event) => {
        event.preventDefault()
        setPeso(0);
        setTala(0);
        setResultado(false);
    }

    const interpetacionIMC = (imc) => {
        if (!imc) {
            return "";
        } else if (imc < 18.5) {
            return "Estado nutricional bajo peso en base a proporcionalidad corporal.";
        } else if (imc < 25) {
            return "Estado nutricional normal en base a proporcionalidad corporal."
        } else if (imc < 30) {
            return "Estado nutricional sobrepeso en base a proporcionalidad corporal."
        } else if (imc < 35) {
            return "Estado nutricional obesidad grado I en base a proporcionalidad corporal."
        } else if (imc < 40) {
            return "Estado nutricional obesidad grado II en base a proporcionalidad corporal."
        } else {
            return "Estado nutricional obesidad grado III en base a proporcionalidad corporal."
        }
    }

    return (
        <div className='d-flex flex-column'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9'>
                {/* Calculadora */}
                <div className='m-auto d-flex flex-column col-12 col-md-8 col-lg-6 border align-items-center px-3 px-sm-5 py-5'
                    style={{ border: '#9C9C9C', borderRadius: '15px' }}>
                    <h4 className='mb-5'>Cálculo de IMC</h4>
                    {/* Fomulario */}
                    <form onSubmit={handleSumbit} onReset={reiniciar} className='w-100 mb-3'>
                        <div className='w-100 mb-3'>
                            <label className='w-100 form-label'>Peso (kg)</label>
                            <input className='w-100 form-control' type='number' value={peso} onChange={(e) => setPeso(e.target.value)}></input>
                        </div>
                        <div className='w-100 mb-5'>
                            <label className='w-100 form-label'>Talla (cm)</label>
                            <input className='w-100 form-control' type='number' value={talla} onChange={(e) => setTala(e.target.value)}></input>
                        </div>
                        {
                            resultado === true ?
                                <div>
                                    <button className='w-100 btn btn-primary' type='reset'>Reiniciar</button>
                                </div>
                                :
                                <div>
                                    <button className='w-100 btn btn-primary' type='submit'>Calcular</button>
                                </div>
                        }
                    </form>
                    {/* Resultados */}
                    {
                        resultado === true ?
                            <div className='w-100 mt-3'>
                                <h4 className='mb-4 text-center'>Resultado</h4>
                                <p className='h3 mb-3 fw-bold text-primary text-center'>
                                    {imc.toFixed(2)}
                                </p>
                                <div className='w-100 bg-quaternary rounded px-3 py-3'>
                                    {interpetacionIMC(imc)}
                                </div>
                                {imc >= 25 &&
                                    <div className='w-100 rounded mt-3 px-3 py-3'
                                        style={{ background: '#FF9797', textAlign: 'justify' }}>
                                        al parecer tu IMC se encuentra por sobre lo recomendado. Sin embargo,
                                        es importante recordar que el IMC es un indicador poco sensible que no
                                        analiza la proporcionalidad corporal. Para un mejor diagnóstico se puede
                                        utilizar el % de grasa corporal o circunferencia de cintura.
                                    </div>}
                            </div>
                            :
                            <div className='w-100 d-flex flex-column'>
                                <div className='w-100' style={{ borderBottom: '1px solid #C9C9C9', height: '25px' }} />
                                <div className='w-100' style={{ borderBottom: '1px solid #C9C9C9', height: '25px' }} />
                                <div className='w-100' style={{ borderBottom: '1px solid #C9C9C9', height: '25px' }} />
                                <div className='w-100' style={{ borderBottom: '1px solid #C9C9C9', height: '25px' }} />
                                <div className='w-100' style={{ borderBottom: '1px solid #C9C9C9', height: '25px' }} />
                                <div className='w-100' style={{ borderBottom: '1px solid #C9C9C9', height: '25px' }} />
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
