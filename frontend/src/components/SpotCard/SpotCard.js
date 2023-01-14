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
            <div><img className="spot-card-preview-image" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img></div>
            <Link to={`/spots/${spot.id}`} onClick ={getDetailsHandler}>
            <div className="spot-name">{spot.name}</div>
            </Link>
            <div>{spot.city}, {spot.state}, {spot.country}</div>
            <div>$ {spot.price} night</div>
        </div>
        
    )
}

export default SpotCard;