import { csrfFetch } from './csrf'

const LOAD = "spots/LOAD";


const load = (spots) => ({
	type: LOAD,
	spots,
});


export const loadAllSpots = () => async (dispatch) => {
	const res = await csrfFetch("/api/spots");

	if (res.ok){
		const spots = await res.json();
		dispatch(loadAllSpots(spots))
	}

}

const initialState = {};

const spotsReducer = (state = initialState, action) => {
	let newState
	switch (action.type) {
		case LOAD:
			return {
				state
			}
		default :
			return state	
	}
}

export default spotsReducer