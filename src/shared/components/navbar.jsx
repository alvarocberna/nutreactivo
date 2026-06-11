'use client'

import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import "../../app/globals.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg w-100 d-flex flex-column py-0 px-0"
            style={{ position: 'fixed', top: '0px', borderBottom: '1px solid #EFEFEF', zIndex: '1030'}}>

            <div className='navbarTopBarSty container-fluid w-100 d-flex justify-content-center' style={{ height: '25px' }}>
                <div className='row w-100 h-100'>
                    <div className='col d-flex justify-content-center h-100 '>
                        <a href='https://www.instagram.com/nutreactivo.cl/?hl=es-la' target='_blank' rel='noreferrer'
                            className=" d-flex align-items-center justify-content-center h-100">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} />
                        </a>
                        <a href='https://api.whatsapp.com/send?phone=56987307068' target='_blank' rel='noreferrer' className="d-flex align-items-center justify-content-center mx-5 h-100">
                            <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white' }} />
                        </a>
                        <a href='mailto:nutreactivo@gmail.com' target='' rel='external' className="d-flex align-items-center justify-content-center h-100">
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-fluid d-flex align-items-center px-0" style={{ background: 'white', height: '60px' }}>
                {/* Logo  */}
                <Link className="navbar-brand ms-3" href="/">
                    <h1 className="fw-bold h2 mb-0">
                        NUTREACTIVO®
                    </h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Menu de opciones */}
                <div className="collapse navbar-collapse" id="navbarNav" style={{ background: 'white' }} >
                    <ul className="navbar-nav w-100 d-flex justify-content-end">
                        <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                            <Link className="nav-link h-100 d-flex align-items-center justify-content-center fw-semibold "
                                href="/servicios/consulta-nutricional">
                                Consulta nutricional
                            </Link>
                        </li>
                        <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                            <Link className="nav-link h-100 d-flex align-items-center justify-content-center fw-semibold " href="/#valores">
                                Valores
                            </Link>
                        </li>
                        <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                            <Link className="nav-link h-100 d-flex align-items-center justify-content-center fw-semibold" href="/antropometria">
                                Mediciones
                            </Link>
                        </li>
                        <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                            <Link className="nav-link h-100 d-flex align-items-center justify-content-center fw-semibold" href="/recursos">
                                Recursos
                            </Link>
                        </li>
                        <li className="nav-item col-12 col-lg-2 d-flex align-items-center " style={{ height: '60px' }}>
                            <Link className="d-flex align-items-center justify-content-center fw-semibold btnAgendarSty"
                                aria-current="page" href="/agendar">
                                Agenda aquí
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}