import './SpotCard.css';

const SpotCard = ({spot}) => {

    return (
        <div className="spot-card">
            <div>{spot.name}</div>
            <div>{spot.address}</div>
        </div>
        
    )
}

export default SpotCard;