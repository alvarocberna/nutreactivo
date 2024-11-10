
import React from "react";
import Link from "next/link";
import './style.css';

export default function CalculoIndicadores() {
    return (
        <div className="d-flex flex-column">
            <div className="m-auto col-10 col-sm-8 col-md-10 col-lg-10 col-xl-9 d-flex flex-column">
                <h2 className="h2 mb-5">Cálculo de indicadores</h2>
                <Link className="m-auto p-3 mb-4 col-12 col-md-8 col-lg-6 boxIndSty"
                    href='/antropometria/calculo-de-indicadores/imc'>
                    <h4 className="h5 mb-0">Índice de Masa Corporal</h4>
                </Link>
                <Link className="m-auto p-3 mb-4 col-12 col-md-8 col-lg-6 boxIndSty"
                    href='/antropometria/calculo-de-indicadores/phantom'>
                    <h4 className="h5 mb-0">Modelo Phantom</h4>
                </Link>
            </div>
        </div>
    );
}