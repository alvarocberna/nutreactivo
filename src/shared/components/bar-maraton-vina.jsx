'use client'

import React, { useState, useEffect } from 'react';
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
        <div className="maratonCountdownUnit d-flex flex-column align-items-center justify-content-center">
            <span className="maratonCountdownValue" style={{ color: 'white', fontWeight: '700' }}>
                {value}
            </span>
            <span className="maratonCountdownLabel" style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
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
                            <CountdownUnit value={timeLeft.days} label='dias' />
                            <CountdownUnit value={timeLeft.hours} label='horas' />
                            <CountdownUnit value={timeLeft.minutes} label='min' />
                            <CountdownUnit value={timeLeft.seconds} label='seg' />
                            {/* 3 - TEXTO 2 */}
                            <span className="maratonBarText" style={{ color: 'white', fontWeight: '700', textTransform: 'uppercase' }}>
                                para la maraton de viña
                            </span>
                            {/* 4 - BUTTON */}
                            <button
                                type='button'
                                className="maratonBarBtn"
                                style={{
                                    background: '#FFD100',
                                    color: '#1a1a1a',
                                    border: 'none',
                                    fontWeight: '700',
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap'
                                }}>
                                PREPÁRATE DESDE YA
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
