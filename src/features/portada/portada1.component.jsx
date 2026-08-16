import Image from "next/image";
import "../../app/globals.css"
// import "./globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ImgPortada from '../../shared/media/img_portada.png'



export function Portada1() {
  return (
    <div className="container-fluid" style={{ marginBottom: '150px'}}>
      <div className=" m-auto col-11 col-sm-10 col-md-11 col-lg-11 col-xl-10 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="m-auto col-12 col-sm-12 col-md-4 col-lg-4 ">
          <h1 className="h1 mb-4 fw-bold text-tertiary">Nutrición para el deporte y salud</h1>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon icon={faCheck} className="me-2 text-secondary" style={{ width: '18px', fontSize: '18px' }} />
            <p className="mb-0">Alimentación personalizada</p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon icon={faCheck} className="me-2 text-secondary" style={{ width: '18px', fontSize: '18px' }} />
            <p className="mb-0">Suplementación deportiva</p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon icon={faCheck} className="me-2 text-secondary" style={{ width: '18px', fontSize: '18px' }} />
            <p className="mb-0">Estrategias nutricionales</p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon icon={faCheck} className="me-2 text-secondary" style={{ width: '18px', fontSize: '18px' }} />
            <p className="mb-0">Informe físico completo</p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon icon={faLocationDot} className="me-2 text-secondary" style={{ width: '18px', fontSize: '18px' }} />
            <p className="mb-0">Atenciones en Viña del Mar y Online</p>
          </div>
        </div>
        <Image src={ImgPortada} className="m-auto col-12 col-sm-12 col-md-7 col-lg-7 imgPortSty"
          alt="Portada Nutreactivo Nutrición Deportiva - Que tu alimentación guíe tu objetivo" style={{ objectFit: 'contain' }}></Image>
      </div>
    </div>
  )
}
