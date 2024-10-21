import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faCheck, faLocationDot, faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ImgNutri from '../media/img_alvaro_canete_nutricionista.jpg'
import ImgInf1 from '../media/img_informe1.jpg'
import ImgInf2 from '../media/img_informe2.jpg'
import ImgInf3 from '../media/img_informe3.jpg'
import ImgInf4 from '../media/img_informe4.jpg'
import ImgBanmedica from '../media/img_isapre_banmedica.png'
import ImgColmena from '../media/img_isapre_colmena.png'
import ImgConsalud from '../media/img_isapre_consalud.png'
import ImgCruzBlanca from '../media/img_isapre_cruz_blanca.png'
import ImgNuevaMasVida from '../media/img_isapre_nueva_mas_vida.png'
import ImgVidaTres from '../media/img_isapre_vida_tres.png'
import ImgPortada from '../media/img_portada.png'
import ImgFondo from '../media/img_fondo.png'

function Portada() {
  return (
    <div className="container-fluid" style={{ marginBottom: '150px' }}>
      <div className=" m-auto col-11 col-sm-10 col-md-11 col-lg-11 col-xl-10 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="m-auto col-12 col-sm-12 col-md-4 col-lg-4 ">
          <h1 className="h1 mb-4 fw-bold" style={{ color: '#2F1C6A' }}>Nutrición para el deporte y salud</h1>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon icon={faCheck} className="me-2" style={{ width: '18px', fontSize: '18px', color: '#02B090' }} />
            <p className="mb-0">Alimentación personalizada</p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon icon={faCheck} className="me-2" style={{ width: '18px', fontSize: '18px', color: '#02B090' }} />
            <p className="mb-0">Suplementación deportiva</p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon icon={faCheck} className="me-2" style={{ width: '18px', fontSize: '18px', color: '#02B090' }} />
            <p className="mb-0">Estrategias nutricionales</p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon icon={faCheck} className="me-2" style={{ width: '18px', fontSize: '18px', color: '#02B090' }} />
            <p className="mb-0">Informe físico completo</p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon icon={faLocationDot} className="me-2" style={{ width: '18px', fontSize: '18px', color: '#02B090' }} />
            <p className="mb-0">Atenciones en Viña del Mar y Online</p>
          </div>
        </div>
        <Image src={ImgPortada} className="m-auto col-12 col-sm-12 col-md-7 col-lg-7 imgPortSty" alt="Img portada Nutreactivo" style={{ objectFit: 'contain' }}></Image>
      </div>
    </div>
  )
}

function Consulta() {
  return (
    <div className="col-12 d-flex" style={{ marginBottom: '100px' }}>
      <div className="d-flex flex-column-reverse flex-md-row m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9">
        <iframe height="400px" width="300px" style={{ borderRadius: '15px' }} className='m-auto me-lg-5 mt-3'
          src="https://youtube.com/embed/3m74gRagBaQ">
        </iframe>
        {/* <Image className="me-5" src={ImgNutri} style={{ height: '400px', width: '300px', objectFit: 'cover', borderRadius: '15px' }}
          alt="Nutricionista Alvaro Cañete"></Image> */}
        <div className="m-auto col-12 col-sm-10 col-md-6 col-lg-8 d-flex flex-column justify-content-center">
          <FontAwesomeIcon icon={faQuoteLeft} style={{ fontSize: '40px', width: '50px', color: '#673DE6' }} />
          <p className="h2" style={{ textAlign: 'justify', color: '#2F1C6A' }}>
            Las necesidades de cada usuario son  diferentes, según su disciplina y <span style={{ color: '#673DE6' }}>objetivos</span>.
            La consulta nutricional tiene como fin establecer las <span style={{ color: '#673DE6' }}>estrategias nutricionales</span> adecuadas para lograr estos objetivos.
          </p>
          <hr></hr>
          <p className="h5 fw-bold" style={{ color: '#673DE6' }}>Alvaro Cañete Nutricionista</p>
        </div>
      </div>
    </div>
  )
}

