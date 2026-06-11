
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


export default function Agendar() {
    return (
        <section className="agendarSection">

            <div className="agendarHeader">
                <span className="agendarBadge">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    Agenda por WhatsApp
                </span>
                <h1 className="agendarTitle">Agenda tu consulta</h1>
            </div>


            <div className="agendarCard">
                <div className="agendarCardAccent" />
                <div className="agendarCardBody">
                    <div className="agendarWaIcon">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    <h2 className="agendarCardTitle">¿Listo para comenzar?</h2>
                    <p className="agendarCardDesc">
                        Haz click en el botón para abrir WhatsApp y agendar tu consulta nutricional personalizada.
                    </p>
                    <a
                        className="agendarBtn"
                        target="_blank"
                        rel="noreferrer"
                        href="https://api.whatsapp.com/send?phone=56987307068&text=¡Hola! Quiero agendar una hora para consulta nutricional"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} />
                        Agendar por WhatsApp
                    </a>
                    {/* <p className="agendarCardNote">
                        <FontAwesomeIcon icon={faClock} />
                        Tiempo de respuesta: menos de 24 horas hábiles
                    </p> */}
                </div>
            </div>

        </section>
    )
}
