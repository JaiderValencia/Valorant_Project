import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './Carousel.css'
import PropTypes from 'prop-types'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'

function Carousel(props) {
    const [data, setData] = useState([])

    const [content, setContent] = useState([])

    useEffect(() => {
        fetch(props.endpoint)
            .then(res => res.json())
            .then(data => setData(data.data))
            .catch((e) => setData([]))
    }, [])

    useEffect(() => {
        setContent(data.map((data, i) => (
            <Link key={i} to={`./${data.uuid}`}>
                <div className={`carousel-item ${i == 0 ? "active" : ""} `}>
                    <Card name={data.displayName} image={props.splash ? data.splash : data.displayIcon} />
                </div>
            </Link>
        )))
    }, [data])

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {data.length > 0 ? (
                    content
                ) : <Loader />}
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

Carousel.propTypes = {
    endpoint: PropTypes.string.isRequired,
    splash: PropTypes.bool
}

export default Carousel