import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

let comentarios = [
    {
        id: 1,
        nombre: "Juan Perez 1",
        comentario: "Me gustó mucho",
        calificacion: 5,
    },
    {
        id: 2,
        nombre: "Nicolas Canete 2",
        comentario: "Estoy ocupao",
        calificacion: 5,
    },
    {
        id: 3,
        nombre: "Cesar 3",
        comentario: "Me gustó mucho",
        calificacion: 5,
    },
    {
        id: 4,
        nombre: "Daniel 4",
        comentario: "Estoy ocupao",
        calificacion: 5,
    },
    {
        id: 5,
        nombre: "Jaime 5",
        comentario: "Me gustó mucho",
        calificacion: 5,
    },
    {
        id: 6,
        nombre: "Luis 6",
        comentario: "Estoy ocupao",
        calificacion: 5,
    },
    {
        id: 7,
        nombre: "Gregorio 7",
        comentario: "Estoy ocupao",
        calificacion: 5,
    },
    {
        id: 8,
        nombre: "Dante 8",
        comentario: "Me gustó mucho",
        calificacion: 5,
    },
    {
        id: 9,
        nombre: "Rodrigo 9",
        comentario: "Estoy ocupao",
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
                <p>{com.comentario}</p>
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
