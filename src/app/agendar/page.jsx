
import './style.css'
import Link from 'next/link';

export default function Agendar() {
    return (
        <div className="d-flex flex-column" style={{ marginTop: '150px', marginBottom: '200px' }}>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9'>
                <h2 className="m-auto mb-5 h1">
                    Agenda tu hora
                </h2>
                <p className='m-auto mb-5'>
                    Haz click en el botón 'agendar' para ser re dirigido a whatsapp.
                </p>
                <a className="m-auto col-12 col-md-8 h4 btnAgeSty" target='_blank' rel='noreferrer'
                    href="https://api.whatsapp.com/send?phone=56987307068&text=¡Hola! Quiero agendar una hora para consulta nutricional">
                    Agendar
                </a>
            </div>
        </div>
    );
}