import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

let comentarios = [
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

let numComentarios = comentarios.length;
let numCajas = Array.from({ length: (numComentarios / 3) }, (_, i) => i + 1);


function IterarComentarios({ numDeCaja, listaCom }) {
    // Devuelve 3 comentarios de la lista de comentarios
    let indiceFinalListaCom = numDeCaja * 3;
    let indiceInicialListaCom = indiceFinalListaCom - 3;
    let comentariosMostrados = listaCom.slice(indiceInicialListaCom, indiceFinalListaCom).map((com, index) =>
        <div key={index} className='col-3 mx-2 bg-white' style={{ border: '1px solid #D5DFFF', borderRadius: '15px' }}>
            <div className='bg-quaternary w-100 px-3 py-3' style={{ borderRadius: '15px 15px 0px 0px' }}>
                <p className='mb-0  text-primary h5'>{com.nombre}</p>
            </div>
            <div className='px-3 py-3'>
                <div className='d-flex mb-3'>
                    {Array.from({ length: com.calificacion }, (_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} className='me-2 text-primary' style={{ height: '20px' }} />
                    ))}
                </div>
                <p style={{ textAlign: 'justify', fontSize: '14px' }}>{com.comentario}</p>
            </div>
        </div>
    )
    return (
        <div className='col-12 d-flex justify-content-center'>
            {comentariosMostrados}
        </div>
    )
}


export default function CajaComentarios() {
    // almacena en cajasMostradas los elementos del carrusel en fn del total de comentarios dividido 3
    let cajasMostradas = [];
    numCajas.map(num => {
        if (num === 1) {
            cajasMostradas.push(
                <div key={num} className="carousel-item active">
                    <div className='d-flex'>
                        <IterarComentarios numDeCaja={num} listaCom={comentarios} />
                    </div>
                </div>)
        } else {
            cajasMostradas.push(
                <div key={num} className="carousel-item">
                    <div className='d-flex'>
                        <IterarComentarios numDeCaja={num} listaCom={comentarios} />
                    </div>
                </div>
            )
        }
    }
    )
    return (
        <div className='d-flex w-100' style={{ marginBottom: '100px' }}>
            <div className='d-flex flex-column m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-11'>
                <h2 className='text-tertiary text-center mb-5'>Opiniones</h2>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner d-flex">
                        {cajasMostradas}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
