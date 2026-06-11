'use client'
import { useState, useRef, useEffect } from 'react'
import Image from "next/image";
import "../../app/globals.css"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight, faCircleChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons'
import ImgInf1 from '../../shared/media/img_informe1.jpg'
import ImgInf2 from '../../shared/media/img_informe2.jpg'
import ImgInf3 from '../../shared/media/img_informe3.jpg'
import ImgInf4 from '../../shared/media/img_informe4.jpg'

const IMAGES = [ImgInf1, ImgInf2, ImgInf3, ImgInf4]
const DEFAULT_TILT = { x: 8, y: 18, z: 2 }
const CARD_W = 280
const CARD_H = 380

export function Mediciones() {
  const [imgIndex, setImgIndex] = useState(0)
  const [tilt, setTilt] = useState(DEFAULT_TILT)
  const [isGrabbing, setIsGrabbing] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isDragging = useRef(false)
  const hasDragged = useRef(false)
  const startPos = useRef({ x: 0, y: 0 })
  const startTilt = useRef({ ...DEFAULT_TILT })

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging.current) return
      const dx = e.clientX - startPos.current.x
      const dy = e.clientY - startPos.current.y
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) hasDragged.current = true
      setTilt({
        x: Math.max(-45, Math.min(45, startTilt.current.x - dy * 0.35)),
        y: Math.max(-55, Math.min(55, startTilt.current.y + dx * 0.35)),
        z: DEFAULT_TILT.z,
      })
    }
    const onMouseUp = () => {
      if (!isDragging.current) return
      isDragging.current = false
      setIsGrabbing(false)
      if (!hasDragged.current) setIsModalOpen(true)
      setTilt(DEFAULT_TILT)
    }
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  useEffect(() => {
    if (!isModalOpen) return
    const onKeyDown = (e) => { if (e.key === 'Escape') setIsModalOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isModalOpen])

  const onMouseDown = (e) => {
    isDragging.current = true
    hasDragged.current = false
    setIsGrabbing(true)
    startPos.current = { x: e.clientX, y: e.clientY }
    startTilt.current = { ...tilt }
    e.preventDefault()
  }

  const onTouchStart = (e) => {
    isDragging.current = true
    hasDragged.current = false
    startPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    startTilt.current = { ...tilt }
  }

  const onTouchMove = (e) => {
    if (!isDragging.current) return
    const dx = e.touches[0].clientX - startPos.current.x
    const dy = e.touches[0].clientY - startPos.current.y
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) hasDragged.current = true
    setTilt({
      x: Math.max(-45, Math.min(45, startTilt.current.x - dy * 0.35)),
      y: Math.max(-55, Math.min(55, startTilt.current.y + dx * 0.35)),
      z: DEFAULT_TILT.z,
    })
  }

  const onTouchEnd = () => {
    isDragging.current = false
    if (!hasDragged.current) setIsModalOpen(true)
    setTilt(DEFAULT_TILT)
  }

  const goNext = () => setImgIndex(i => (i + 1) % IMAGES.length)
  const goPrev = () => setImgIndex(i => (i - 1 + IMAGES.length) % IMAGES.length)

  // Sombra: mezcla de primary #673DE6 (103,61,230) y secondary #02B090 (2,176,144)
  const shadow = [
    `${-tilt.y * 0.55}px ${-tilt.x * 0.55}px 30px rgba(103, 61, 230, 0.45)`,
    `${tilt.y * 0.2}px ${tilt.x * 0.2}px 20px rgba(2, 176, 144, 0.3)`,
  ].join(', ')

  return (
    <>
      <div className="col-12 d-flex flex-column-reverse flex-md-row" style={{ marginBottom: '100px', minHeight: '100vh' }}>

        {/* LEFT */}
        <div className="m-auto col-12 col-sm-8 col-md-5 d-flex py-5" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

            <button onClick={goPrev} style={{ background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
              <FontAwesomeIcon style={{ width: '35px', fontSize: '35px', color: '#673DE6' }} icon={faCircleChevronLeft} />
              <span className="visually-hidden">Previous</span>
            </button>

            <div style={{ perspective: '900px' }}>
              <div
                style={{
                  position: 'relative',
                  width: `${CARD_W}px`,
                  height: `${CARD_H}px`,
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) rotateZ(${tilt.z}deg)`,
                  transition: isGrabbing ? 'none' : 'transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.65s ease',
                  boxShadow: shadow,
                  cursor: isGrabbing ? 'grabbing' : 'grab',
                  userSelect: 'none',
                  touchAction: 'none',
                }}
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <Image
                  src={IMAGES[imgIndex]}
                  fill
                  alt="Informe antropometrico medición deportiva"
                  draggable={false}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <button onClick={goNext} style={{ background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
              <FontAwesomeIcon style={{ width: '35px', fontSize: '35px', color: '#673DE6' }} icon={faCircleChevronRight} />
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </div>

        {/* RIGHT */}
        <div className="m-auto col-10 col-sm-8 col-md-7 d-flex flex-column">
          <div className="col-12 col-md-10 m-auto d-flex flex-column">
            <h3 className="h2 text-tertiary">
              Visualiza tus métricas de rendimiento deportivo en un informe físico completo
            </h3>
            <p className="text-tertiary" style={{ textAlign: 'justify' }}>
              Cada consulta nutricional incluye una evaluación física especializada para deportistas,
              donde podrás conocer tu composición corporal (masa muscular y grasa), imc, somatotipo,
              phantom, pliegues y perímetros, entre otros indicadores de uso deportivo.
            </p>
            <Link href='/antropometria/evaluacion-fisica' className='btn col-12 col-md-8 col-lg-6 text-white fw-semibold bg-primary'>
              Ver información completa
            </Link>
          </div>
        </div>

      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(0, 0, 0, 0.88)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{ position: 'relative' }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={IMAGES[imgIndex]}
              alt="Informe antropometrico medición deportiva"
              width={700}
              height={900}
              style={{
                objectFit: 'contain',
                maxWidth: '90vw',
                maxHeight: '85vh',
                borderRadius: '14px',
                display: 'block',
              }}
            />
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '-14px',
                right: '-14px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                background: '#673DE6',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                boxShadow: '0 4px 12px rgba(103, 61, 230, 0.5)',
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
