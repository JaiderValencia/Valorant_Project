import './Card.css'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

function Card(props) {
    return (
        <div className="card-agent">
            <div className="card-agent-imagen">
                <LazyLoadImage width="100%" effect='blur' height="100%" src={props.image} alt={`${props.name} - imagen`} />
            </div>
            <p className='card-agent-nombre'>
                {props.name}
            </p>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Card