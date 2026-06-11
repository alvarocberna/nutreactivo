'use client'
import React from 'react'
import Image from 'next/image'
import { Alimentos } from './datos.jsx'
import { useState } from 'react'
import './style.css'

function Recomendaciones({ set, state }) {
    return (
        <div onClick={() => { set(!state) }} className='col-12 col-md-10 m-auto px-3 py-2 d-flex flex-column align-items-center mb-2 boxGru'>
            <div className='col-12 d-flex align-items-center'>
                <Image src='/icons/icon_info.png' height={40} width={40} alt='icon' className='me-3' />
                {
                    state ?
                        <p className='h4 text-primary' >¿Cómo implementar este sistema?</p>
                        :
                        <p className='h4 text-tertiary'>¿Cómo implementar este sistema?</p>
                }
            </div>
            {
                state &&
                <div className='col-12 col-md-11 m-auto d-flex flex-column my-1'>
                    <h5 className='text-tertiary mb-1'>¿Qué es?</h5>
                    <p className='text-tertiary mb-1'>
                        Este sistema agrupa alimentos similares entre si dentro de un mismo grupo de
                        alimentos (manzana, naranja o plátano por ejemplo dentro del grupo de las frutas),
                        asignándole una porción estándar a cada alimento, de forma que todos los alimentos
                        de un mismo grupo sean similares nutricionalmente.
                    </p>
                    <p className='text-tertiary mb-3'>
                        Siguiendo el mismo ejemplo anterior, una porción de manzana es una unidad pequeña,
                        mientras que una porción de plátano es 1/2 unidad, y ambas frutas medidas en sus
                        porciones respectivas aportan la misma cantidad de energía, proteína y carbohidratos.
                    </p>
                    <h5 className='text-tertiary mb-1'>Utensilios para medir porciones</h5>
                    <p className='text-tertiary mb-1'>
                        Si bien muchas porciones de alimentos las podemos medir en unidades, para otros
                        alimentos vamos a requerir utensilios como tazas y cucharas.
                    </p>
                    <div className='d-flex flex-row justify-content-evenly align-items-center mb-3'>
                        <Image src='/media/img_taza.png' alt='taza' width={80} height={140} style={{ objectFit: 'cover' }} />
                        <Image src='/media/img_cuchara.png' alt='cuchara' width={80} height={140} style={{ objectFit: 'cover' }} />
                        <Image src='/media/img_cdta.png' alt='cucharadita' width={80} height={140} style={{ objectFit: 'cover' }} />
                    </div>
                    <h5 className='text-tertiary mb-1'>Aplicando el uso de porciones</h5>
                    <p className='text-tertiary mb-1'>
                        Este sistema nos permite elaborar diferentes preparaciones con diferentes ingredientes,
                        pero que sean nutricionalmente equivalentes, como podemos ver en el siguiente ejemplo:
                    </p>
                    <div className='d-flex flex-column flex-md-row justify-content-evenly mb-1'>
                        <div className='col-12 col-md-6 d-flex flex-column align-items-center'>
                            <Image className='rounded' src='/media/img_comida1.jpeg' alt='Plato comida' height={250} width={250} />
                            <ul>
                                <li>Cereales 1p: Arroz blanco 3/4 taza.</li>
                                <li>Proteína 2p: Pollo 100gr.</li>
                                <li>Verduras 2p: Mix de verduras 1 1/2 taza.</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-6 d-flex flex-column align-items-center'>
                            <Image className='rounded' src='/media/img_comida2.jpeg' alt='Plato comida' height={250} width={250} />
                            <ul>
                                <li>Cereales 1p: Pan molde 2 rebanadas.</li>
                                <li>Proteína 2p: Carne 100gr.</li>
                                <li>Verduras 2p: Lechuga y tomate 1 1/2 taza.</li>
                            </ul>
                        </div>
                    </div>
                    <p className='px-3 py-3 text-primary mb-1 bg-quaternary rounded'>
                        Si bien los ingredientes de estas dos preparaciones son diferentes, ambas tienen 1
                        porción de cereales, 2 porciones de proteína, y 2 porciones de verduras, por lo que
                        su aporte de energía, proteína, carbohidratos y grasas es prácticamente igual.
                    </p>
                </div>

            }
        </div>
    )
}


