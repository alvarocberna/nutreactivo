import "../../app/globals.css"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export function Consulta() {
  return (
    <div className="col-12 d-flex sectionHeightSty" style={{ marginBottom: '100px' }}>
      <div className="d-flex flex-column-reverse flex-md-row m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9">
        <iframe height="400px" width="300px" style={{ borderRadius: '15px' }} className='m-auto me-lg-5 mt-3'
          src="https://youtube.com/embed/3m74gRagBaQ" alt='Video Consulta Nutricional Nutricionista deportivo Álvaro Cañete'>
        </iframe>
        <div className="m-auto col-12 col-sm-10 col-md-6 col-lg-8 d-flex flex-column justify-content-center">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-primary mb-3" style={{ fontSize: '40px', width: '50px' }} />
          <p className="h3 text-tertiary mb-3" style={{ textAlign: 'justify' }}>
            Las necesidades de cada usuario son  diferentes, según su disciplina y <span className="text-primary">objetivos</span>.
            La consulta nutricional tiene como fin establecer las <span className="text-primary">estrategias nutricionales</span> adecuadas para lograr estos objetivos.
          </p>
          <hr></hr>
          <Link className="h5 fw-bold text-primary" href='/nutricionistas' style={{ textDecoration: 'none' }}>
            Álvaro Cañete Nutricionista
          </Link>
        </div>
      </div>
    </div>
  )
}