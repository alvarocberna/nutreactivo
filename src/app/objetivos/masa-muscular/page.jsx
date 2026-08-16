
import './style.css';

export default function MasaMuscular() {
    return (

        <div className='container-fluid'>

            {/* SECCION 1: TITULO */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex m-auto'>
                    <h2 className='h1'>
                        Trabajando la ganancia de masa muscular
                    </h2>
                </div>
            </div>

            {/* SECCION 2: INTRO */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex flex-column flex-md-row align-items-center m-auto'>
                    <p className='h3 col-12 col-md-4 mb-3 me-lg-4' style={{ textAlign: 'left' }}>
                        ¿Cuándo es recomendado trabajar un periodo de ganancia de masa muscular?
                    </p>
                    <ul className='col-12 col-md-8' style={{ textAlign: 'justify' }}>
                        <li>Usuarios que busquen mejorar estética corporal y que actualmente cuenten con un
                            nivel adecuado de grasa corporal.</li>
                        <li>Deportistas que requieran un mejor rendimiento.</li>
                        <li>Usuarios con un nivel adecuado de masa muscular cuyo deporte les exige un mayor nivel.</li>
                    </ul>
                </div>
            </div>

            {/* SECCIÓN 3: TIEMPO PROYECTADO */}
            <p className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto h3 mb-5'>Ruta de progreso</p>
            <div className='row col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto showLg' style={{ height: '450px' }}>

                <div className='col-12 d-flex flex-column align-items-center mt-5' style={{ position: 'relative' }}>
                    {/* linea */}
                    <div className='col-10' style={{ height: '5px', backgroundColor: '#d6d6d5' }}></div>
                    {/* circulitos */}
                    <div className='col-10 d-flex' style={{ position: 'absolute', top: '-50px' }}>
                        <div className='col-2 '>
                            <div className=' d-flex justify-content-center align-items-center text-white fw-bold shadow'
                                style={{ height: '100px', width: '100px', borderRadius: '100px', backgroundColor: '#F5AA38' }}>
                                <p className='text-center mb-0'>
                                    Primera<br />sesión
                                </p>
                            </div>
                        </div>
                        <div className='col-3 '></div>
                        <div className='col-2 '>
                            <div className=' d-flex justify-content-center align-items-center text-white fw-bold shadow'
                                style={{ height: '100px', width: '100px', borderRadius: '100px', backgroundColor: '#0098EB' }}>
                                <p className='text-center mb-0'>
                                    Segunda<br />sesión
                                </p>
                            </div>
                        </div>
                        {/* <div className='col-2 '></div> */}
                        <div className='col-3'></div>
                        <div className='col-2  d-flex justify-content-end'>
                            <div className='d-flex justify-content-center align-items-center text-white fw-bold shadow'
                                style={{ height: '100px', width: '100px', borderRadius: '100px', backgroundColor: '#00bf63' }}>
                                <p className='text-center mb-0'>
                                    Tercera<br />sesión
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* linea vertical */}
                    <div className='col-10 d-flex' style={{ position: 'absolute', top: '50px' }}>
                        <div className='col-2 ' style={{ position: 'relative' }}>
                            <div className=' d-flex justify-content-center align-items-center text-white fw-bold'
                                style={{ height: '100px', width: '3px', backgroundColor: '#d6d6d5', position: 'absolute', left: '50px' }}>
                            </div>
                        </div>
                        <div className='col-3 '></div>
                        <div className='col-2 ' style={{ position: 'relative' }}>
                            <div className=' d-flex justify-content-center align-items-center text-white fw-bold'
                                style={{ height: '100px', width: '3px', backgroundColor: '#d6d6d5', position: 'absolute', left: '50px' }}>
                            </div>
                        </div>
                        {/* <div className='col-2 '></div> */}
                        <div className='col-3 '></div>
                        <div className='col-2  d-flex justify-content-end' style={{ position: 'relative' }}>
                            <div className=' d-flex justify-content-center align-items-center text-white fw-bold'
                                style={{ height: '100px', width: '3px', backgroundColor: '#d6d6d5', position: 'absolute', right: '50px' }}>
                            </div>
                        </div>
                    </div>
                    {/* Cuaadros informativos */}
                    <div className='col-10 d-flex' style={{ position: 'absolute', top: '150px' }}>
                        <div className='col-2 ' style={{ position: 'relative' }}>
                            <div className=' rounded d-flex justify-content-center align-items-center px-2 py-1'
                                style={{ fontSize: '14px', textAlign: 'justify', height: '120px', width: '220px', border: '3px solid #f5a938', position: 'absolute', left: '-55px' }}>
                                Se realiza una primera evaluación física para levantar un diagnóstico y establecer el
                                plan a seguir.
                            </div>
                        </div>
                        <div className='col-3'></div>
                        <div className='col-2 ' style={{ position: 'relative' }}>
                            <div className=' rounded d-flex justify-content-center align-items-center px-2 py-1'
                                style={{ fontSize: '12px', textAlign: 'justify', height: '120px', width: '220px', border: '3px solid #0494ea', position: 'absolute', left: '-55px' }}>
                                Alrededor del primer mes. Se da una primera mirada a la composición corporal en la búsqueda
                                de un crecimiento armónico. El objetivo principal es evaluar y reajustar las estrategias establecidas.

                            </div>
                        </div>
                        {/* <div className='col-2 '></div> */}
                        <div className='col-3 '></div>
                        <div className='col-2  d-flex justify-content-end' style={{ position: 'relative' }}>
                            <div className=' rounded d-flex justify-content-center align-items-center px-2 py-1'
                                style={{ fontSize: '12px', textAlign: 'justify', height: '120px', width: '220px', border: '3px solid #00bf63', position: 'absolute', right: '-60px' }}>
                                Alrededor de los 3 meses. Se proyecta lograr cambios importantes a nivel de masa muscular,
                                pudiendo continuar en este periodo si los indicadores físicos así lo sugieren.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECCIÓN 3.2: TIEMPO PROYECTADO VERTICAL*/}
            <div className='row col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto hideLg' style={{ height: '580px' }}>

                <div className='col-12 col-sm-6 col-md-6 d-flex' style={{ position: 'relative' }}>
                    {/* linea */}
                    <div style={{ width: '3px', height: '400px', backgroundColor: '#d6d6d5', position: 'absolute', left: '20px' }}></div>
                    {/* circulitos */}
                    <div className='d-flex flex-column' style={{ position: 'absolute', left: '-28px' }}>
                        <div className='' style={{ height: '100px' }}>
                            <div className=' d-flex justify-content-center align-items-center text-white fw-bold shadow'
                                style={{ height: '100px', width: '100px', borderRadius: '100px', backgroundColor: '#F5AA38' }}>
                                Primera <br /> sesión
                            </div>
                        </div>
                        <div className='' style={{ height: '50px' }}></div>
                        <div className='' style={{ height: '100px' }}>
                            <div className=' d-flex justify-content-center align-items-center text-white fw-bold shadow'
                                style={{ height: '100px', width: '100px', borderRadius: '100px', backgroundColor: '#0098EB' }}>
                                Segunda <br /> sesión
                            </div>
                        </div>
                        <div className='' style={{ height: '50px' }}></div>
                        <div className='' style={{ height: '50px' }}></div>
                        <div className='d-flex justify-content-end' style={{ height: '100px' }}>
                            <div className='d-flex justify-content-center align-items-center text-white fw-bold shadow'
                                style={{ height: '100px', width: '100px', borderRadius: '100px', backgroundColor: '#00bf63' }}>
                                Tercera <br /> sesión
                            </div>
                        </div>
                    </div>
                    {/* linea vertical */}
                    <div className='d-flex flex-column' style={{ position: 'absolute', left: '72px' }}>
                        <div className='d-flex align-items-center' style={{ position: 'relative', height: '100px' }}>
                            <div className=''
                                style={{ height: '3px', width: '30px', backgroundColor: '#d6d6d5', position: 'absolute' }}>
                            </div>
                        </div>
                        <div className='' style={{ height: '50px' }}></div>
                        <div className='d-flex align-items-center' style={{ position: 'relative', height: '100px' }}>
                            <div className=''
                                style={{ height: '3px', width: '30px', backgroundColor: '#d6d6d5', position: 'absolute' }}>
                            </div>
                        </div>
                        <div className='' style={{ height: '50px' }}></div>
                        <div className='' style={{ height: '50px' }}></div>
                        <div className='d-flex align-items-center' style={{ position: 'relative', height: '100px' }}>
                            <div className=' d-flex justify-content-center align-items-center text-white fw-bold'
                                style={{ height: '3px', width: '30px', backgroundColor: '#d6d6d5', position: 'absolute' }}>
                            </div>
                        </div>
                    </div>
                    {/* Cuaadros informativos */}
                    <div className='d-flex flex-column' style={{ position: 'absolute', left: '100px' }}>
                        <div className='d-flex align-items-center' style={{ position: 'relative', height: '100px' }}>
                            <div className='rounded d-flex justify-content-center align-items-center px-2 py-1'
                                style={{ fontSize: '14px', textAlign: 'justify', height: '120px', width: '220px', border: '3px solid #f5a938', position: 'absolute' }}>
                                Se realiza una primera evaluación física para levantar un diagnóstico y establecer el
                                plan a seguir.
                            </div>
                        </div>
                        <div className='' style={{ height: '50px' }}></div>
                        <div className='d-flex align-items-center' style={{ position: 'relative', height: '100px' }}>
                            <div className=' rounded d-flex justify-content-center align-items-center px-2 py-1'
                                style={{ fontSize: '12px', textAlign: 'justify', height: '120px', width: '220px', border: '3px solid #0494ea', position: 'absolute' }}>
                                Alrededor del primer mes, se da una primera mirada a la composición corporal en la búsqueda
                                crecimiento armónico. El objetivo principal es evaluar y reajustar las estrategias establecidas.
                            </div>
                        </div>
                        <div className='' style={{ height: '50px' }}></div>
                        <div className='' style={{ height: '50px' }}></div>
                        <div className='d-flex align-items-center' style={{ position: 'relative', height: '100px' }}>
                            <div className=' rounded d-flex justify-content-center align-items-center px-2 py-1'
                                style={{ fontSize: '12px', textAlign: 'justify', height: '120px', width: '220px', border: '3px solid #00bf63', position: 'absolute' }}>
                                Alrededor de los 3 meses, se proyecta lograr cambios importantes a nivel de masa muscular,
                                pudiendo continuar en este periodo si los indicadores físicos así lo sugieren.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECCION 4: INTRO */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex flex-column m-auto'>
                    <p className='h3'>Resultados esperados </p>
                    <p style={{ textAlign: 'justify' }}>
                        Al trabajar un periodo de ganancia de masa muscular la tasa de aumento dependerá del nivel de entrenamiento
                        de cada usuario
                        (iniciante, intermedio, avanzado). Sin embargo, en promedio se puede proyectar una ganancia de un 1% del peso corporal
                        por mes, lográndose cambios visibles en la composición corporal a partir de los primeros 2-3 meses en adelante.
                    </p>
                </div>
            </div>

        </div>

    );
}