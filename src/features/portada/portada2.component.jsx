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
  background: `radial-gradient(circle at 12% 12%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 50%),
    radial-gradient(circle at 88% 88%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%)`,
  border: '1.5px solid rgba(255, 255, 255, 0.35)',
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
              <div className="d-flex align-items-center portada2CardGlassSty py-2 ps-3 rounded">
                <div style={iconWrapperStyle} className="me-2">
                  <FontAwesomeIcon icon={faUser} style={iconCheckStyle} />
                </div>
                <p className="mb-0 text-white">Alimentación personalizada</p>
              </div>
              <div className="d-flex align-items-center portada2CardGlassSty py-2 ps-3 rounded">
                <div style={iconWrapperStyle} className="me-2">
                  <FontAwesomeIcon icon={faPills} style={iconCheckStyle} />
                </div>
                <p className="mb-0 text-white">Suplementación deportiva</p>
              </div>
              <div className="d-flex align-items-center portada2CardGlassSty py-2 ps-3 rounded">
                <div style={iconWrapperStyle} className="me-2">
                  <FontAwesomeIcon icon={faBottleWater} style={iconCheckStyle} />
                </div>
                <p className="mb-0 text-white">Estrategias nutricionales</p>
              </div>
              <div className="d-flex align-items-center portada2CardGlassSty py-2 ps-3 rounded">
                <div style={iconWrapperStyle} className="me-2">
                  <FontAwesomeIcon icon={faFileImage} style={iconCheckStyle} />
                </div>
                <p className="mb-0 text-white">Informe físico completo</p>
              </div>
            </div>
            {/* col 2 */}
            <div className="d-flex flex-column justify-content-center gap-2 col-6">
              <div className="d-flex align-items-center portada2CardGlassSty py-2 ps-3 rounded">
                <div style={iconWrapperStyle} className="me-2">
                  <FontAwesomeIcon icon={faLocationDot} style={iconLocationStyle} />
                </div>
                <p className="mb-0 text-white">
                  Atenciones en Viña del Mar
                </p>
              </div>
              <div className="d-flex align-items-center portada2CardGlassSty py-2 ps-3 rounded">
                <div style={iconWrapperStyle} className="me-2">
                  <FontAwesomeIcon icon={faLaptop} style={iconLocationStyle} />
                </div>
                <p className="mb-0 text-white">
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
