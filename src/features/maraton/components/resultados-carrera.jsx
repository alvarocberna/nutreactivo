import { COLOR_INK } from '../maraton.constants';
import { numero } from '../maraton.utils';

export function ResultadosCarrera({ tramos }) {
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
