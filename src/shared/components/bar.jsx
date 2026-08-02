'use client'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import "../../app/globals.css";

export default function Bar() {
    return (
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
    )
}