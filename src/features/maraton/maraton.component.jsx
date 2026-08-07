'use client'
//react
import { useId, useMemo, useState } from 'react'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faFire, faBreadSlice, faDroplet } from '@fortawesome/free-solid-svg-icons'

const ritmoMETs = [
  { ritmo: '8:00/km', minPorKm: 8.0 ,velocidad: '7.5 km/h', MET: 8.3 },
  { ritmo: '7:30/km', minPorKm: 7.5 ,velocidad: '8.0 km/h', MET: 8.3 },
  { ritmo: '7:00/km', minPorKm: 7.0 ,velocidad: '8.6 km/h', MET: 9.0 },
  { ritmo: '6:30/km', minPorKm: 6.5 ,velocidad: '9.2 km/h', MET: 9.3 },
  { ritmo: '6:00/km', minPorKm: 6.0 ,velocidad: '10.0 km/h', MET: 9.8 },
  { ritmo: '5:30/km', minPorKm: 5.5 ,velocidad: '10.9 km/h', MET: 10.5 },
  { ritmo: '5:00/km', minPorKm: 5.0 ,velocidad: '12.0 km/h', MET: 11.8 },
  { ritmo: '4:30/km', minPorKm: 4.5 ,velocidad: '13.3 km/h', MET: 12.8 },
  { ritmo: '4:00/km', minPorKm: 4.0 ,velocidad: '15.0 km/h', MET: 14.5 },
  { ritmo: '3:30/km', minPorKm: 3.3 ,velocidad: '17.1 km/h', MET: 18.0 },
  { ritmo: '3:00/km', minPorKm: 3.0 ,velocidad: '20.0 km/h', MET: 19.8 },
];

//
const carreras = [
    { 
        carrera: '10K', 
        distancia: 10,
        //aporte porcentual de cada macronutriente por distancia
        //corredor recreativo suele correr un 10K entre 70–90% del VO₂max
        aporteEnergeticoPorcentual: {
            km1: {carbohidrato: 90, grasas: 10}, 
            km2: {carbohidrato: 88, grasas: 12}, 
            km3: {carbohidrato: 87, grasas: 13}, 
            km4: {carbohidrato: 86, grasas: 14}, 
            km5: {carbohidrato: 85, grasas: 15}, 
            km6: {carbohidrato: 84, grasas: 16}, 
            km7: {carbohidrato: 84, grasas: 16}, 
            km8: {carbohidrato: 83, grasas: 17}, 
            km9: {carbohidrato: 82, grasas: 18}, 
            km10: {carbohidrato: 82, grasas: 18}, 
        }
    },
    { 
        carrera: '21K', 
        distancia: 21,
        //corredor recreativo suele correr un 10K entre 65–85% del VO₂max
        aporteEnergeticoPorcentual: {
            km1:  { carbohidrato: 85, grasas: 15 },
            km3:  { carbohidrato: 84, grasas: 16 },
            km5:  { carbohidrato: 82, grasas: 18 },
            km8:  { carbohidrato: 81, grasas: 19 },
            km10: { carbohidrato: 80, grasas: 20 },
            km13: { carbohidrato: 78, grasas: 22 },
            km15: { carbohidrato: 77, grasas: 23 },
            km18: { carbohidrato: 76, grasas: 24 },
            km20: { carbohidrato: 75, grasas: 25 },
            km21: { carbohidrato: 74, grasas: 26 },
        }
    },
    { 
        carrera: '42K', 
        distancia: 42,
        //corredor recreativo suele correr un 10K entre 60–80% del VO₂max
        aporteEnergeticoPorcentual: {
            km1:  { carbohidrato: 80, grasas: 20 },
            km5:  { carbohidrato: 79, grasas: 21 },
            km10: { carbohidrato: 78, grasas: 22 },
            km15: { carbohidrato: 76, grasas: 24 },
            km20: { carbohidrato: 74, grasas: 26 },
            km25: { carbohidrato: 72, grasas: 28 },
            km30: { carbohidrato: 70, grasas: 30 },
            km35: { carbohidrato: 66, grasas: 34 },
            km40: { carbohidrato: 62, grasas: 38 },
            km42: { carbohidrato: 60, grasas: 40 },
        }
    },
]

export const tasaSudor = {
  "<60": {
    ">7:00": 0.6,
    "6:00-6:59": 0.7,
    "5:00-5:59": 0.8,
    "4:00-4:59": 0.9,
    "<4:00": 1.0,
  },

  "60-75": {
    ">7:00": 0.7,
    "6:00-6:59": 0.8,
    "5:00-5:59": 0.9,
    "4:00-4:59": 1.0,
    "<4:00": 1.1,
  },

  "75-90": {
    ">7:00": 0.8,
    "6:00-6:59": 0.9,
    "5:00-5:59": 1.0,
    "4:00-4:59": 1.1,
    "<4:00": 1.2,
  },

  ">90": {
    ">7:00": 0.9,
    "6:00-6:59": 1.0,
    "5:00-5:59": 1.1,
    "4:00-4:59": 1.2,
    "<4:00": 1.3,
  },
};

