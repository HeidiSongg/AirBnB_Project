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

    return (
        <div className="spot-card">
            <Link to={`/spots/${spot.id}`} onClick ={getDetailsHandler}>
            <div>{spot.name}</div>
            </Link>
            <div>{spot.city}, {spot.state}, {spot.country}</div>
        </div>
        
    )
}

export default SpotCard;