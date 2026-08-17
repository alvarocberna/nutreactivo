'use client'
import React from 'react'
import { useId, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeightScale, faTriangleExclamation, faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const GAUGE_MIN = 15
const GAUGE_MAX = 40

const CATEGORIAS_IMC = [
    { max: 18.5, label: 'Bajo peso', color: '#2C6FBF', bg: '#E8F1FF' },
    { max: 25, label: 'Normal', color: '#04876D', bg: '#E4F9F3' },
    { max: 30, label: 'Sobrepeso', color: '#9A6B00', bg: '#FFF6E0' },
    { max: 35, label: 'Obesidad grado I', color: '#C1512A', bg: '#FFEDE3' },
    { max: 40, label: 'Obesidad grado II', color: '#B23A33', bg: '#FCE7E6' },
    { max: Infinity, label: 'Obesidad grado III', color: '#8C2A24', bg: '#FBE0DE' },
]

const getCategoria = (imc) => CATEGORIAS_IMC.find(categoria => imc < categoria.max) ?? CATEGORIAS_IMC[CATEGORIAS_IMC.length - 1]

const interpetacionIMC = (imc) => {
    if (imc < 18.5) {
        return 'Estado nutricional bajo peso en base a proporcionalidad corporal.'
    } else if (imc < 25) {
        return 'Estado nutricional normal en base a proporcionalidad corporal.'
    } else if (imc < 30) {
        return 'Estado nutricional sobrepeso en base a proporcionalidad corporal.'
    } else if (imc < 35) {
        return 'Estado nutricional obesidad grado I en base a proporcionalidad corporal.'
    } else if (imc < 40) {
        return 'Estado nutricional obesidad grado II en base a proporcionalidad corporal.'
    } else {
        return 'Estado nutricional obesidad grado III en base a proporcionalidad corporal.'
    }
}

export default function Imc() {
    const pesoId = useId()
    const tallaId = useId()

    const [peso, setPeso] = useState('')
    const [talla, setTalla] = useState('')
    const [imc, setImc] = useState(null)
    const [error, setError] = useState('')

    const pesoNum = parseFloat(peso)
    const tallaNum = parseFloat(talla)
    const formularioValido = peso !== '' && talla !== '' && pesoNum > 0 && tallaNum > 0

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!formularioValido) {
            setError('Ingresa un peso y una talla válidos, mayores a 0.')
            return
        }
        setError('')
        setImc(pesoNum / ((tallaNum / 100) ** 2))
    }

    const reiniciar = () => {
        setPeso('')
        setTalla('')
        setImc(null)
        setError('')
    }

    const categoria = imc !== null ? getCategoria(imc) : null
    const gaugePercent = imc !== null
        ? Math.min(100, Math.max(0, ((imc - GAUGE_MIN) / (GAUGE_MAX - GAUGE_MIN)) * 100))
        : 0

    return (
        <div className='d-flex flex-column imcWrapperSty'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9'>
                <div className='m-auto col-12 col-md-8 col-lg-6 imcCardSty'>
                    <div className='imcCardAccent' />
                    <div className='imcCardBody'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                            <div className='imcIconWrap'>
                                <FontAwesomeIcon icon={faWeightScale} />
                            </div>
                            <div>
                                <h4 className='mb-0'>Cálculo de IMC</h4>
                                <p className='imcSubtitleSty mb-0'>Índice de masa corporal a partir de tu peso y talla</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} noValidate className='w-100 mb-4'>
                            <div className='w-100 mb-3'>
                                <label className='imcLabelSty' htmlFor={pesoId}>Peso</label>
                                <div className='imcInputGroupSty'>
                                    <input
                                        id={pesoId}
                                        className='imcInputSty'
                                        type='number'
                                        inputMode='decimal'
                                        min='0'
                                        step='0.1'
                                        placeholder='Ej: 70'
                                        value={peso}
                                        onChange={(e) => setPeso(e.target.value)}
                                    />
                                    <span className='imcInputUnitSty'>kg</span>
                                </div>
                            </div>
                            <div className='w-100 mb-4'>
                                <label className='imcLabelSty' htmlFor={tallaId}>Talla</label>
                                <div className='imcInputGroupSty'>
                                    <input
                                        id={tallaId}
                                        className='imcInputSty'
                                        type='number'
                                        inputMode='decimal'
                                        min='0'
                                        step='0.1'
                                        placeholder='Ej: 170'
                                        value={talla}
                                        onChange={(e) => setTalla(e.target.value)}
                                    />
                                    <span className='imcInputUnitSty'>cm</span>
                                </div>
                            </div>

                            {error &&
                                <p className='imcErrorTextSty mb-3' role='alert'>{error}</p>
                            }

                            <div className='d-flex flex-column gap-2'>
                                <button className='imcCalcBtnSty' type='submit' disabled={!formularioValido}>
                                    Calcular
                                </button>
                                {imc !== null &&
                                    <button className='imcResetBtnSty' type='button' onClick={reiniciar}>
                                        <span className='imcIconBoxSty imcResetIconBoxSty me-2'>
                                            <FontAwesomeIcon icon={faRotateLeft} />
                                        </span>
                                        Reiniciar
                                    </button>
                                }
                            </div>
                        </form>

                        <div className='w-100' aria-live='polite'>
                            {imc !== null ?
                                <div className='w-100 text-center'>
                                    <p className='imcResultValueSty mb-2' style={{ color: categoria.color }}>
                                        {imc.toFixed(1)}
                                    </p>
                                    <span className='imcChipSty' style={{ color: categoria.color, background: categoria.bg }}>
                                        {categoria.label}
                                    </span>

                                    <div className='imcGaugeTrackSty'>
                                        <div className='imcGaugePointerSty' style={{ left: `${gaugePercent}%` }} />
                                    </div>
                                    <div className='imcGaugeLabelsSty'>
                                        <span>{GAUGE_MIN}</span>
                                        <span>{GAUGE_MAX}+</span>
                                    </div>

                                    <div className='imcDescBoxSty mt-4 text-start'>
                                        {interpetacionIMC(imc)}
                                    </div>

                                    {imc >= 25 &&
                                        <div className='imcWarningSty mt-3'>
                                            <span className='imcIconBoxSty imcWarningIconBoxSty'>
                                                <FontAwesomeIcon icon={faTriangleExclamation} />
                                            </span>
                                            <span>
                                                Al parecer tu IMC se encuentra por sobre lo recomendado. Sin embargo,
                                                es importante recordar que el IMC es un indicador poco sensible que no
                                                analiza la proporcionalidad corporal. Para un mejor diagnóstico se puede
                                                utilizar el % de grasa corporal o circunferencia de cintura.
                                            </span>
                                        </div>
                                    }
                                </div>
                                :
                                <div className='w-100 d-flex flex-column gap-3 py-2'>
                                    <div className='imcSkeletonRowSty' style={{ width: '40%', height: '28px' }} />
                                    <div className='imcSkeletonRowSty' />
                                    <div className='imcSkeletonRowSty' style={{ width: '85%' }} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
