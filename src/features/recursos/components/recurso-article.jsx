import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faCheck } from '@fortawesome/free-solid-svg-icons'
import './recurso-article.css'

export function RecursoPageHeader({ title, description }) {
    return (
        <div className='recursoArticleHeaderSty mb-5'>
            <h1 className='h1 mb-2 text-tertiary fw-bold'>{title}</h1>
            {description && <p className='text-muted mb-0'>{description}</p>}
        </div>
    )
}

export function RecursoVideoEmbed({ src, title }) {
    return (
        <div className='recursoVideoCardSty mb-5'>
            <div className='recursoVideoRatioSty'>
                <iframe src={src} title={title} allowFullScreen />
            </div>
        </div>
    )
}

export function RecursoSection({ icon, title, children }) {
    return (
        <div className='recursoSectionSty mb-4'>
            {title && (
                <div className='recursoSectionTitleSty'>
                    {icon && (
                        <span className='recursoSectionIconWrap'>
                            <FontAwesomeIcon icon={icon} />
                        </span>
                    )}
                    <h4 className='mb-0'>{title}</h4>
                </div>
            )}
            <div className='recursoSectionBodySty'>
                {children}
            </div>
        </div>
    )
}

export function RecursoInlineImg({ src, alt, className = '' }) {
    return (
        <Image
            src={src}
            alt={alt}
            width={600}
            height={300}
            className={`recursoInlineImgSty col-12 col-md-6 ${className}`}
            style={{ objectFit: 'cover' }}
        />
    )
}

export function RecursoTip({ children }) {
    return (
        <div className='recursoTipSty mb-3'>
            <span className='recursoTipIconSty'>
                <FontAwesomeIcon icon={faLightbulb} />
            </span>
            <p className='mb-0'>{children}</p>
        </div>
    )
}

export function RecursoChecklist({ items }) {
    return (
        <ul className='recursoChecklistSty'>
            {items.map((item) => (
                <li key={item}>
                    <span className='recursoChecklistIconSty'>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}

export function RecursoStepList({ children }) {
    return <div className='recursoStepListSty mb-4'>{children}</div>
}

export function RecursoStep({ number, title, img, imgAlt, children }) {
    return (
        <div className='recursoStepCardSty'>
            <span className='recursoStepNumberSty'>{number}</span>
            <div className='recursoStepTextSty'>
                {title && <h5 className='recursoStepTitleSty mb-0'>{title}</h5>}
                <p className='recursoStepBodySty'>{children}</p>
            </div>
            {img && (
                <div className='recursoStepImgWrapSty'>
                    <Image src={img} alt={imgAlt || ''} width={220} height={150} />
                </div>
            )}
        </div>
    )
}
