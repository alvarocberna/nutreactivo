import "../../app/globals.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faLocationDot, faPills, faUser, faBottleWater, faFileImage } from '@fortawesome/free-solid-svg-icons'

const iconCheckStyle = {
  width: '18px',
  fontSize: '18px',
  color: '#02B090',
}

const iconLocationStyle = {
  width: '18px',
  fontSize: '18px',
  color: '#02B090',
}

const iconWrapperStyle = {
  background: '#F0F0F0',
  border: '1.5px solid rgba(2, 176, 144, 0.45)',
  borderRadius: '8px',
  padding: '6px 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}

export function Portada2() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url('/images/img-background-portada.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '90vh',
        height: '90vh',
        marginBottom: '150px',
      }}
    >
      <div className="m-auto w-full d-flex flex-column flex-md-row justify-content-start align-items-center"
      style={{height: '100%'}}>
        <div className="col-1">x</div>
        <div className="mb-5 col-12 col-sm-12 col-md-4 col-lg-5">
          {/* titulo */}
          <h1 className="h1 display-4 mb-2 fw-bold text-white" style={{letterSpacing: '0.03em'}}>
            Nutrición para el <br/> deporte y salud
          </h1>
          <p className="text-white mb-4" style={{fontSize: '20px', letterSpacing: '0.03em'}}>
            Que la alimentación te guíe a tu objetivo
          </p>
          {/* cards */}
          <div className="d-flex flex-row gap-2">
            {/* col 1 */}
            <div className="d-flex flex-column gap-2 col-6">
              <div className="d-flex align-items-center bg-white py-2 ps-3 rounded">
                <div style={iconWrapperStyle} className="me-2">
                  <FontAwesomeIcon icon={faUser} style={iconCheckStyle} />
                </div>
                <p className="mb-0 text-tertiary">Alimentación personalizada</p>
              </div>
              <div className="d-flex align-items-center bg-white py-2 ps-3 rounded">
                <div style={iconWrapperStyle} className="me-2">
                  <FontAwesomeIcon icon={faPills} style={iconCheckStyle} />
                </div>
                <p className="mb-0 text-tertiary">Suplementación deportiva</p>
              </div>
              <div className="d-flex align-items-center bg-white py-2 ps-3 rounded">
                <div style={iconWrapperStyle} className="me-2">
                  <FontAwesomeIcon icon={faBottleWater} style={iconCheckStyle} />
                </div>
                <p className="mb-0 text-tertiary">Estrategias nutricionales</p>
              </div>
              <div className="d-flex align-items-center bg-white py-2 ps-3 rounded">
                <div style={iconWrapperStyle} className="me-2">
                  <FontAwesomeIcon icon={faFileImage} style={iconCheckStyle} />
                </div>
                <p className="mb-0 text-tertiary">Informe físico completo</p>
              </div>
            </div>
            {/* col 2 */}
            <div className="d-flex flex-column justify-content-center gap-2 col-6">
              <div className="d-flex align-items-center bg-white py-2 ps-3 rounded">
                <div style={iconWrapperStyle} className="me-2">
                  <FontAwesomeIcon icon={faLocationDot} style={iconLocationStyle} />
                </div>
                <p className="mb-0 text-tertiary">
                  Atenciones en Viña del Mar
                </p>
              </div>
              <div className="d-flex align-items-center bg-white py-2 ps-3 rounded">
                <div style={iconWrapperStyle} className="me-2">
                  <FontAwesomeIcon icon={faLaptop} style={iconLocationStyle} />
                </div>
                <p className="mb-0 text-tertiary">
                  Atenciones Online
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
