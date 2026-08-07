import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { COLOR_GRID, COLOR_INK, COLOR_MUTED } from '../maraton.constants';
import { hexToRgba } from '../maraton.utils';

export function TarjetaGasto({ color, icono, flip, valor, sub, etiqueta }) {
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
