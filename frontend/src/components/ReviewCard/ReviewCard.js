import './ReviewCard.css';
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { deleteReview } from '../../store/reviews';

const ReviewCard = ({review}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const isOwner = sessionUser.id === review.userId;

    const deleteHandler = () => {
        dispatch(deleteReview(review.id))
    }

    return (
        <div className="review-card">        
            <div>{review.review}</div>
            <div>{review.stars}</div>
            {isOwner && <button onClick={deleteHandler}>Delete</button>}
        </div>
        
    )
}

export default ReviewCard;