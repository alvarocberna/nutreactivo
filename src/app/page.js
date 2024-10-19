import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
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
import ImgFondo from '../media/img_fondo.png'

function Portada() {
  return (
    <div className="container-fluid d-flex d-column d-lg-row justify-content-center align-items-center mb-5"
      style={{ height: '600px', marginTop: '120px' }}>
      <div className="col-11 col-sm-8 col-md-10 col-lg-5">
        <h1 className="h1" style={{ color: '#2F1C6A' }}>Nutrición para el <br /> deporte y salud</h1>
      </div>
      <div className="col-11 col-sm-8 col-md-10 col-lg-5 border" style={{ height: '300px', background: 'gray' }}>
      </div>
    </div>
  )
}

function Consulta() {
  return (
    <div className="col-12 d-flex" style={{ marginBottom: '100px' }}>
      <div className="d-flex flex-column flex-md-row m-auto col-11 col-sm-8 col-md-10 col-lg-11 col-xl-9">
        <Image className="me-5" src={ImgNutri} style={{ height: '400px', width: '300px', objectFit: 'cover', borderRadius: '15px' }}
          alt="Nutricionista Alvaro Cañete"></Image>
        <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
          <FontAwesomeIcon icon={faQuoteLeft} style={{ fontSize: '40px', width: '50px', color: '#673DE6' }} />
          <p className="h2" style={{ textAlign: 'justify', color: '#2F1C6A' }}>
            Las necesidades de cada usuario son  diferentes, según su disciplina y <span style={{ color: '#673DE6' }}>objetivos</span>.
            La consulta nutricional tiene como fin establecer las <span style={{ color: '#673DE6' }}>estrategias nutricionales</span> adecuadas para lograr estos objetivos.
          </p>
          <hr></hr>
          <p className="h5 fw-bold" style={{ color: '#673DE6' }}>Alvaro Cañete Nta</p>
        </div>
      </div>
    </div>
  )
}

function Mediciones() {
  return (
    <div className="col-12 d-flex flex-column flex-md-row" style={{ marginBottom: '100px' }}>
      <div className="col-11 col-md-5 d-flex" style={{ height: '600px', background: '#8C85FF' }}>
        <div id="carouselExample" className="carousel m-auto slide col-6" style={{ height: '500px' }}>
          <div className="col-10 h-100 carousel-inner rounded ">
            <div className="carousel-item h-100 ">
              <Image src={ImgInf1} className="d-block w-100 h-100" alt="..." style={{ objectFit: 'cover' }} />
            </div>
            <div className="carousel-item active h-100 ">
              <Image src={ImgInf2} className="d-block w-100 h-100" alt="..." style={{ objectFit: 'cover' }} />
            </div>
            <div className="carousel-item h-100 ">
              <Image src={ImgInf3} className="d-block w-100 h-100" alt="..." style={{ objectFit: 'cover' }} />
            </div>
            <div className="carousel-item h-100 ">
              <Image src={ImgInf4} className="d-block w-100 h-100" alt="..." style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-11 col-md-7 d-flex flex-column">
        <div className="col-12 col-md-10 m-auto">
          <h3 className="h2" style={{ color: '#2F1C6A' }}>
            Visualiza tus métricas de rendimiento deportivo en un informe físico completo
          </h3>
          <p style={{ color: '#2F1C6A' }}>
            Cada consulta nutricional incluye una evaluación física especializada para deportistas,
            donde podras conocer tu composición corporal (masa muscular y grasa), imc, somatotipo,
            phantom, pliegues y perímetros, entre otros indicadores de uso deportivo.
          </p>
          <Link href='/' className='btn text-white fw-semibold' style={{ background: '#673DE6' }}>
            Ver información completa
          </Link>
        </div>
      </div>
    </div>
  )
}

