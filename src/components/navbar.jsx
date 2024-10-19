'use client'

import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import "../app/globals.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg w-100 d-flex flex-column py-0 px-0"
            style={{ position: 'fixed', top: '0px', borderBottom: '1px solid #EFEFEF' }}>

            <div className='container-fluid w-100 d-flex justify-content-center' style={{ height: '25px', background: '#02B090' }}>
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

            <div className="container-fluid d-flex align-items-center px-0" style={{ background: 'white', height: '75px' }}>
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
                            <Link className="nav-link h-100 d-flex align-items-center justify-content-center fw-semibold " href="/">
                                Consulta nutricional
                            </Link>
                        </li>
                        <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                            <Link className="nav-link h-100 d-flex align-items-center justify-content-center fw-semibold " href="/">
                                Valores
                            </Link>
                        </li>
                        <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                            <Link className="nav-link h-100 d-flex align-items-center justify-content-center fw-semibold" href="/">
                                Mediciones
                            </Link>
                        </li>
                        <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                            <Link className="nav-link h-100 d-flex align-items-center justify-content-center fw-semibold" href="/">
                                Artículos
                            </Link>
                        </li>
                        <li className="nav-item col-12 col-lg-2 d-flex align-items-center " style={{ height: '60px' }}>
                            <Link className="d-flex align-items-center justify-content-center fw-semibold btnAgendarSty"
                                aria-current="page" href="/">
                                Agenda aquí
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}