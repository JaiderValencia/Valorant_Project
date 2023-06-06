import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './Carousel.css'

function Carousel() {
    const [agents, setAgents] = useState([])

    const [content, setContent] = useState([])

    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents?language=es-ES")
            .then(res => res.json())
            .then(data => setAgents(data.data))
            .catch((e) => setAgents([]))
    }, [])

    useEffect(() => {
        setContent(agents.map((agent, i) => (
            <div key={i} className={`carousel-item ${i == 0 ? "active" : ""} `}>
                <Card name={agent.displayName} image={agent.displayIcon} />
            </div>
        )))
    }, [agents])

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {content}
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