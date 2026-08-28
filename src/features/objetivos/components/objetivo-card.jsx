import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export function ObjetivoCard({ icon, title, desc, href, theme }) {
  return (
    <Link href={href} className={`objCardSty objCardBg--${theme} h-100`}>
      <div className='objCardBgSty'>
        <span className='objBlobSty' />
      </div>

      <div className="objCardContentSty p-4 d-flex flex-column h-100" style={{ gap: "16px" }}>
        <div className="objIconWrap">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="flex-grow-1">
          <h5 className="fw-bold mb-2" style={{ color: "#1a1a2e", lineHeight: 1.3 }}>
            {title}
          </h5>
          <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
            {desc}
          </p>
        </div>
        <span className="objCardBtnSty mt-auto">
          Explorar
          <span className="objArrowIconBoxSty">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </span>
      </div>
    </Link>
  );
}
