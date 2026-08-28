import "../../app/globals.css"
import "./style.css"
import { OBJETIVOS } from "./objetivos.data";
import { ObjetivoCard } from "./components/objetivo-card";

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
            {OBJETIVOS.map(({ icon, title, desc, href, theme }) => (
              <div key={href} className="col-12 col-sm-6 col-xl-3">
                <ObjetivoCard icon={icon} title={title} desc={desc} href={href} theme={theme} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
