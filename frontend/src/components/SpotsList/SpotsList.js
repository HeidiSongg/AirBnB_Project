import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadAllSpots } from "../../store/spots"
import './SpotsList.css';

const SpotsList = (spots) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadAllSpots(spots))
    }, [dispatch, spots])

    return (
        <div>SpotsList</div>
    )
}

export default SpotsList