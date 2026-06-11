import "../../app/globals.css"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faDumbbell, faFire, faLightbulb, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const OBJETIVOS = [
  {
    icon: faBolt,
    title: "Mejora de rendimiento deportivo",
    desc: "Optimiza tu energía y capacidad física para rendir al máximo en cada sesión.",
    href: "/objetivos/rendimiento",
  },
  {
    icon: faDumbbell,
    title: "Ganancia de masa muscular",
    desc: "Estrategias nutricionales para aumentar y fortalecer tu masa muscular.",
    href: "/objetivos/masa-muscular",
  },
  {
    icon: faFire,
    title: "Disminución de porcentaje de grasa",
    desc: "Reduce tu grasa corporal de forma saludable y sostenida en el tiempo.",
    href: "/objetivos/definicion",
  },
  {
    icon: faLightbulb,
    title: "No sé mis objetivos",
    desc: "Descubre tus objetivos reales con nuestra guía personalizada paso a paso.",
    href: "/objetivos/como-definir-objetivos",
  },
];

export function Objetivos() {
  return (
    <section
      className="position-relative sectionHeightSty"
      style={{
        backgroundImage: "url('/images/img-background-objetivos.jpeg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "100px",
      }}
    >
      {/* Quaternary overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#f4f5ff",
          opacity: 0.9,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="position-relative py-5 h-100" style={{ zIndex: 1 }}>
        <div className="m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-10">
          <h2 className="text-center mb-2 text-tertiary fw-bold">
            Principales objetivos
          </h2>
          <p className="text-center text-muted mb-5">
            Elige tu objetivo y descubre el plan nutricional ideal para ti
          </p>

          <div className="row g-4 justify-content-center">
            {OBJETIVOS.map(({ icon, title, desc, href }) => (
              <div key={href} className="col-12 col-sm-6 col-xl-3">
                <Link href={href} className="objCardSty h-100">
                  <div className="objCardAccent" />
                  <div className="p-4 d-flex flex-column h-100" style={{ gap: "16px" }}>
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
                    <span className="objArrowSty mt-auto">
                      Explorar <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "0.75rem" }} />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
