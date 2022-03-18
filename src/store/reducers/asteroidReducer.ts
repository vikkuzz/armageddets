import {AsteroidState,AsteroidActionTypes,AsteroidAction} from '../../types/asteroid';

const initialState: AsteroidState = {
    asteroids:[],
    loading: false,
    error:null,
    distance: 'kilometers'
}

export const asteroidReducer = (state = initialState,action:AsteroidAction):AsteroidState => {
    console.log(state)
    switch(action.type){
        case AsteroidActionTypes.FETCH_ASTEROIDS:
            return {...state, loading: true, error: null,asteroids:[]}
        case AsteroidActionTypes.FETCH_ASTEROIDS_SUCCESS:
            return {...state, loading: false, error: null,asteroids:action.payload}
        case AsteroidActionTypes.FETCH_ASTEROIDS_ERROR:
            return {...state, loading: false, error: action.payload, asteroids:[]}
        case AsteroidActionTypes.ASTEROIDS_MOON_DISTANCE:
            return {...state, distance:'moon-distance'}
        case AsteroidActionTypes.ASTEROIDS_KILOMETERS_DISTANCE:
            return{...state, distance:'kilometers'}
        default:
            return state;
    }
}