import { csrfFetch } from './csrf'

const LOAD_SPOTS = "spots/loadSpots";
const ADD_SPOT = "spots/addSpot"

const loadSpots = (spots) => ({
	type: LOAD_SPOTS,
	spots
});

const addSpot = (spot) => ({
	type:ADD_SPOT,
	spot
})


export const loadAllSpots = () => async (dispatch) => {
	const res = await csrfFetch("/api/spots");

	if (res.ok){
		const spots = await res.json();
		dispatch(loadSpots(spots))
	}

}

export const postSpot = (spot) => async (dispatch) =>{

	const res = await csrfFetch("/api/spots", {
		method: 'POST',
		body: JSON.stringify(spot)
	});

	if (res.ok) {
		const spot = await res.json();
		dispatch(addSpot(spot));
	}
}

const initialState = {};

const spotsReducer = (state = initialState, action) => {
	let newState
	switch (action.type) {
		case LOAD_SPOTS:
			newState = {...state}
			action.spots.Spots.forEach(spot => {
				newState[spot.id] = spot
			})
			return newState
			
		case ADD_SPOT:
			newState = {...state}
			newState[action.spot.id] = action.spot;
			return newState;

		default :
			return state	
	}
}

export default spotsReducer