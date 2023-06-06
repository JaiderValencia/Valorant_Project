import './Card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

function Card() {
    return (
        <div className="card-agent">
            <div className="card-agent-imagen">
                <LazyLoadImage width="100%" effect='blur' height="100%" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png" alt={`imagen`} />
            </div>
            <p className='card-agent-nombre'>
                Geeko
            </p>
        </div>
    )
}

export default Card