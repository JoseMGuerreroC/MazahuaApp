import './Page404.css';
import { Link } from "react-router-dom";


function Page404() {
    return(
        <>
            <section className='section404'>
                <h2>¡UPS!</h2>
                <p className='error404'>404</p>
                <p>No sabemos cómo has llegado aquí</p>
                <Link to='/inicio'>Regresar al inicio</Link>
                
            </section>
        </>
    )
}

export default Page404;