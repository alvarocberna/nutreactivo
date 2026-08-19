'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Alimentos } from './datos.jsx'
import './style.css'

const GRUPOS = [
    {
        id: 'cereales',
        titulo: 'Cereales',
        img: '/icons/icon_pan.png',
        subgrupos: [
            { alimentos: Alimentos.Cereales, cal: 140, pro: 3, cho: 30, lip: 1 },
        ],
    },
    {
        id: 'verduras',
        titulo: 'Verduras',
        img: '/icons/icon_verdura.png',
        subgrupos: [
            { subT: 'Consumo General', alimentos: Alimentos.VerdurasCG, cal: 30, pro: 2, cho: 5, lip: 0 },
            { subT: 'Libre Consumo', alimentos: Alimentos.VerdurasLC, cal: 10, pro: 0, cho: 2.5, lip: 0 },
        ],
    },
    {
        id: 'frutas',
        titulo: 'Frutas',
        img: '/icons/icon_fruta.png',
        subgrupos: [
            { alimentos: Alimentos.Frutas, cal: 65, pro: 1, cho: 15, lip: 0 },
        ],
    },
    {
        id: 'proteina-animal',
        titulo: 'Proteína animal',
        img: '/icons/icon_prote1.png',
        subgrupos: [
            { subT: 'Alta en grasa', alimentos: Alimentos.ProteinaAnimalAG, cal: 120, pro: 11, cho: 1, lip: 8 },
            { subT: 'Baja en grasa', alimentos: Alimentos.ProteinaAnimalBG, cal: 65, pro: 11, cho: 1, lip: 2 },
        ],
    },
    {
        id: 'proteina-vegetal',
        titulo: 'Proteína vegetal',
        img: '/icons/icon_prote2.png',
        subgrupos: [
            { subT: 'Alta en proteína', alimentos: Alimentos.ProteinaVegetalAP, cal: 125, pro: 9.5, cho: 20, lip: 1.5 },
            { subT: 'Baja en proteína', alimentos: Alimentos.ProteinaVegetalBP, cal: 75, pro: '-', cho: '-', lip: '-' },
        ],
    },
    {
        id: 'lacteos',
        titulo: 'Lácteos',
        img: '/icons/icon_lacteos.png',
        subgrupos: [
            { subT: 'Altos en grasa', alimentos: Alimentos.LacteosAltos, cal: 110, pro: 5, cho: 9, lip: 6 },
            { subT: 'Medios en grasa', alimentos: Alimentos.LacteosMedios, cal: 85, pro: 5, cho: 9, lip: 3 },
            { subT: 'Bajos en grasa', alimentos: Alimentos.LacteosBajos, cal: 70, pro: 7, cho: 10, lip: 0 },
        ],
    },
    {
        id: 'lipidos',
        titulo: 'Lípidos',
        img: '/icons/icon_lipidos.png',
        subgrupos: [
            { alimentos: Alimentos.Lipidos, cal: 175, pro: 5, cho: 5, lip: 15 },
        ],
    },
    {
        id: 'aceites',
        titulo: 'Aceites y grasas',
        img: '/icons/icon_aceite.png',
        subgrupos: [
            { alimentos: Alimentos.Grasas, cal: 180, pro: 0, cho: 0, lip: 20 },
        ],
    },
    {
        id: 'azucar',
        titulo: 'Azúcar',
        img: '/icons/icon_azucar.png',
        subgrupos: [
            { alimentos: Alimentos.Azucar, cal: 20, pro: 0, cho: 5, lip: 0 },
        ],
    },
    {
        id: 'alcohol',
        titulo: 'Alcohol',
        img: '/icons/icon_alcohol.png',
        subgrupos: [
            { subT: 'Altos en carbohidratos', alimentos: Alimentos.AlcoholAlto, cal: 140, pro: 0, cho: 20, lip: 0 },
            { subT: 'Medios en carbohidratos', alimentos: Alimentos.AlcoholMedio, cal: 140, pro: 0, cho: 3.5, lip: 0 },
            { subT: 'Sin alcohol', alimentos: Alimentos.AlcoholSin, cal: 140, pro: 0, cho: 0, lip: 0 },
        ],
    },
]

function MacroPill({ label, value, unit }) {
    return (
        <span className='macroPillSty'>
            <span className='macroPillLabel'>{label}</span>
            <span>{value}{unit}</span>
        </span>
    )
}

function Subgrupo({ subT, cal, pro, cho, lip, alimentos }) {
    return (
        <div>
            {subT && <p className='subgrupoTitleSty mb-2'>{subT}</p>}
            <div className='macroPillRow'>
                <MacroPill label='Calorías' value={cal} unit=' kcal' />
                <MacroPill label='Proteína' value={pro} unit='g' />
                <MacroPill label='Carbohidratos' value={cho} unit='g' />
                <MacroPill label='Lípidos' value={lip} unit='g' />
            </div>
            <div className='foodChipGrid'>
                {alimentos.map((alimento) => (
                    <span key={alimento} className='foodChipSty'>{alimento}</span>
                ))}
            </div>
        </div>
    )
}

function Grupo({ titulo, img, subgrupos, open, onToggle }) {
    const totalAlimentos = subgrupos.reduce((acc, s) => acc + s.alimentos.length, 0)
    return (
        <div className={`grupoCardSty grupoCardBg--lavender ${open ? 'is-open' : ''}`}>
            <button type='button' className='grupoHeaderBtn' onClick={onToggle} aria-expanded={open}>
                <span className='grupoIconWrap'>
                    <Image src={img} width={26} height={26} alt='' />
                </span>
                <span className='grupoHeaderText'>
                    <span className='grupoTitleSty'>{titulo}</span>
                    <span className='grupoSubtitleSty'>{totalAlimentos} alimentos de referencia</span>
                </span>
                <span className='grupoChevronSty'>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </button>
            {open && (
                <div className='grupoBodySty'>
                    {subgrupos.map((s, i) => (
                        <Subgrupo key={s.subT ?? i} {...s} />
                    ))}
                </div>
            )}
        </div>
    )
}

