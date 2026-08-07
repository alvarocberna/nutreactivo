export const numero = (valor, decimales = 0) =>
    Number(valor).toLocaleString('es-CL', { minimumFractionDigits: decimales, maximumFractionDigits: decimales });

export const hexToRgba = (hex, alpha) => {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
