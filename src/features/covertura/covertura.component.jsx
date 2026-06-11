import Image from "next/image";
import "../../app/globals.css";
import ImgBanmedica from '../../shared/media/img_isapre_banmedica.png'
import ImgColmena from '../../shared/media/img_isapre_colmena.png'
import ImgConsalud from '../../shared/media/img_isapre_consalud.png'
import ImgCruzBlanca from '../../shared/media/img_isapre_cruz_blanca.png'
import ImgNuevaMasVida from '../../shared/media/img_isapre_nueva_mas_vida.png'
import ImgVidaTres from '../../shared/media/img_isapre_vida_tres.png'

const ISAPRES = [
  { src: ImgBanmedica,    name: "Banmédica" },
  { src: ImgColmena,      name: "Colmena Golden Cross" },
  { src: ImgConsalud,     name: "Consalud" },
  { src: ImgCruzBlanca,   name: "Cruz Blanca" },
  { src: ImgNuevaMasVida, name: "Nueva Más Vida" },
  { src: ImgVidaTres,     name: "Vida Tres" },
];

export function Covertura() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center py-5 sectionHeightSty">
      <h2 className="m-auto col-11 col-sm-8 col-md-10 col-lg-9 col-xl-10 text-center mb-5 text-tertiary">
        Cobertura
      </h2>
      <div className="row g-4 col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto justify-content-center">
        {ISAPRES.map(({ src, name }) => (
          <div key={name} className="col-6 col-sm-4 col-lg-2">
            <div className="coverturaCardSty h-100">
              <div className="objCardAccent" />
              <div className="p-3 d-flex flex-column align-items-center justify-content-center gap-3">
                <Image
                  src={src}
                  alt={`Isapre ${name}`}
                  style={{ height: "52px", objectFit: "contain", width: "100%" }}
                />
                <p className="mb-0 small fw-semibold text-center" style={{ color: "#555", fontSize: "0.78rem" }}>
                  {name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
