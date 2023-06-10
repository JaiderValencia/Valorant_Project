import Carousel from '../Carousel/Carousel'
import './Agents.css'


function Agentes() {
    return (
        <main className='main-agents'>
            <div className="agents-info-page">
                <h1>Agentes</h1>
                <p>Aquí podras ver cada uno de los agentes del juego, clickea para saber más sobre ellos.</p>
            </div>
            <Carousel endpoint="https://valorant-api.com/v1/agents?language=es-ES" />
        </main>
    )
}

export default Agentes