const obtenerRangoPeso = (peso) => {
    if (peso < 60) return '<60';
    if (peso <= 75) return '60-75';
    if (peso <= 90) return '75-90';
    return '>90';
}

const obtenerRangoRitmo = (minPorKm) => {
    if (minPorKm >= 7) return '>7:00';
    if (minPorKm >= 6) return '6:00-6:59';
    if (minPorKm >= 5) return '5:00-5:59';
    if (minPorKm >= 4) return '4:00-4:59';
    return '<4:00';
}

const perdidaLiquidoCarrera = ({ peso, distancia, minPorKm }) => {
    const tasaLitrosHora = tasaSudor[obtenerRangoPeso(peso)][obtenerRangoRitmo(minPorKm)];
    const tiempoHoras = (distancia * minPorKm) / 60;
    return tasaLitrosHora * tiempoHoras;
}

const energiaCarrera = ({ met, peso, distancia, minPorKm }) => {
    const conversionOx = 3.5;
    const conversionEnergia = 4.8;
    const tiempo = distancia * minPorKm;
    const mlOxigeno = met * conversionOx * peso * tiempo;
    const litrosOxigeno = mlOxigeno/1000;
    const energiaCarrera = litrosOxigeno * conversionEnergia;
    return energiaCarrera;
}


const funcionFinal = ({ nombreCarrera, met, peso, minPorKm }) => {
    const carrera = carreras.find((c) => c.carrera === nombreCarrera);
    if (!carrera) {
        throw new Error(`Carrera no encontrada: ${nombreCarrera}`);
    }

    const energiaTotal = energiaCarrera({ met, peso, distancia: carrera.distancia, minPorKm });
    const energiaPorKm = energiaTotal / carrera.distancia;

    const tramos = {};
    let distanciaAnterior = 0;
    let energiaAcumulada = 0;
    let calCarbohidratoAcumulado = 0;
    let calGrasaAcumulado = 0;

    Object.keys(carrera.aporteEnergeticoPorcentual).forEach((km, index) => {
        const distanciaTramo = Number(km.replace('km', ''));
        const distanciaSegmento = distanciaTramo - distanciaAnterior;
        const { carbohidrato: aportePorcentualCarbohidrato, grasas: aportePorcentualGrasa } = carrera.aporteEnergeticoPorcentual[km];

        const energia = distanciaSegmento * energiaPorKm;
        energiaAcumulada += energia;

        const calCarbohidrato = energia * (aportePorcentualCarbohidrato / 100);
        const calGrasa = energia * (aportePorcentualGrasa / 100);
        calCarbohidratoAcumulado += calCarbohidrato;
        calGrasaAcumulado += calGrasa;

        tramos[`tramo${index + 1}`] = {
            distancia: `${distanciaTramo}km`,
            energia,
            energiaAcumulada,
            aportePorcentualCarbohidrato,
            aportePorcentualGrasa,
            calCarbohidrato,
            calCarbohidratoAcumulado,
            grCarbohidrato: calCarbohidrato / 4,
            grCarbohidratoAcumulado: calCarbohidratoAcumulado / 4,
            calGrasa,
            calGrasaAcumulado,
            grGrasa: calGrasa / 9,
            grGrasaAcumulado: calGrasaAcumulado / 9,
        };

        distanciaAnterior = distanciaTramo;
    });

    return {
        ...tramos,
        gastoTotal: {
            energia: energiaTotal,
            tiempo: carrera.distancia * minPorKm,
            calCarbohidrato: calCarbohidratoAcumulado,
            calGrasa: calGrasaAcumulado,
            perdidaLiquido: perdidaLiquidoCarrera({ peso, distancia: carrera.distancia, minPorKm }),
        },
    };
}

const RITMO_POR_DEFECTO = '5:00/km';

const COLOR_CARBOHIDRATO = '#ee3246';
const COLOR_GRASA = '#f69523';
const COLOR_INK = '#2F1C6A';
const COLOR_MUTED = '#767676';
const COLOR_GRID = '#E1E1EC';
const COLOR_ICONO = '#673DE6';
const COLOR_AZUL = '#0ea5e9';

const numero = (valor, decimales = 0) =>
    Number(valor).toLocaleString('es-CL', { minimumFractionDigits: decimales, maximumFractionDigits: decimales });

