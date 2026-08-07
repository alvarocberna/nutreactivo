'use client'

import { useId, useState } from 'react'
import {
    CHART_W, CHART_H, MARGEN, INNER_W, INNER_H,
    COLOR_CARBOHIDRATO, COLOR_GRASA, COLOR_INK, COLOR_MUTED, COLOR_GRID,
} from '../maraton.constants';
import { numero } from '../maraton.utils';

export function GraficoAporteEnergetico({ tramos }) {
    const [activo, setActivo] = useState(null); // { indice, tipo: 'carbohidrato' | 'grasa' }
    const idBase = useId();
    const idGradCarbo = `grad-carbo-${idBase}`;
    const idGradGrasa = `grad-grasa-${idBase}`;

    if (tramos.length === 0) {
        return (
            <div className="w-100">
                <svg
                    viewBox={`0 0 ${CHART_W} ${CHART_H}`}
                    width="100%"
                    height="auto"
                    role="img"
                    aria-label="Gráfico vacío, selecciona una carrera para ver el aporte energético por tramo"
                >
                    {[0, 50, 100].map((valor) => (
                        <g key={valor}>
                            <line
                                x1={MARGEN.left} x2={CHART_W - MARGEN.right}
                                y1={MARGEN.top + INNER_H - (valor / 100) * INNER_H}
                                y2={MARGEN.top + INNER_H - (valor / 100) * INNER_H}
                                stroke={COLOR_GRID} strokeWidth="1"
                            />
                            <text
                                x={MARGEN.left - 10} y={MARGEN.top + INNER_H - (valor / 100) * INNER_H}
                                textAnchor="end" dominantBaseline="middle"
                                fontSize="11" fill={COLOR_MUTED}
                            >
                                {valor}%
                            </text>
                        </g>
                    ))}
                    <text
                        x={MARGEN.left + INNER_W / 2} y={MARGEN.top + INNER_H / 2}
                        textAnchor="middle" dominantBaseline="middle"
                        fontSize="13" fill={COLOR_MUTED}
                    >
                        Selecciona una carrera para ver el gráfico
                    </text>
                </svg>
            </div>
        );
    }

    const posicionX = (indice) =>
        MARGEN.left + (tramos.length > 1 ? (indice / (tramos.length - 1)) * INNER_W : INNER_W / 2);
    const posicionY = (porcentaje) => MARGEN.top + INNER_H - (porcentaje / 100) * INNER_H;

    const puntoCarbohidrato = tramos.map((t, i) => ({ x: posicionX(i), y: posicionY(t.aportePorcentualCarbohidrato) }));
    const puntoGrasa = tramos.map((t, i) => ({ x: posicionX(i), y: posicionY(t.aportePorcentualGrasa) }));

    const trazarLinea = (puntos) => puntos.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

    // Borde inferior de la sombra: un mismo nivel para todas las columnas (a medio camino
    // entre el punto más bajo del gráfico y el eje 0%), así el degradé siempre llega a
    // opacidad 0 justo en el borde de la forma y no se nota un corte.
    const baseEje = MARGEN.top + INNER_H;
    const menorValor = Math.min(
        ...tramos.map((t) => Math.min(t.aportePorcentualCarbohidrato, t.aportePorcentualGrasa))
    );
    const baseSombra = posicionY(menorValor) + (baseEje - posicionY(menorValor)) * 0.55;

    const trazarArea = (puntos) => {
        const techo = puntos.map((p) => `L ${p.x} ${p.y}`).join(' ');
        const piso = [...puntos].reverse().map((p) => `L ${p.x} ${baseSombra}`).join(' ');
        return `M ${puntos[0].x} ${puntos[0].y} ${techo} ${piso} Z`;
    };

    const tramoActivo = activo ? tramos[activo.indice] : null;
    const puntoTooltip = activo
        ? (activo.tipo === 'carbohidrato' ? puntoCarbohidrato : puntoGrasa)[activo.indice]
        : null;

    return (
        <div className="w-100">
            {/* Leyenda */}
            <div className="d-flex flex-wrap align-items-center mb-2" style={{ gap: '20px' }}>
                <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                    <span style={{ display: 'inline-block', width: '18px', height: '3px', borderRadius: '2px', background: COLOR_CARBOHIDRATO }} />
                    <span style={{ color: COLOR_INK, fontSize: '14px' }}>Carbohidrato</span>
                </div>
                <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                    <span style={{ display: 'inline-block', width: '18px', height: '3px', borderRadius: '2px', background: COLOR_GRASA }} />
                    <span style={{ color: COLOR_INK, fontSize: '14px' }}>Grasa</span>
                </div>
            </div>

            <div style={{ position: 'relative', width: '100%' }}>
                <svg
                    viewBox={`0 0 ${CHART_W} ${CHART_H}`}
                    width="100%"
                    height="auto"
                    role="img"
                    aria-label="Aporte energético porcentual de carbohidrato y grasa por tramo de carrera"
                >
                    <defs>
                        <linearGradient id={idGradCarbo} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={COLOR_CARBOHIDRATO} stopOpacity="0.17" />
                            <stop offset="100%" stopColor={COLOR_CARBOHIDRATO} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id={idGradGrasa} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={COLOR_GRASA} stopOpacity="0.17" />
                            <stop offset="100%" stopColor={COLOR_GRASA} stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* grillas y eje Y (0%, 50%, 100%) */}
                    {[0, 50, 100].map((valor) => (
                        <g key={valor}>
                            <line
                                x1={MARGEN.left} x2={CHART_W - MARGEN.right}
                                y1={posicionY(valor)} y2={posicionY(valor)}
                                stroke={COLOR_GRID} strokeWidth="1"
                            />
                            <text
                                x={MARGEN.left - 10} y={posicionY(valor)}
                                textAnchor="end" dominantBaseline="middle"
                                fontSize="11" fill={COLOR_MUTED}
                            >
                                {valor}%
                            </text>
                        </g>
                    ))}

                    {/* eje X: 1 división por tramo */}
                    {tramos.map((t, i) => (
                        <text
                            key={t.distancia}
                            x={posicionX(i)} y={CHART_H - MARGEN.bottom + 22}
                            textAnchor="middle" fontSize="11" fill={COLOR_MUTED}
                        >
                            {t.distancia}
                        </text>
                    ))}
                    <text
                        x={MARGEN.left + INNER_W / 2} y={CHART_H - 4}
                        textAnchor="middle" fontSize="11" fill={COLOR_MUTED}
                    >
                        Kilómetro de carrera
                    </text>

                    {/* sombra en degradé bajo cada línea */}
                    <path d={trazarArea(puntoCarbohidrato)} fill={`url(#${idGradCarbo})`} stroke="none" />
                    <path d={trazarArea(puntoGrasa)} fill={`url(#${idGradGrasa})`} stroke="none" />

                    {/* líneas */}
                    <path d={trazarLinea(puntoCarbohidrato)} fill="none" stroke={COLOR_CARBOHIDRATO} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                    <path d={trazarLinea(puntoGrasa)} fill="none" stroke={COLOR_GRASA} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

                    {/* puntos carbohidrato */}
                    {tramos.map((t, i) => (
                        <g
                            key={`carbo-${t.distancia}`}
                            tabIndex={0}
                            role="button"
                            aria-label={`Tramo ${t.distancia}, carbohidrato ${Math.round(t.aportePorcentualCarbohidrato)}%`}
                            style={{ cursor: 'pointer', outline: 'none' }}
                            onMouseEnter={() => setActivo({ indice: i, tipo: 'carbohidrato' })}
                            onMouseLeave={() => setActivo(null)}
                            onFocus={() => setActivo({ indice: i, tipo: 'carbohidrato' })}
                            onBlur={() => setActivo(null)}
                        >
                            <circle cx={puntoCarbohidrato[i].x} cy={puntoCarbohidrato[i].y} r="20" fill="transparent" />
                            <circle cx={puntoCarbohidrato[i].x} cy={puntoCarbohidrato[i].y} r="15" fill={COLOR_CARBOHIDRATO} stroke="white" strokeWidth="2" />
                            <text
                                x={puntoCarbohidrato[i].x} y={puntoCarbohidrato[i].y}
                                textAnchor="middle" dominantBaseline="middle"
                                fontSize="9.5" fontWeight="700" fill="white"
                            >
                                {Math.round(t.aportePorcentualCarbohidrato)}%
                            </text>
                        </g>
                    ))}

                    {/* puntos grasa */}
                    {tramos.map((t, i) => (
                        <g
                            key={`grasa-${t.distancia}`}
                            tabIndex={0}
                            role="button"
                            aria-label={`Tramo ${t.distancia}, grasa ${Math.round(t.aportePorcentualGrasa)}%`}
                            style={{ cursor: 'pointer', outline: 'none' }}
                            onMouseEnter={() => setActivo({ indice: i, tipo: 'grasa' })}
                            onMouseLeave={() => setActivo(null)}
                            onFocus={() => setActivo({ indice: i, tipo: 'grasa' })}
                            onBlur={() => setActivo(null)}
                        >
                            <circle cx={puntoGrasa[i].x} cy={puntoGrasa[i].y} r="20" fill="transparent" />
                            <circle cx={puntoGrasa[i].x} cy={puntoGrasa[i].y} r="15" fill={COLOR_GRASA} stroke="white" strokeWidth="2" />
                            <text
                                x={puntoGrasa[i].x} y={puntoGrasa[i].y}
                                textAnchor="middle" dominantBaseline="middle"
                                fontSize="9.5" fontWeight="700" fill="white"
                            >
                                {Math.round(t.aportePorcentualGrasa)}%
                            </text>
                        </g>
                    ))}
                </svg>

                {/* tooltip */}
                {tramoActivo && puntoTooltip && (
                    <div
                        style={{
                            position: 'absolute',
                            left: `${(puntoTooltip.x / CHART_W) * 100}%`,
                            top: `${(puntoTooltip.y / CHART_H) * 100}%`,
                            transform: 'translate(-50%, -125%)',
                            background: 'white',
                            color: COLOR_INK,
                            border: `1px solid ${COLOR_GRID}`,
                            borderRadius: '8px',
                            boxShadow: '0 4px 16px rgba(47, 28, 106, 0.18)',
                            padding: '8px 12px',
                            fontSize: '12.5px',
                            whiteSpace: 'nowrap',
                            pointerEvents: 'none',
                            zIndex: 10,
                        }}
                    >
                        <div className="d-flex align-items-center fw-semibold mb-1" style={{ gap: '6px' }}>
                            <span style={{
                                display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%',
                                background: activo.tipo === 'carbohidrato' ? COLOR_CARBOHIDRATO : COLOR_GRASA,
                            }} />
                            {activo.tipo === 'carbohidrato' ? 'Carbohidrato' : 'Grasa'} · tramo {tramoActivo.distancia}
                        </div>
                        {activo.tipo === 'carbohidrato' ? (
                            <>
                                <div>Este tramo: <strong>{numero(tramoActivo.grCarbohidrato, 1)} g</strong> ({numero(tramoActivo.calCarbohidrato)} kcal)</div>
                                <div>Acumulado: <strong>{numero(tramoActivo.grCarbohidratoAcumulado, 1)} g</strong> ({numero(tramoActivo.calCarbohidratoAcumulado)} kcal)</div>
                            </>
                        ) : (
                            <>
                                <div>Este tramo: <strong>{numero(tramoActivo.grGrasa, 1)} g</strong> ({numero(tramoActivo.calGrasa)} kcal)</div>
                                <div>Acumulado: <strong>{numero(tramoActivo.grGrasaAcumulado, 1)} g</strong> ({numero(tramoActivo.calGrasaAcumulado)} kcal)</div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