function Recomendaciones({ open, onToggle }) {
    return (
        <div className={`grupoCardSty grupoCardBg--lavender ${open ? 'is-open' : ''}`}>
            <button type='button' className='grupoHeaderBtn' onClick={onToggle} aria-expanded={open}>
                <span className='grupoIconWrap'>
                    <Image src='/icons/icon_info.png' width={26} height={26} alt='' />
                </span>
                <span className='grupoHeaderText'>
                    <span className='grupoTitleSty'>¿Cómo implementar este sistema?</span>
                    <span className='grupoSubtitleSty'>Guía rápida antes de revisar cada grupo</span>
                </span>
                <span className='grupoChevronSty'>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </button>
            {open && (
                <div className='grupoBodySty infoBodySty'>
                    <div>
                        <h5 className='text-tertiary mb-2'>¿Qué es?</h5>
                        <p className='text-tertiary mb-2'>
                            Este sistema agrupa alimentos similares entre si dentro de un mismo grupo de
                            alimentos (manzana, naranja o plátano por ejemplo dentro del grupo de las frutas),
                            asignándole una porción estándar a cada alimento, de forma que todos los alimentos
                            de un mismo grupo sean similares nutricionalmente.
                        </p>
                        <p className='text-tertiary mb-0'>
                            Siguiendo el mismo ejemplo anterior, una porción de manzana es una unidad pequeña,
                            mientras que una porción de plátano es 1/2 unidad, y ambas frutas medidas en sus
                            porciones respectivas aportan la misma cantidad de energía, proteína y carbohidratos.
                        </p>
                    </div>

                    <div>
                        <h5 className='text-tertiary mb-2'>Utensilios para medir porciones</h5>
                        <p className='text-tertiary mb-3'>
                            Si bien muchas porciones de alimentos las podemos medir en unidades, para otros
                            alimentos vamos a requerir utensilios como tazas y cucharas.
                        </p>
                        <div className='d-flex flex-row justify-content-evenly align-items-center flex-wrap gap-3'>
                            <Image className='infoUtensilImg' src='/media/img_taza.png' alt='Taza medidora' width={80} height={140} />
                            <Image className='infoUtensilImg' src='/media/img_cuchara.png' alt='Cuchara medidora' width={80} height={140} />
                            <Image className='infoUtensilImg' src='/media/img_cdta.png' alt='Cucharadita medidora' width={80} height={140} />
                        </div>
                    </div>

                    <div>
                        <h5 className='text-tertiary mb-2'>Aplicando el uso de porciones</h5>
                        <p className='text-tertiary mb-3'>
                            Este sistema nos permite elaborar diferentes preparaciones con diferentes ingredientes,
                            pero que sean nutricionalmente equivalentes, como podemos ver en el siguiente ejemplo:
                        </p>
                        <div className='row g-4'>
                            <div className='col-12 col-md-6 d-flex flex-column align-items-center text-center'>
                                <Image className='infoPlateImg' src='/media/img_comida1.jpeg' alt='Plato de comida 1' height={220} width={220} />
                                <ul className='infoPlateList'>
                                    <li>Cereales 1p: Arroz blanco 3/4 taza.</li>
                                    <li>Proteína 2p: Pollo 100gr.</li>
                                    <li>Verduras 2p: Mix de verduras 1 1/2 taza.</li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-6 d-flex flex-column align-items-center text-center'>
                                <Image className='infoPlateImg' src='/media/img_comida2.jpeg' alt='Plato de comida 2' height={220} width={220} />
                                <ul className='infoPlateList'>
                                    <li>Cereales 1p: Pan molde 2 rebanadas.</li>
                                    <li>Proteína 2p: Carne 100gr.</li>
                                    <li>Verduras 2p: Lechuga y tomate 1 1/2 taza.</li>
                                </ul>
                            </div>
                        </div>
                        <p className='infoQuoteSty mt-4 mb-0'>
                            Si bien los ingredientes de estas dos preparaciones son diferentes, ambas tienen 1
                            porción de cereales, 2 porciones de proteína, y 2 porciones de verduras, por lo que
                            su aporte de energía, proteína, carbohidratos y grasas es prácticamente igual.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function PorcionesAlimentos() {
    const [openId, setOpenId] = useState('info')

    const toggle = (id) => setOpenId((current) => (current === id ? null : id))

    return (
        <div className='w-100 d-flex flex-column py-5'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9'>

                <h1 className='h1 mb-2 text-tertiary fw-bold'>Porciones de Intercambio de Alimentos</h1>
                <p className='text-muted mb-5 porcionesIntroSty'>
                    Equivalencias de porciones por grupo de alimentos para planificar tus comidas de forma
                    sencilla y nutricionalmente equilibrada. Toca cada tarjeta para ver el detalle.
                </p>

                <div className='d-flex flex-column' style={{ gap: '16px' }}>
                    <Recomendaciones open={openId === 'info'} onToggle={() => toggle('info')} />
                    {GRUPOS.map((grupo) => (
                        <Grupo
                            key={grupo.id}
                            titulo={grupo.titulo}
                            img={grupo.img}
                            subgrupos={grupo.subgrupos}
                            open={openId === grupo.id}
                            onToggle={() => toggle(grupo.id)}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}
