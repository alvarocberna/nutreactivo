import { ProyeccionMaraton } from '@/features'

export default function ProyeccionMaratonPage() {
    return (
        <div className="d-flex flex-column" style={{ marginTop: '60px', marginBottom: '100px' }}>
            <div className="m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-8">
                <h2 className="col-12 h2 mb-5">
                    Proyecta el gasto total y por tramo de tu carrera 
                </h2>
                <ProyeccionMaraton />
            </div>
        </div>
    )
}
