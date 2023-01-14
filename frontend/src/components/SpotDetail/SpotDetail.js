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


    // if (!spot && isLoaded) return <Redirect to='/spots' />
    if (!spot) return <Redirect to='/spots' />
    const isOwner = sessionUser.id === spot.ownerId;
    console.log(spot)
    return (
        isLoaded && (
        <form className="spot-detail-form">
            <div><h4>{spot.name}</h4></div>
            <div>{spot.city}, {spot.state}, {spot.country}</div>
            {/* <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img> */}
            <div><img className="spot-image" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img></div>
            {/* <div> <img src=""/></div>
            <div className="spot-image">{spot.previewImage}</div> */}
            <div>Address: {spot.address}</div> 
            <div>Lat & Lng: {spot.lat}, {spot.lng}</div>
            <div>Description: {spot.description}</div>
            <div>$ {spot.price} night</div>
            <Link to={`/spots/${spot.id}/reviews`}  className="review-link">Read the reviews</Link>
            <div>
                {isOwner &&<Link to={`/spots/${spot.id}/edit`} style={{ textDecoration: 'none' }}><button className="button">Edit</button></Link>}
                {isOwner && <button onClick={deleteHandler} className="button">Delete</button>}
            </div>
        </form>
        )
    )    
}

export default SpotDetail