const hexToRgba = (hex, alpha) => {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Dimensiones del svg (viewBox). El chart se escala de forma responsiva vía porcentajes.
const CHART_W = 760;
const CHART_H = 360;
const MARGEN = { top: 28, right: 24, bottom: 44, left: 48 };
const INNER_W = CHART_W - MARGEN.left - MARGEN.right;
const INNER_H = CHART_H - MARGEN.top - MARGEN.bottom;

function Card({ children }) {
    return (
        <div
            className="w-100"
            style={{
                background: 'white',
                border: '1px solid #E7E6F2',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(47, 28, 106, 0.06)',
            }}
        >
            {children}
        </div>
    );
}

function GraficoAporteEnergetico({ tramos }) {
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

function ResultadosCarrera({ tramos }) {
    return (
        <div className="w-100">
            {/* vista de tabla, accesible sin hover */}
            <details>
                <summary style={{ cursor: 'pointer', color: COLOR_INK, fontSize: '14px' }}>Ver datos en tabla</summary>
                <div className="table-responsive mt-2">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Tramo</th>
                                <th>% Carbohidrato</th>
                                <th>Carbohidrato tramo</th>
                                <th>Carbohidrato acumulado</th>
                                <th>% Grasa</th>
                                <th>Grasa tramo</th>
                                <th>Grasa acumulada</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tramos.map((t) => (
                                <tr key={t.distancia}>
                                    <td>{t.distancia}</td>
                                    <td>{Math.round(t.aportePorcentualCarbohidrato)}%</td>
                                    <td>{numero(t.grCarbohidrato, 1)} g ({numero(t.calCarbohidrato)} kcal)</td>
                                    <td>{numero(t.grCarbohidratoAcumulado, 1)} g ({numero(t.calCarbohidratoAcumulado)} kcal)</td>
                                    <td>{Math.round(t.aportePorcentualGrasa)}%</td>
                                    <td>{numero(t.grGrasa, 1)} g ({numero(t.calGrasa)} kcal)</td>
                                    <td>{numero(t.grGrasaAcumulado, 1)} g ({numero(t.calGrasaAcumulado)} kcal)</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </details>
        </div>
    );
}

function TarjetaGasto({ color, icono, flip, valor, sub, etiqueta }) {
    return (
        <div
            className="d-flex flex-column align-items-center text-center"
            style={{
                flex: '1 1 130px',
                background: 'white',
                border: `1px solid ${COLOR_GRID}`,
                borderBottom: `3px solid ${color}`,
                borderRadius: '12px',
                padding: '16px 14px',
            }}
        >
            <span
                className="d-flex align-items-center justify-content-center mb-2"
                style={{ width: '40px', height: '40px', borderRadius: '50%', background: hexToRgba(color, 0.15), color, fontSize: '16px' }}
            >
                <FontAwesomeIcon icon={icono} flip={flip} />
            </span>
            <div className="d-flex flex-column justify-content-center" style={{ minHeight: '44px' }}>
                <div className="fw-bold" style={{ fontSize: '18px', color: COLOR_INK }}>{valor}</div>
                {sub && <div style={{ fontSize: '12.5px', color: COLOR_MUTED }}>{sub}</div>}
            </div>
            <div className="mt-1" style={{ fontSize: '13px', color: COLOR_MUTED }}>{etiqueta}</div>
        </div>
    );
}

function GastoTotal({ gastoTotal }) {
    return (
        <div className="w-100 mb-4">
            <h5 className="mb-3" style={{ color: COLOR_INK }}>Gasto total</h5>
            <div className="d-flex flex-wrap" style={{ gap: '28px' }}>
                <TarjetaGasto
                    color={COLOR_CARBOHIDRATO}
                    icono={faFire}
                    valor={`${numero(gastoTotal.energia)} kcal`}
                    etiqueta="Energía total"
                />
                <TarjetaGasto
                    color={COLOR_CARBOHIDRATO}
                    icono={faBreadSlice}
                    valor={`${numero(gastoTotal.grCarbohidrato)} g`}
                    sub={`(${numero(gastoTotal.calCarbohidrato)} kcal)`}
                    etiqueta="Carbohidratos"
                />
                <TarjetaGasto
                    color={COLOR_GRASA}
                    icono={faDroplet}
                    flip="vertical"
                    valor={`${numero(gastoTotal.grGrasa)} g`}
                    sub={`(${numero(gastoTotal.calGrasa)} kcal)`}
                    etiqueta="Grasas"
                />
                <TarjetaGasto
                    color={COLOR_AZUL}
                    icono={faDroplet}
                    valor={`${numero(gastoTotal.perdidaLiquido, 1)} L`}
                    etiqueta="Líquido"
                />
            </div>
        </div>
    );
}

export function ProyeccionMaraton() {
    const [peso, setPeso] = useState(0);
    const [nombreCarrera, setNombreCarrera] = useState('');
    const [ritmo, setRitmo] = useState('');
    const [datosAplicados, setDatosAplicados] = useState(null);
    const [errorValidacion, setErrorValidacion] = useState('');

    const handleAplicar = (event) => {
        event.preventDefault();
        const pesoNumerico = Number(peso);
        if (!nombreCarrera || !Number.isFinite(pesoNumerico) || pesoNumerico <= 0) {
            setErrorValidacion('Completa el peso y la carrera para ver el gráfico.');
            return;
        }
        setErrorValidacion('');
        setDatosAplicados({ peso: pesoNumerico, nombreCarrera, ritmo });
    };

    const ritmoSeleccionado = useMemo(() => {
        if (!datosAplicados) return null;
        return datosAplicados.ritmo
            ? ritmoMETs.find((r) => r.ritmo === datosAplicados.ritmo)
            : ritmoMETs.find((r) => r.ritmo === RITMO_POR_DEFECTO);
    }, [datosAplicados]);

    const resultado = useMemo(() => {
        if (!datosAplicados || !ritmoSeleccionado) return null;
        return funcionFinal({
            nombreCarrera: datosAplicados.nombreCarrera,
            met: ritmoSeleccionado.MET,
            peso: datosAplicados.peso,
            minPorKm: ritmoSeleccionado.minPorKm,
        });
    }, [datosAplicados, ritmoSeleccionado]);

    const tramos = useMemo(() => {
        if (!resultado) return [];
        return Object.keys(resultado)
            .filter((clave) => clave.startsWith('tramo'))
            .map((clave) => resultado[clave]);
    }, [resultado]);

    const gastoTotal = useMemo(() => {
        if (!resultado) return null;
        const { energia, calCarbohidrato, calGrasa, perdidaLiquido } = resultado.gastoTotal;
        return {
            energia,
            calCarbohidrato,
            calGrasa,
            perdidaLiquido,
            grCarbohidrato: calCarbohidrato / 4,
            grGrasa: calGrasa / 9,
        };
    }, [resultado]);

    return (
        <div className="d-flex flex-column">
            <div className="m-auto d-flex flex-column col-12" style={{ gap: '24px' }}>
                {/* Card: inputs */}
                <Card>
                    <form className="row g-3 align-items-end" onSubmit={handleAplicar}>
                        <div className="col-12 col-md-3">
                            <label className="w-100 form-label">Peso (kg)</label>
                            <input
                                className="w-100 form-control" type="number" min="0" value={peso}
                                onChange={(e) => setPeso(e.target.value)}
                            />
                        </div>
                        <div className="col-12 col-md-3">
                            <label className="w-100 form-label">Carrera</label>
                            <select className="w-100 form-select" value={nombreCarrera} onChange={(e) => setNombreCarrera(e.target.value)}>
                                <option value="">Selecciona una carrera</option>
                                {carreras.map((c) => (
                                    <option key={c.carrera} value={c.carrera}>{c.carrera}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-12 col-md-3">
                            <label className="w-100 form-label">Ritmo (opcional)</label>
                            <select className="w-100 form-select" value={ritmo} onChange={(e) => setRitmo(e.target.value)}>
                                <option value="">Selecciona un ritmo</option>
                                {ritmoMETs.map((r) => (
                                    <option key={r.ritmo} value={r.ritmo}>{r.ritmo}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-12 col-md-3">
                            <button type="submit" className="w-100 btn text-white fw-semibold" style={{ background: COLOR_ICONO }}>
                                Aplicar
                            </button>
                        </div>
                    </form>
                    {errorValidacion && (
                        <div className="mt-2" style={{ color: COLOR_CARBOHIDRATO, fontSize: '13px' }}>{errorValidacion}</div>
                    )}
                </Card>

                {/* Card: gráfico */}
                <Card>
                    <div className="d-flex align-items-center mb-3" style={{ gap: '12px' }}>
                        <span
                            className="d-flex align-items-center justify-content-center"
                            style={{ width: '42px', height: '42px', borderRadius: '50%', background: COLOR_ICONO, color: 'white', flexShrink: 0 }}
                        >
                            <FontAwesomeIcon icon={faBolt} />
                        </span>
                        <h4 className="mb-0" style={{ color: COLOR_INK }}>
                            Gasto de la carrera
                            {datosAplicados && <span style={{ color: COLOR_CARBOHIDRATO }}> — {datosAplicados.nombreCarrera}</span>}
                        </h4>
                    </div>
                    {gastoTotal && <GastoTotal gastoTotal={gastoTotal} />}
                    <h5 className="mb-3" style={{ color: COLOR_INK }}>Gasto por tramo</h5>
                    <GraficoAporteEnergetico tramos={tramos} />
                </Card>

                {/* Card: resultados */}
                {tramos.length > 0 && (
                    <Card>
                        <ResultadosCarrera tramos={tramos} />
                    </Card>
                )}
            </div>
        </div>
    );
}