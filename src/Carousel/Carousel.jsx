import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Carousel.css'

function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="cards-wrapper">
                        <div className="card-agent">
                            <div className="card-agent-imagen">
                                <LazyLoadImage width="100%" effect='blur' height="100%" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png" alt={`imagen`} />
                            </div>
                            <p className='card-agent-nombre'>
                                Geeko
                            </p>
                        </div>
                        <div className="card-agent">
                            <div className="card-agent-imagen">
                                <LazyLoadImage width="100%" effect='blur' height="100%" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png" alt={`imagen`} />
                            </div>
                            <p className='card-agent-nombre'>
                                Geeko
                            </p>
                        </div>
                        <div className="card-agent">
                            <div className="card-agent-imagen">
                                <LazyLoadImage width="100%" effect='blur' height="100%" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png" alt={`imagen`} />
                            </div>
                            <p className='card-agent-nombre'>
                                Geeko
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="cards-wrapper">
                        <div className="card-agent">
                            <div className="card-agent-imagen">
                                <LazyLoadImage width="100%" effect='blur' height="100%" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png" alt={`imagen`} />
                            </div>
                            <p className='card-agent-nombre'>
                                Geeko
                            </p>
                        </div>
                        <div className="card-agent">
                            <div className="card-agent-imagen">
                                <LazyLoadImage width="100%" effect='blur' height="100%" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png" alt={`imagen`} />
                            </div>
                            <p className='card-agent-nombre'>
                                Geeko
                            </p>
                        </div>
                        <div className="card-agent">
                            <div className="card-agent-imagen">
                                <LazyLoadImage width="100%" effect='blur' height="100%" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png" alt={`imagen`} />
                            </div>
                            <p className='card-agent-nombre'>
                                Geeko
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="cards-wrapper">
                        <div className="card-agent">
                            <div className="card-agent-imagen">
                                <LazyLoadImage width="100%" effect='blur' height="100%" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png" alt={`imagen`} />
                            </div>
                            <p className='card-agent-nombre'>
                                Geeko
                            </p>
                        </div>
                        <div className="card-agent">
                            <div className="card-agent-imagen">
                                <LazyLoadImage width="100%" effect='blur' height="100%" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png" alt={`imagen`} />
                            </div>
                            <p className='card-agent-nombre'>
                                Geeko
                            </p>
                        </div>
                        <div className="card-agent">
                            <div className="card-agent-imagen">
                                <LazyLoadImage width="100%" effect='blur' height="100%" src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png" alt={`imagen`} />
                            </div>
                            <p className='card-agent-nombre'>
                                Geeko
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel