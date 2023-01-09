import './SpotCard.css';
import { useSelector, useDispatch } from "react-redux"
import { deleteSpot } from '../../store/spots';

const SpotCard = ({spot}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    
    const isOwner = sessionUser.id === spot.ownerId;

    const deleteHandler = () => {
        dispatch(deleteSpot(spot.id))
    }

    return (
        <div className="spot-card">
            <div>{spot.name}</div>
            <div>{spot.address}</div>
            {isOwner && <button onClick={deleteHandler}>Delete</button>}
        </div>
        
    )
}

export default SpotCard;