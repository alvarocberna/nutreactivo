import { carreras, tasaSudor } from './maraton.constants';

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

export const funcionFinal = ({ nombreCarrera, met, peso, minPorKm }) => {
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