function Grupo({ titulo, alimentos, alimentos2, alimentos3, img, cal, pro, cho, lip, cal2, pro2, cho2, lip2, cal3, pro3, cho3, lip3, subT, subT2, subT3, setGrupo, grupo }) {
    let ListaAlimentos = alimentos.map(porcion =>
        <li className='col-12 col-md-5 mb-2 ms-3' key=''>
            {porcion}
        </li>
    )
    let ListaAlimentos2 = null;
    if (alimentos2) {
        ListaAlimentos2 = alimentos2.map(porcion =>
            <li className='col-12 col-md-5 mb-2 ms-3' key=''>
                {porcion}
            </li>
        )
    }
    let ListaAlimentos3 = null;
    if (alimentos3) {
        ListaAlimentos3 = alimentos3.map(porcion =>
            <li className='col-12 col-md-5 mb-2 ms-3' key=''>
                {porcion}
            </li>
        )
    }
    return (
        <div onClick={() => { setGrupo(!grupo) }} className='col-12 col-md-10 m-auto px-3 py-2 d-flex flex-column align-items-center mb-2 boxGru'>
            {/* Vista Previa del grupo */}
            <div className='col-12 d-flex align-items-center'>
                <Image src={img} height={40} width={40} alt='icon' className='me-3' />
                {
                    grupo ?
                        <p className='h4 text-primary' >{titulo}</p>
                        :
                        <p className='h4 text-tertiary'>{titulo}</p>
                }
            </div>
            {/* Vista completa del grupo */}
            {
                grupo &&
                <div className='col-12 d-flex flex-column my-1'>
                    {
                        subT &&
                        <p className='text-primary mb-1 ps-3 text-start fw-bold'>
                            {subT}
                        </p>
                    }
                    <p className='text-primary mb-1 ps-3 text-start'>
                        Calorías: {cal} - Proteina: {pro}g - Carbohidratos: {cho}g - Lípidos: {lip}g
                    </p>
                    <div className='row col-12'>
                        {ListaAlimentos}
                    </div>
                    {
                        alimentos2 &&
                        <>
                            <p className='text-primary mb-1 ps-3 text-start fw-bold'>
                                {subT2}
                            </p>
                            <p className='text-primary mb-1 ps-3 text-start'>
                                Calorías: {cal2} - Proteina: {pro2}g - Carbohidratos: {cho2}g - Lípidos: {lip2}g
                            </p>
                            <div className='row col-12'>
                                {ListaAlimentos2}
                            </div>
                        </>
                    }
                    {
                        alimentos3 &&
                        <>
                            <p className='text-primary mb-1 ps-3 text-start fw-bold'>
                                {subT3}
                            </p>
                            <p className='text-primary mb-1 ps-3 text-start'>
                                Calorías: {cal3} - Proteina: {pro3}g - Carbohidratos: {cho3}g - Lípidos: {lip3}g
                            </p>
                            <div className='row col-12'>
                                {ListaAlimentos3}
                            </div>
                        </>
                    }
                </div>
            }
        </div>
    )
}

