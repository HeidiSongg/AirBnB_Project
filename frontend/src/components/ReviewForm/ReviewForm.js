import './ReviewForm.css';
import { useParams,useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import { postReview } from '../../store/reviews';

const ReviewForm = () => {
    const { spotId } = useParams();
    const [review, setReview] = useState('');
    const [stars, setStars] = useState('');

    const updateReview = (e) => setReview(e.target.value);
    const updateStars = (e) => setStars(e.target.value);

    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const submitHandler = (e) => {
        e.preventDefault();

        const payload = {
            review,
            stars
        }
        
        dispatch(postReview(payload, spotId))
        .then(()=> setReview(''))
        .then(()=> setStars(''))
    }

    return sessionUser.id ? (
        <section> Review Form
            <form onSubmit = {submitHandler}>
                <div>
                    <label>Review:</label>
                <input
                    type = "text"
                    value = {review}
                    required
                    onChange={updateReview}
                 /> 
                </div>
                <div>
                    <label>Stars:</label>
                <input
                    type = "number"
                    value = {stars}
                    required
                    min = "1"
                    max = "5"
                    onChange={updateStars}
                 /> 
                </div>                
                <button>Submit</button>
            </form>
        </section>
    ) :
    null;
}

export default ReviewForm;