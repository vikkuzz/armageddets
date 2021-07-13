import {AsteroidState,AsteroidActionTypes,AsteroidAction} from '../../types/asteroid';

const initialState: AsteroidState = {
    asteroids:[],
    loading: false,
    error:null
}

export const asteroidReducer = (state = initialState,action:AsteroidAction):AsteroidState => {
    switch(action.type){
        case AsteroidActionTypes.FETCH_ASTEROIDS:
            return {loading: true, error: null,asteroids:[]}
        case AsteroidActionTypes.FETCH_ASTEROIDS_SUCCESS:
            return {loading: false, error: null,asteroids:action.payload}
        case AsteroidActionTypes.FETCH_ASTEROIDS_ERROR:
            return {loading: false, error: action.payload, asteroids:[]}
        default:
            return state;
    }
}