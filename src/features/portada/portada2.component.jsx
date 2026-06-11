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

const mobileServices = [
  { icon: faUser, text: 'Alimentación personalizada' },
  { icon: faPills, text: 'Suplementación deportiva' },
  { icon: faBottleWater, text: 'Estrategias nutricionales' },
  { icon: faFileImage, text: 'Informe físico completo' },
  { icon: faLocationDot, text: 'Atenciones en Viña del Mar' },
  { icon: faLaptop, text: 'Atenciones Online' },
]

export function Portada2() {
  return (
    <div
      className="container-fluid portada2-container"
      style={{
        backgroundImage: "url('/images/img-background-portada.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '90vh',
        height: '90vh',
        marginBottom: '150px',
        position: 'relative',
      }}
    >
      {/* capa intermedia oscura */}
      <div className="d-block d-md-none" style={{position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 0}} />
      {/* contenido */}
      <div className="m-auto w-full d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center"
      style={{height: '100%', position: 'relative', zIndex: 1}}>
        <div className="d-none d-md-block col-1"></div>
        <div className="portada2-content col-12 col-md-8 col-lg-7 col-xl-5">
          {/* titulo */}
          <h1 className="h1 display-4 mb-2 fw-bold text-white" style={{letterSpacing: '0.03em'}}>
            Nutrición para el <br/> deporte y salud
          </h1>
          <p className="text-white mb-4" style={{fontSize: '20px', letterSpacing: '0.03em'}}>
            Que la alimentación te guíe a tu objetivo
          </p>

          {/* Mobile: columna única, sin card, texto blanco */}
          <div className="d-flex d-md-none flex-column gap-2">
            {mobileServices.map((service, index) => (
              <div key={index} className="d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={service.icon} style={iconCheckStyle} />
                <p className="mb-0 text-white">{service.text}</p>
              </div>
            ))}
          </div>

          {/* Desktop: dos columnas con cards blancas */}
          <div className="d-none d-md-flex flex-row gap-2">
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