export default function PorcionesAlimentos() {
    const [recomedaciones, setRecomendaciones] = useState(false);
    const [cereales, setCereales] = useState(false);
    const [verduras, setVerduras] = useState(false);
    const [frutas, setFrutas] = useState(false);
    const [proteina1, setProteina1] = useState(false);
    const [proteina2, setProteina2] = useState(false);
    const [lacteos, setLacteos] = useState(false);
    const [lipidos, setLipidos] = useState(false);
    const [aceites, setAceites] = useState(false);
    const [azucar, setAzucar] = useState(false);
    const [alcohol, setAlcohol] = useState(false);
    return (
        <div className='w-100 d-flex'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-9'>
                <Recomendaciones set={setRecomendaciones} state={recomedaciones} />
                <Grupo titulo='Cereales' alimentos={Alimentos.Cereales} img='/icons/icon_pan.png' cal='140' pro='3' cho='30' lip='1'
                    setGrupo={setCereales} grupo={cereales} />
                <Grupo titulo='Verduras' alimentos={Alimentos.VerdurasCG} img='/icons/icon_verdura.png' subT='Consumo General'
                    cal='30' pro='2' cho='5' lip='0' subT2='Libre Consumo' alimentos2={Alimentos.VerdurasLC}
                    cal2='10' pro2='0' cho2='2.5' lip2='0' setGrupo={setVerduras} grupo={verduras} />
                <Grupo titulo='Frutas' alimentos={Alimentos.Frutas} img='/icons/icon_fruta.png' cal='65' pro='1' cho='15' lip='0'
                    setGrupo={setFrutas} grupo={frutas} />
                <Grupo titulo='Proteína animal' alimentos={Alimentos.ProteinaAnimalAG} img='/icons/icon_prote1.png' subT='Alta en grasa'
                    cal='120' pro='11' cho='1' lip='8' subT2='Baja en grasa' alimentos2={Alimentos.ProteinaAnimalBG}
                    cal2='65' pro2='11' cho2='1' lip2='2' setGrupo={setProteina1} grupo={proteina1} />
                <Grupo titulo='Proteína vegetal' alimentos={Alimentos.ProteinaVegetalAP} img='/icons/icon_prote2.png' subT='Alta en proteina'
                    cal='125' pro='9.5' cho='20' lip='1.5' subT2='Baja en proteina' alimentos2={Alimentos.ProteinaVegetalBP}
                    cal2='75' pro2='-' cho2='-' lip2='-' setGrupo={setProteina2} grupo={proteina2} />
                <Grupo titulo='Lácteos' alimentos={Alimentos.LacteosAltos} img='/icons/icon_lacteos.png' subT='Altos en grasa'
                    cal='110' pro='5' cho='9' lip='6' subT2='Medios en grasa' alimentos2={Alimentos.LacteosMedios}
                    cal2='85' pro2='5' cho2='9' lip2='3' subT3='Bajos en grasa' alimentos3={Alimentos.LacteosBajos}
                    cal3='70' pro3='7' cho3='10' lip3='0' setGrupo={setLacteos} grupo={lacteos} />
                <Grupo titulo='Lípidos' alimentos={Alimentos.Lipidos} img='/icons/icon_lipidos.png' cal='175' pro='5' cho='5' lip='15'
                    setGrupo={setLipidos} grupo={lipidos} />
                <Grupo titulo='Aceites y grasas' alimentos={Alimentos.Grasas} img='/icons/icon_aceite.png' cal='180' pro='0' cho='0' lip='20'
                    setGrupo={setAceites} grupo={aceites} />
                <Grupo titulo='Azúcar' alimentos={Alimentos.Azucar} img='/icons/icon_azucar.png' cal='20' pro='0' cho='5' lip='0'
                    setGrupo={setAzucar} grupo={azucar} />
                <Grupo titulo='Alcohol' alimentos={Alimentos.AlcoholAlto} img='/icons/icon_alcohol.png' subT='Altos en carbohidratos'
                    cal='140' pro='0' cho='20' lip='0' subT2='Medios en carbohidratos' alimentos2={Alimentos.AlcoholMedio}
                    cal2='140' pro2='0' cho2='3.5' lip2='0' subT3='Sin alcohol' alimentos3={Alimentos.AlcoholSin}
                    cal3='140' pro3='0' cho3='0' lip3='0' setGrupo={setAlcohol} grupo={alcohol} />
            </div>

        </div>
    )
}