function Mediciones() {
  return (
    <div className="col-12 d-flex flex-column-reverse flex-md-row " style={{ marginBottom: '100px' }}>
      <div className="m-auto col-12 col-sm-8 col-md-5 d-flex py-5 boxMedSty" >
        <div id="carouselExample" className="carousel m-auto d-flex align-items-center slide col-6">
          <div className="carousel-inner rounded shadow" style={{ zIndex: '0' }}>
            <div className="carousel-item">
              <Image src={ImgInf1} className="d-block w-100 h-100" alt="Informe medición física" style={{ objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div className="carousel-item active h-100 ">
              <Image src={ImgInf2} className="d-block w-100 h-100" alt="Informe medición física" style={{ objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div className="carousel-item h-100 ">
              <Image src={ImgInf3} className="d-block w-100 h-100" alt="Informe medición física" style={{ objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div className="carousel-item h-100 ">
              <Image src={ImgInf4} className="d-block w-100 h-100" alt="Informe medición física" style={{ objectFit: 'cover', borderRadius: '10px' }} />
            </div>
          </div>
          <button className="carousel-control-prev" style={{ position: 'absolute', left: '-60px' }} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
            <FontAwesomeIcon className="btnMedSty" style={{ width: '35px', fontSize: '35px' }} icon={faCircleChevronLeft} />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" style={{ position: 'absolute', right: '-60px' }} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
            <FontAwesomeIcon className="btnMedSty" style={{ width: '35px', fontSize: '35px' }} icon={faCircleChevronRight} />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="m-auto col-10 col-sm-8 col-md-7 d-flex flex-column">
        <div className="col-12 col-md-10 m-auto d-flex flex-column">
          <h3 className="h2" style={{ color: '#2F1C6A' }}>
            Visualiza tus métricas de rendimiento deportivo en un informe físico completo
          </h3>
          <p style={{ color: '#2F1C6A', textAlign: 'justify' }}>
            Cada consulta nutricional incluye una evaluación física especializada para deportistas,
            donde podrás conocer tu composición corporal (masa muscular y grasa), imc, somatotipo,
            phantom, pliegues y perímetros, entre otros indicadores de uso deportivo.
          </p>
          <Link href='/antropometria/evaluacion-fisica' className='btn col-12 col-md-8 col-lg-6 text-white fw-semibold' style={{ background: '#673DE6' }}>
            Ver información completa
          </Link>
        </div>
      </div>
    </div>
  )
}

function Valores() {
  return (
    <div className=" d-flex flex-column " style={{ marginBottom: '100px' }} id="valores">
      <h2 className="m-auto col-10 col-sm-8 col-md-10 col-lg-9 col-xl-10 text-center mb-5 " style={{ color: '#2F1C6A' }}>Valores</h2>
      <div className="m-auto d-flex flex-column flex-lg-row col-10 col-sm-8 col-md-10 col-lg-11 col-xl-10 ">
        <div className="d-flex flex-column flex-md-row col-12 col-lg-6 justify-content-around ">
          <div className="px-3 py-5 d-flex flex-column justify-content-between col-12 col-md-5 mb-3"
            style={{ border: '1px solid #8C85FF', borderRadius: '20px' }}>
            <div className="">
              <p className="h3" style={{ color: '#2F1C6A' }}>
                Consulta nutricional
              </p>
              <p style={{ color: '#2F1C6A' }}>
                Incluye plan personalizado acorde a los requerimientos energéticos y nutricionales, prescripción
                de suplementación, estrategias deportivas, informe físico completo + seguimiento.
              </p>
              <p style={{ color: '#2F1C6A' }}>
                Duración de 45min.
              </p>
              <p>
                Medio de pago: Crédito, débito y efectivo.
              </p>
              <p className="h5 mb-4" style={{ color: '#673DE6' }}>
                Valor: 30.000 clp.
              </p>
            </div>
            <Link href='/agendar' className="btn text-white col-12" style={{ background: '#673DE6', color: '#2F1C6A' }}>
              Agendar
            </Link>
          </div>
          <div className="px-3 py-5 d-flex flex-column justify-content-between col-12 col-md-5 mb-3"
            style={{ border: '1px solid #8C85FF', borderRadius: '20px' }}>
            <div>
              <p className="h3" style={{ color: '#2F1C6A' }}>
                Consulta nutricional + 1 control
              </p>
              <p style={{ color: '#2F1C6A' }}>
                Incluye consulta nutricional inicial + consulta control. Cada sesión incluye la entrega o reajuste de
                un plan de alimentación personalizado, prescripción de suplementos, estrategias deportivas + evaluación
                física para la determinación de indicadores deportivos.
              </p>
              <p style={{ color: '#2F1C6A' }}>
                Duración: 45min por sesión.
              </p>
              <p style={{ color: '#2F1C6A' }}>
                Medio de pago: Crédito, débito y efectivo (con o sin cuotas).
              </p>
              <p className="h5 mb-4" style={{ color: '#673DE6' }}>
                Valor: 55.000 clp.
              </p>
            </div>
            <Link href='/agendar' className="btn text-white col-12" style={{ background: '#673DE6', color: '#2F1C6A' }}>
              Agendar
            </Link>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row col-12 col-lg-6 justify-content-around">
          <div className=" px-3 py-5 d-flex flex-column justify-content-between col-12 col-md-5 mb-3"
            style={{ border: '1px solid #8C85FF', borderRadius: '20px' }}>
            <div>
              <p className="h3" style={{ color: '#2F1C6A' }}>
                Consulta nutricional + 2 controles
              </p>
              <p style={{ color: '#2F1C6A' }}>
                Incluye consulta nutricional inicial + 2 consultas control. Cada sesión incluye la entrega o reajuste de
                un plan de alimentación personalizado, prescripción de suplementos, estrategias deportivas + evaluación
                física para la determinación de indicadores deportivos.
              </p>
              <p style={{ color: '#2F1C6A' }}>
                Duración: 45min por sesión.
              </p>
              <p style={{ color: '#2F1C6A' }}>
                Medio de pago: Crédito, débito y efectivo (con o sin cuotas).
              </p>
              <p className="h5 mb-4" style={{ color: '#673DE6' }}>
                Valor: 80.000 clp.
              </p>
            </div>
            <Link href='/agendar' className="btn text-white col-12" style={{ background: '#673DE6', color: '#2F1C6A' }}>
              Agendar
            </Link>
          </div>
          <div className=" px-3 py-5 d-flex flex-column justify-content-between col-12 col-md-5 mb-3"
            style={{ border: '1px solid #8C85FF', borderRadius: '20px' }}>
            <div>
              <p className="h3" style={{ color: '#2F1C6A' }}>
                Consulta online.
              </p>
              <p style={{ color: '#2F1C6A' }}>
                Incluye plan personalizado acorde a los requerimientos energéticos y nutricionales, prescripción
                de suplementación, estrategias deportivas. Sin informe físico.
              </p>
              <p style={{ color: '#2F1C6A' }}>
                Duración: 30min.
              </p>
              <p>
                Medio de pago: Crédito, débito y efectivo.
              </p>
              <p className="h5 mb-4" style={{ color: '#673DE6' }}>
                Valor: 20.000 clp.
              </p>
            </div>
            <Link href='/agendar' className="btn text-white col-12" style={{ background: '#673DE6', color: '#2F1C6A' }}>
              Agendar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


function Objetivos() {
  return (
    <div className="containter-fluid py-5" style={{ background: '#EBE4FF', marginBottom: '100px' }}>
      <h2 className="m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-10 text-center mb-5" style={{ color: '#2F1C6A' }}>
        Principales objetivos
      </h2>
      <div className="row m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-10 d-flex justify-content-between">
        <Link className="col-12 col-md-5 col-lg-2 px-2 d-flex align-items-center justify-content-center rounded mb-3 objSty"
          href='/objetivos/rendimiento'>
          <p className="mb-0 h5 text-center" style={{ color: '#673DE6' }}>
            Mejora de rendimiento deportivo
          </p>
        </Link>
        <Link className="col-12 col-md-5 col-lg-2 px-2 d-flex align-items-center justify-content-center rounded mb-3 objSty"
          href='/objetivos/masa-muscular'>
          <p className="mb-0 h5 text-center" style={{ color: '#673DE6' }}>
            Ganancia de masa muscular
          </p>
        </Link>
        <Link className="col-12 col-md-5 col-lg-2 px-2 d-flex align-items-center justify-content-center rounded mb-3 objSty"
          href='/objetivos/definicion'>
          <p className="mb-0 h5 text-center" style={{ color: '#673DE6' }}>
            Disminución de porcentaje de grasa
          </p>
        </Link>
        <Link className="col-12 col-md-5 col-lg-2 px-2 d-flex align-items-center justify-content-center rounded mb-3 objSty"
          href='/objetivos/como-definir-objetivos'>
          <p className="mb-0 h5 text-center" style={{ color: '#673DE6' }}>
            No sé mis objetivos ¿Cómo identificarlos?
          </p>
        </Link>
      </div>
    </div>
  );
}

function Covertura() {
  return (
    <div className="container-fluid d-flex flex-column" style={{ marginBottom: '100px' }}>
      <h2 className="m-auto col-11 col-sm-8 col-md-10 col-lg-9 col-xl-10 text-center mb-5" style={{ color: '#2F1C6A' }}>
        Cobertura
      </h2>
      <div className="row d-flex col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 col-xl-9 m-auto justify-content-between">
        <Image src={ImgBanmedica} alt="img isapre" className="col-12 col-md-5 col-lg-3 mb-3 me-1" style={{ height: '60px', objectFit: 'contain' }} />
        <Image src={ImgColmena} alt="img isapre" className="col-12 col-md-5 col-lg-3 mb-3 me-1" style={{ height: '60px', objectFit: 'contain' }} />
        <Image src={ImgConsalud} alt="img isapre" className="col-12 col-md-5 col-lg-3 mb-3 me-1" style={{ height: '60px', objectFit: 'contain' }} />
        <Image src={ImgCruzBlanca} alt="img isapre" className="col-12 col-md-5 col-lg-3 mb-3 me-1" style={{ height: '60px', objectFit: 'contain' }} />
        <Image src={ImgNuevaMasVida} alt="img isapre" className="col-12 col-md-5 col-lg-3 mb-3 me-1" style={{ height: '60px', objectFit: 'contain' }} />
        <Image src={ImgVidaTres} alt="img isapre" className="col-12 col-md-5 col-lg-3 mb-3 me-1" style={{ height: '60px', objectFit: 'contain' }} />
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <>
      <Portada />
      <Consulta />
      <Mediciones />
      <Valores />
      <Objetivos />
      <Covertura />
    </>
  );
}

export { Valores };