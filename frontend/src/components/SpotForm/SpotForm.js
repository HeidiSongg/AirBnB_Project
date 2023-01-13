import './SpotForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import { postSpot } from '../../store/spots';

const SpotForm = () => {
    const [errors, setErrors] = useState([]);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState= (e) => setState(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updateLat= (e) => setLat(e.target.value);
    const updateLng= (e) => setLng(e.target.value);
    const updateName= (e) => setName(e.target.value);
    const updateDescription= (e) => setDescription(e.target.value);
    const updatePrice= (e) => setPrice(e.target.value);

    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const submitHandler = (e) => {
        e.preventDefault();

        setErrors([]);

        const payload = {
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price
        }
        
        dispatch(postSpot(payload))
        .then(()=> setAddress(''))
        .then(()=> setCity(''))
        .then(()=> setState(''))
        .then(()=> setCountry(''))
        .then(()=> setLat(''))
        .then(()=> setLng(''))
        .then(()=> setName(''))
        .then(()=> setDescription(''))
        .then(()=> setPrice(''))
        .catch(async res => {
            const data = await res.json();
            console.log(data)
            if (data.erros) setErrors(data.errors);
        })
    
    }

    return sessionUser.id ? (
        
        <section> 
              {errors.length > 0 && errors.map((error, i) => {
                <div key={i}>{error}</div>
              })}
            <div>
            Spot Form
            <form className="create-spot-form" onSubmit = {submitHandler}>
                <div>
                    <label>Address:</label>
                <input
                    type = "text"
                    value = {address}
                    required
                    onChange={updateAddress}
                 /> 
                </div>
                <div>
                    <label>City:</label>
                <input
                    type = "text"
                    value = {city}
                    required
                    onChange={updateCity}
                 /> 
                </div>
                <div>
                    <label>State:</label> 
                 <input
                    type = "text"
                    value = {state}
                    required
                    onChange={updateState}
                 />
                </div>
                <div>
                <label>Country:</label> 
                <input
                    type = "text"
                    value = {country}
                    required
                    onChange={updateCountry}
                 />

                </div>
                <div>
                <label>Lat:</label>
                <input
                    type = "number"
                    value = {lat}
                    required
                    onChange={updateLat}
                 />
                </div>
                <div>
                <label>Lng:</label>
                <input
                    type = "number"
                    value = {lng}
                    required
                    onChange={updateLng}
                 />
                </div>
                <div>
                <label>Name:</label>
                <input
                    type = "text"
                    value = {name}
                    required
                    onChange={updateName}
                 />
                </div>
                <div>
                <label>Description:</label>
                <input
                    type = "text"
                    value = {description}
                    required
                    onChange={updateDescription}
                 />
                </div>
                <div>
                <label>Price:</label>
                <input
                    type = "number"
                    value = {price}
                    required
                    min = "1"
                    onChange={updatePrice}
                 />                           
                </div> 
                <button>Submit</button>
            </form>
            </div>  
        </section>  
    ) :
    null;
}

export default SpotForm;