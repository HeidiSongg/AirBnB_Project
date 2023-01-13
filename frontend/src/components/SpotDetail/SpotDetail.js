import './SpotDetail.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Link, Redirect } from 'react-router-dom';
import { loadSingleSpot, deleteSpot, changeSpot } from "../../store/spots"

const SpotDetail = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    
    const { spotId } = useParams();

    const spot = useSelector(state => state.spots[spotId]);
    
    const deleteHandler = () => {
        dispatch(deleteSpot(spot.id))
    }
    
    useEffect(() => {
        dispatch(loadSingleSpot(spotId))
            .then(res => setIsLoaded(true));
    }, [dispatch]);


    if (!spot && isLoaded) return <Redirect to='/spots' />
    const isOwner = sessionUser.id === spot.ownerId;

    return (
        isLoaded && (
        <div>
            <div>{spot.name}</div>
            <div>{spot.address}</div>
            <div>{spot.description}</div>
            <div>{spot.price}</div>
            {isOwner &&<Link to={`/spots/${spot.id}/edit`}>Edit</Link>}
            {isOwner && <button onClick={deleteHandler}>Delete</button>}
            <button><Link to={`/spots/${spot.id}/reviews`}>Review</Link></button>
        </div>
        )
    )    
}

export default SpotDetail