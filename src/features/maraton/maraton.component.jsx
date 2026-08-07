'use client'
//react
import { useMemo, useState } from 'react'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
//data y lógica
import { carreras, ritmoMETs, RITMO_POR_DEFECTO, COLOR_ICONO, COLOR_INK, COLOR_CARBOHIDRATO } from './maraton.constants'
import { funcionFinal } from './maraton.calculos'
//componentes
import { Card } from './components/card'
import { GraficoAporteEnergetico } from './components/grafico-aporte-energetico'
import { ResultadosCarrera } from './components/resultados-carrera'
import { GastoTotal } from './components/gasto-total'

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
