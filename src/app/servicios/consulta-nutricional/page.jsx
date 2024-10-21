
import Link from "next/link";
import ImgPlan from '../../../media/img_plan_nutricional.png';
import Image from "next/image";
import EvFisica from '../../antropometria/evaluacion-fisica/page.jsx';
import { Valores } from '../../../app/page.jsx';

export default function ConsultaNutricional() {
    return (
        <div className="d-flex flex-column">
            <div className="m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9">
                <h2 className="col-12 h1 mb-5">
                    Consulta Nutricional
                </h2>

                <div className='col-12 d-flex flex-column-reverse flex-md-row  justify-content-between m-auto mb-5'>
                    <div className='col-12 col-md-5 col-lg-4 mb-3 mb-md-0 d-flex justify-content-center '>
                        <iframe height="350px" className='col-12' style={{ borderRadius: '20px' }}
                            src="https://youtube.com/embed/3m74gRagBaQ">
                        </iframe>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 d-flex flex-column justify-content-center '>
                        <h4 className='h3'>Estableciendo un plan para alcanzar tus objetivos</h4>
                        <p className='psty' style={{ textAlign: 'justify' }}>
                            La consulta nutricional tiene como objetivo establecer las estrategias nutricionales
                            más adecuadas para el logro de los objetivos de cada persona, ya sean estos orientados
                            al rendimiento deportivo, composición corporal o salud.
                        </p>
                        <Link href='/objetivos/como-definir-objetivos' className="h5"
                            style={{ textDecoration: 'none', color: '#673DE6' }}>¿Cómo definir mis objetivos?</Link>
                    </div>
                </div>

                <div className='col-12 d-flex flex-column mb-5'>
                    <h3 className='h3 mb-3'>Plan nutricionl personalizado</h3>
                    <div className='d-flex flex-column flex-lg-row justify-content-between align-items-start'>
                        <div className='col-12 col-lg-6 '>
                            <p>El plan de alimentación está planificado en base a las características individules
                                de cada deportista, considerando su gasto de energía diario, y pensado para ser aplicado
                                con facilidad en el día a día.</p>
                            <ul>
                                <p className='fw-bold mb-0'>¿Que incluye cada plan?</p>
                                <li>Requerimientos energéticos y de macronutrientes como proteínas, carbohidratos y lípidos diarios.</li>
                                <li>Prescripción de alimentos por tiempo de comida, junto a 5 ejemplos de preparaciones.</li>
                                <li>Prescripción de recomendaciones deportivas para diferentes días de entrenamiento y días de competencias.</li>
                                <li>Material complementario como videos explicativos.</li>
                            </ul>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            <Image className='col-7 col-sm-7 col-md-4 col-lg-6 col-xl-5 rounded shadow' src={ImgPlan}
                                style={{ objectFit: 'contain', height: '350px' }} alt="..."></Image>
                        </div>
                    </div>
                </div>
            </div>

            <EvFisica />
            <Valores />
        </div>
    );
}