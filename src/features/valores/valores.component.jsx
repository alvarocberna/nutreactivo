import "../../app/globals.css";
import Link from "next/link";

export function Valores() {
  return (
    <div className="d-flex flex-column justify-content-center sectionHeightSty" style={{ marginBottom: '100px' }} id="valores">
      <h2 className="m-auto col-10 col-sm-8 col-md-10 col-lg-9 col-xl-10 text-center mb-5 text-tertiary">Valores</h2>
      <div className="m-auto col-10 col-sm-11 col-xl-10">
        <div className="d-flex flex-column flex-md-row col-12 justify-content-around">

          {/* CARD 1 - Consulta nutricional inicial */}
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-stretch">
            <div className="col-12 col-md-11 cardValorSty d-flex flex-column h-100">
              <div className="cardValorAccent"></div>
              <div className="px-4 py-5 d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <p className="h3 text-tertiary mb-3">
                    Consulta nutricional inicial
                  </p>
                  <p className="text-tertiary">
                    Incluye plan personalizado acorde a los requerimientos energéticos y nutricionales, prescripción
                    de suplementación, estrategias deportivas, informe físico completo + seguimiento.
                  </p>
                  <p className="text-tertiary">
                    Duración de 1h.
                  </p>
                  <p className="text-tertiary">
                    Medio de pago: Efectivo, débito y crédito (con o sin cuotas)
                  </p>
                  <p className="h5 mb-5 text-primary">
                    Valor: 35.000 clp.
                  </p>
                </div>
                <Link href='/agendar' className="btnCardValorSty">
                  Agendar
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 2 - Consulta nutricional control */}
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-stretch">
            <div className="col-12 col-md-11 cardValorSty d-flex flex-column h-100">
              <div className="cardValorAccent"></div>
              <div className="px-4 py-5 d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <p className="h3 text-tertiary mb-3">
                    Consulta nutricional control
                  </p>
                  <p className="text-tertiary">
                    Incluye evaluación física, evaluación de resultados y modificación de plan nutricional acorde
                    a las nuevas necesidades en caso de ser necesario.
                  </p>
                  <p className="text-tertiary">
                    Duración: 45min por sesión.
                  </p>
                  <p className="text-tertiary">
                    Medio de pago: Efectivo, débito y crédito (con o sin cuotas)
                  </p>
                  <p className="h5 mb-5 text-primary">
                    Valor: 30.000 clp.
                  </p>
                </div>
                <Link href='/agendar' className="btnCardValorSty">
                  Agendar
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 3 - Consulta online */}
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-stretch">
            <div className="col-12 col-md-11 cardValorSty d-flex flex-column h-100">
              <div className="cardValorAccent"></div>
              <div className="px-4 py-5 d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <p className="h3 text-tertiary mb-3">
                    Consulta online
                  </p>
                  <p className="text-tertiary">
                    Incluye plan personalizado acorde a los requerimientos energéticos y nutricionales, prescripción
                    de suplementación, estrategias deportivas. Sin informe físico.
                  </p>
                  <p className="text-tertiary">
                    Duración: 30min.
                  </p>
                  <p className="text-tertiary">
                    Medio de pago: Efectivo, débito y crédito (con o sin cuotas)
                  </p>
                  <p className="h5 mb-5 text-primary">
                    Valor: 25.000 clp.
                  </p>
                </div>
                <Link href='/agendar' className="btnCardValorSty">
                  Agendar
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
