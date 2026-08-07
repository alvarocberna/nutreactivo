export const ritmoMETs = [
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
export const carreras = [
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

export const RITMO_POR_DEFECTO = '5:00/km';

export const COLOR_CARBOHIDRATO = '#ee3246';
export const COLOR_GRASA = '#f69523';
export const COLOR_INK = '#2F1C6A';
export const COLOR_MUTED = '#767676';
export const COLOR_GRID = '#E1E1EC';
export const COLOR_ICONO = '#673DE6';
export const COLOR_AZUL = '#0ea5e9';

// Dimensiones del svg (viewBox). El chart se escala de forma responsiva vía porcentajes.
export const CHART_W = 760;
export const CHART_H = 360;
export const MARGEN = { top: 28, right: 24, bottom: 44, left: 48 };
export const INNER_W = CHART_W - MARGEN.left - MARGEN.right;
export const INNER_H = CHART_H - MARGEN.top - MARGEN.bottom;
