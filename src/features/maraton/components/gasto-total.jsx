import { faFire, faBreadSlice, faDroplet } from '@fortawesome/free-solid-svg-icons'
import { COLOR_CARBOHIDRATO, COLOR_GRASA, COLOR_AZUL, COLOR_INK } from '../maraton.constants';
import { numero } from '../maraton.utils';
import { TarjetaGasto } from './tarjeta-gasto';

export function GastoTotal({ gastoTotal }) {
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
