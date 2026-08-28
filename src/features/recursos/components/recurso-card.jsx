import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export function RecursoCard({ link, theme, img, title, desc, short }) {
    return (
        <Link href={link} className={`objCardSty recursoCardSty recursoCardBg--${theme} h-100`}>

            <div className='recursoCardBg'>
                <span className='recursoBlob' />
                <span className='recursoBlob' />
            </div>

            <div className='recursoCardImgLayer'>
                <Image
                    src={img}
                    alt={title}
                    fill
                    sizes='40vw'
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className='recursoCardContent'>
                <h3 className='h6 fw-bold mb-2' style={{ color: '#1a1a2e', lineHeight: 1.3 }}>
                    {title}
                </h3>
                <p className='text-muted small mb-0' style={{ lineHeight: 1.6 }}>
                    {desc}
                </p>
                <span className='objArrowSty recursoCardBtn mt-auto'>
                    Ver {short}
                    <span className='objArrowIconBoxSty'>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </span>
            </div>
        </Link>
    )
}
