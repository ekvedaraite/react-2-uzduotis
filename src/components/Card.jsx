import './Card.css'

function Card ({imageSrc, text}) {
    return (
        <div className="card">
            <img src={imageSrc} alt="image" />
            <div className="card-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card