function Valores() {
  return (
    <div className="container-fluid d-flex flex-column" style={{ marginBottom: '100px' }}>
      <h2 className="m-auto col-11 col-sm-8 col-md-10 col-lg-9 col-xl-10 text-center mb-5" style={{ color: '#2F1C6A' }}>Valores</h2>
      <div className="m-auto col-11 col-sm-8 col-md-10 col-lg-9 col-xl-10 d-flex flex-column flex-md-row justify-content-between">
        <div className="px-3 py-5 d-flex flex-column justify-content-between valoresSty">
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
            <p className="h5 mb-4" style={{ color: '#673DE6' }}>
              Valor: 30.000 clp.
            </p>
          </div>
          <Link href='/' className="btn text-white col-12" style={{ background: '#673DE6', color: '#2F1C6A' }}>
            Agendar
          </Link>
        </div>
        <div className=" px-3 py-5 d-flex flex-column justify-content-between valoresSty">
          <div>
            <p className="h3" style={{ color: '#2F1C6A' }}>
              Consulta nutricional + 1 control
            </p>
            <p style={{ color: '#2F1C6A' }}>
              Incluye plan personalizado acorde a los requerimientos energéticos y nutricionales, prescripción
              de suplementación, estrategias deportivas, informe físico completo + seguimiento.
            </p>
            <p style={{ color: '#2F1C6A' }}>
              Duración de 45min.
            </p>
            <p className="h5 mb-4" style={{ color: '#673DE6' }}>
              Valor: 55.000 clp.
            </p>
          </div>
          <Link href='/' className="btn text-white col-12" style={{ background: '#673DE6', color: '#2F1C6A' }}>
            Agendar
          </Link>
        </div>
        <div className=" px-3 py-5 d-flex flex-column justify-content-between valoresSty">
          <div>
            <p className="h3" style={{ color: '#2F1C6A' }}>
              Consulta nutricional + 2 controles
            </p>
            <p style={{ color: '#2F1C6A' }}>
              Incluye plan personalizado acorde a los requerimientos energéticos y nutricionales, prescripción
              de suplementación, estrategias deportivas, informe físico completo + seguimiento.
            </p>
            <p style={{ color: '#2F1C6A' }}>
              Duración de 45min.
            </p>
            <p className="h5 mb-4" style={{ color: '#673DE6' }}>
              Valor: 80.000 clp.
            </p>
          </div>
          <Link href='/' className="btn text-white col-12" style={{ background: '#673DE6', color: '#2F1C6A' }}>
            Agendar
          </Link>
        </div>
        <div className=" px-3 py-5 d-flex flex-column justify-content-between valoresSty">
          <div>
            <p className="h3" style={{ color: '#2F1C6A' }}>
              Consulta online
            </p>
            <p style={{ color: '#2F1C6A' }}>
              Incluye plan personalizado acorde a los requerimientos energéticos y nutricionales, prescripción
              de suplementación, estrategias deportivas, informe físico completo + seguimiento.
            </p>
            <p style={{ color: '#2F1C6A' }}>
              Duración de 45min.
            </p>
            <p className="h5 mb-4" style={{ color: '#673DE6' }}>
              Valor: 20.000 clp.
            </p>
          </div>
          <Link href='/' className="btn text-white col-12" style={{ background: '#673DE6', color: '#2F1C6A' }}>
            Agendar
          </Link>
        </div>
      </div>
    </div>
  );
}


function Objetivos() {
  return (
    <div className="containter-fluid py-5" style={{ background: '#EBE4FF', marginBottom: '100px' }}>
      <h2 className="m-auto col-11 col-sm-8 col-md-10 col-lg-9 col-xl-10 text-center mb-5" style={{ color: '#2F1C6A' }}>
        Principales objetivos
      </h2>
      <div className="m-auto col-11 col-sm-8 col-md-10 col-lg-9 col-xl-10 d-flex justify-content-between">
        <Link className="col-2 px-2 d-flex align-items-center rounded objSty" href='/'>
          <p className="mb-0 h5 text-center" style={{ color: '#673DE6' }}>
            Mejora de rendimiento deportivo
          </p>
        </Link>
        <Link className="col-2 px-2 d-flex align-items-center rounded objSty" href='/'>
          <p className="mb-0 h5 text-center" style={{ color: '#673DE6' }}>
            Ganancia de masa muscular
          </p>
        </Link>
        <Link className="col-2 px-2 d-flex align-items-center rounded objSty" href='/'>
          <p className="mb-0 h5 text-center" style={{ color: '#673DE6' }}>
            Disminución de porcentaje de grasa
          </p>
        </Link>
        <Link className="col-2 px-2 d-flex align-items-center rounded objSty" href='/'>
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
      <div className="row d-flex col-11 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto justify-content-between">
        <Image src={ImgBanmedica} className="col-3 mb-3 me-1" style={{ height: '80px', objectFit: 'contain' }} />
        <Image src={ImgColmena} className="col-3 mb-3 me-1" style={{ height: '80px', objectFit: 'contain' }} />
        <Image src={ImgConsalud} className="col-3 mb-3 me-1" style={{ height: '80px', objectFit: 'contain' }} />
        <Image src={ImgCruzBlanca} className="col-3 mb-3 me-1" style={{ height: '80px', objectFit: 'contain' }} />
        <Image src={ImgNuevaMasVida} className="col-3 mb-3 me-1" style={{ height: '80px', objectFit: 'contain' }} />
        <Image src={ImgVidaTres} className="col-3 mb-3 me-1" style={{ height: '80px', objectFit: 'contain' }} />
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
