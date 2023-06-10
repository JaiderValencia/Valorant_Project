import Carousel from '../Carousel/Carousel'
import './Maps.css'
import EndPoints from '../EndPoints'

function Maps() {
    return (
        <main className='main-maps'>
            <div className="maps-info-page">
                <h1>Mapas</h1>
                <p>Aquí podras ver cada uno de los mapas del juego, clickea para saber más sobre ellos.</p>
            </div>
            <Carousel splash={true} endpoint={EndPoints.maps} />
        </main>
    )
}

export default Maps