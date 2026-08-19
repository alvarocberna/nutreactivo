'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "../../app/globals.css";

const MARATON_DATE = new Date('2026-10-04T07:00:00-03:00');

function getTimeRemaining() {
    const total = Math.max(0, MARATON_DATE.getTime() - Date.now());
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { days, hours, minutes, seconds };
}

function CountdownUnit({ value, label }) {
    return (
        <div className="maratonCountdownUnit d-flex flex-row align-items-baseline justify-content-center">
            <span className="maratonCountdownValue" style={{ color: 'white', fontWeight: '700' }}>
                {value}
            </span>
            <span className="maratonCountdownLabel" style={{ color: 'white', textTransform: 'uppercase' }}>
                {label}
            </span>
        </div>
    )
}

export default function BarMaratonVina() {
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        setTimeLeft(getTimeRemaining());
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='navbarTopBarMaratonSty maratonBarSty container-fluid w-100 d-flex justify-content-center'>
            <div className='row w-100'>
                <div className='maratonBarContent col d-flex align-items-center justify-content-center flex-wrap'>
                    {timeLeft && (
                        <>
                            {/* 1 TEXTO 1 */}
                            <span className="maratonBarText" style={{ color: 'white', fontWeight: '700', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>
                                <span role='img' aria-label='fuego'>🔥</span>
                                Falta
                            </span>
                            {/* 2 - COUNTDOWN */}
                            <CountdownUnit value={timeLeft.days} label='d' />
                            <CountdownUnit value={timeLeft.hours} label='h' />
                            <CountdownUnit value={timeLeft.minutes} label='m' />
                            <CountdownUnit value={timeLeft.seconds} label='s' />
                            {/* 3 - TEXTO 2 */}
                            <span className="maratonBarText" style={{ color: 'white', fontWeight: '700', textTransform: 'uppercase' }}>
                                para la maratón de viña
                            </span>
                            {/* 4 - BUTTON */}
                            <Link
                                href='/proyeccion-carrera'
                                className="maratonBarBtn"
                                style={{
                                    background: '#FFD100',
                                    color: '#1a1a1a',
                                    border: 'none',
                                    fontWeight: '700',
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    textDecoration: 'none'
                                }}>
                                PROYECTA TU CARRERA
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
