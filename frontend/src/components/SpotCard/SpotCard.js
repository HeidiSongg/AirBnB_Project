import './SpotCard.css';
import { useSelector, useDispatch } from "react-redux"
import { loadSingleSpot } from '../../store/spots';
import { Link } from 'react-router-dom';

const SpotCard = ({spot}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    

    const getDetailsHandler = () => {
        dispatch(loadSingleSpot(spot.id))
    }
    console.log(spot)
    return (
        <div className="spot-card">
            <Link to={`/spots/${spot.id}`} onClick ={getDetailsHandler}>
            <div className="spot-name">{spot.name}</div>
            </Link>
            <div>{spot.city}, {spot.state}, {spot.country}</div>
            <div>$ {spot.price} night</div>
        </div>
        
    )
}

export default SpotCard;