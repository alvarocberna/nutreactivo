'use client'

import Link from 'next/link';
import './style.css'

export default function Antropometria() {
    return (
        <div className="d-flex flex-column">
            <h2 className="row m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 mb-5">
                Antropometría
            </h2>

            <div className="row m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex flex-column flex-md-row justify-content-around mb-5">
                <Link className="col-12 col-md-5 d-flex flex-column boxAntSty mb-3" href='/antropometria/evaluacion-fisica'>
                    <p className="h4 fw-bold mb-3 text-center" style={{ color: '#673DE6' }}>Evaluación física</p>
                    <p className='h6' style={{ color: '#673DE6' }}>(Incluida en consulta nutricional)</p>
                </Link>
                <Link className="col-12 col-md-5 boxAntSty d-flex flex-column mb-3" href='/antropometria/calculo-de-indicadores'>
                    <p className='mb-3 h4 fw-bold text-center' style={{ color: '#673DE6' }}>Cálculo de indicadores deportivos</p>
                </Link>
            </div>
        </div>
    );
}