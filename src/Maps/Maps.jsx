import Carousel from '../Carousel/Carousel'
import './Maps.css'


function Maps() {
    return (
        <main className='main-maps'>
            <div className="maps-info-page">
                <h1>Mapas</h1>
                <p>Aquí podras ver cada uno de los mapas del juego, clickea para saber más sobre ellos.</p>
            </div>
            <Carousel splash={true} endpoint="https://valorant-api.com/v1/maps?language=es-ES" />
        </main>
    )
}

export default Maps