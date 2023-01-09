import './SpotCard.css';
import { useSelector, useDispatch } from "react-redux"
import { deleteSpot, loadSingleSpot } from '../../store/spots';
import { Link } from 'react-router-dom';

const SpotCard = ({spot}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    
    const isOwner = sessionUser.id === spot.ownerId;

    const deleteHandler = () => {
        dispatch(deleteSpot(spot.id))
    }

    const getDetailsHandler = () => {
        dispatch(loadSingleSpot(spot.id))
    }

    return (
        <div className="spot-card">
            <Link to={`/spots/${spot.id}`} onClick ={getDetailsHandler}>
            <div>{spot.name}</div>
            </Link>
            <div>{spot.address}</div>
            {isOwner && <button onClick={deleteHandler}>Delete</button>}
        </div>
        
    )
}

export default SpotCard;