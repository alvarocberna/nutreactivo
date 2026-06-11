import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "../../app/globals.css"

const comentarios = [
    {
        id: 1,
        nombre: "César Abaroa",
        comentario: "Excelente profesional !! 100% recomendado por su manera de trabajar, explica muy claramente las cosas y todo lo que necesitas saber para un cambio de hábitos.",
        calificacion: 5,
    },
    {
        id: 2,
        nombre: "Javier Klenner",
        comentario: "Gran experiencia. Me ayudó a entender como ordenar mi alimentación de forma muy clara. Los planes son personalizados y fáciles de entender. Siempre disponible para responder dudas y para ayudar en el proceso. Gracias a su apoyo profesional, y junto con el trabajo personal, pude bajar cerca de 8kg en 2 meses, aumentar mi masa muscular y mejorar mi rendimiento deportivo.",
        calificacion: 5,
    },
    {
        id: 3,
        nombre: "Ariadna Martinez",
        comentario: "Profesional muy comprometido, hace un excelente trabajo y seguimiento. He obtenido resultados muy satisfactorios, ademas es muy amable y te hace sentir muy cómodo.",
        calificacion: 5,
    },
    {
        id: 4,
        nombre: "Andrea Vergara",
        comentario: "¡Álvaro es un excelente nutricionista! Gracias a su profesionalismo y dedicación, logré no solo ponerme en forma, sino también recuperar mi salud y bienestar. Sus planes son personalizados, fáciles de seguir y están llenos de recomendaciones prácticas que realmente funcionan. Siempre está atento y dispuesto a resolver dudas, lo que hace que el proceso sea motivador y eficaz. ¡Lo recomiendo 100% a quienes buscan un cambio positivo en su vida!",
        calificacion: 5,
    },
    {
        id: 5,
        nombre: "Roberto Apablaza",
        comentario: "El mejor Nutricionista de todos, llegué a su consulta pesando 95kg y logré llegar a los 79 kg, dietas muy realistas, muy estructuradas. Creo que en toda medida Álvaro es y será tu mejor opción, yo le agradezco cada uno de mis cambios y sin ser esos nutricionistas que satanisan comidas.",
        calificacion: 5,
    },
    {
        id: 6,
        nombre: "Alihozca Muñoz",
        comentario: "Bueno alvaro es un siete. Su conocimientos como nutricionista me ayudan a alcanzar mis metas de salud de manera efectiva y sostenible. Además, su empatía y paciencia me hacen tener la confianza de comunicarle cualquier duda que tenga. Totalmente recomendado para quienes buscan un cambio real y duradero en su bienestar.",
        calificacion: 5,
    },
    {
        id: 7,
        nombre: "Lukas Mundt",
        comentario: "Muy buena experiencia, personalizada, realista y con resultados.",
        calificacion: 5,
    },
    {
        id: 8,
        nombre: "Sergio Lopez",
        comentario: "Muy buena atención, especifica para los objetivos que uno quiere lograr. Ademas de la buena atención en la consulta, hay preocupación del avance luego de la cita.",
        calificacion: 5,
    },
    {
        id: 9,
        nombre: "Cristobal Alfaro",
        comentario: "Muy conforme con el trabajo de nutrición en el cual he progresado mucho. Recomendado!!",
        calificacion: 5,
    }
]

const numCajas = Array.from({ length: Math.ceil(comentarios.length / 3) }, (_, i) => i + 1)

function getInitials(nombre) {
    return nombre.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

function IterarComentarios({ numDeCaja, listaCom }) {
    const fin = numDeCaja * 3
    const inicio = fin - 3
    const cards = listaCom.slice(inicio, fin).map((com, index) => (
        <div key={index} className="col-11 col-md-4 mx-auto mb-3">
            <div className="comentCardSty h-100 col-11 mx-auto">
                <div className="objCardAccent" />
                <div className="p-4 d-flex flex-column h-100">

                    <div className="d-flex align-items-center mb-3">
                        <div className="comentAvatarSty">
                            {getInitials(com.nombre)}
                        </div>
                        <div>
                            <p className="mb-1 fw-bold text-tertiary" style={{ fontSize: '0.95rem' }}>
                                {com.nombre}
                            </p>
                            <div className="d-flex gap-1">
                                {Array.from({ length: com.calificacion }, (_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} style={{ color: '#F59E0B', height: '13px' }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <FontAwesomeIcon
                        icon={faQuoteLeft}
                        style={{ color: '#8C85FF', opacity: 0.45, width: '20px', height: '20px', marginBottom: '10px' }}
                    />

                    <p className="mb-0 flex-grow-1" style={{ textAlign: 'justify', fontSize: '13.5px', lineHeight: 1.75, color: '#555' }}>
                        {com.comentario}
                    </p>

                </div>
            </div>
        </div>
    ))
    return (
        <div className="col-12 d-flex flex-column flex-md-row justify-content-center">
            {cards}
        </div>
    )
}

export default function CajaComentarios() {
    const cajasMostradas = numCajas.map(num => (
        <div key={num} className={`carousel-item${num === 1 ? ' active' : ''}`}>
            <IterarComentarios numDeCaja={num} listaCom={comentarios} />
        </div>
    ))

    return (
        <div className="d-flex w-100 sectionHeightSty" style={{ marginBottom: '100px' }}>
            <div className="d-flex flex-column m-auto col-10 col-md-11 col-lg-11 col-xl-10">
                <h2 className="text-tertiary text-center mb-2">Opiniones</h2>
                <p className="text-center text-muted mb-5">Lo que dicen nuestros pacientes</p>

                <div id="carouselComentarios" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner d-flex">
                        {cajasMostradas}
                    </div>
                    <button
                        className="carousel-control-prev comentCarouselBtnSty cajaComentariosBtnPrev"
                        type="button"
                        data-bs-target="#carouselComentarios"
                        data-bs-slide="prev"
                        aria-label="Anterior"
                        style={{ width: '44px' }}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} style={{ width: '15px', height: '15px' }} />
                    </button>
                    <button
                        className="carousel-control-next comentCarouselBtnSty cajaComentariosBtnNext"
                        type="button"
                        data-bs-target="#carouselComentarios"
                        data-bs-slide="next"
                        aria-label="Siguiente"
                        style={{ width: '44px' }}
                    >
                        <FontAwesomeIcon icon={faChevronRight} style={{ width: '15px', height: '15px' }} />
                    </button>
                </div>
            </div>
        </div>
    )
}
