import {AsteroidAction, AsteroidActionTypes} from '../../types/asteroid';
import { Dispatch } from "redux";
import axios from 'axios';

export const fetchAsteroids = () =>{
    return async(dispatch:Dispatch<AsteroidAction>)=>{
        try{
            dispatch({type:AsteroidActionTypes.FETCH_ASTEROIDS});
            const response = await axios.get(
                'https://api.nasa.gov/neo/rest/v1/neo/browse?size=100&api_key=DEMO_KEY'
            );
            console.log(response)
            
            dispatch({type:AsteroidActionTypes.FETCH_ASTEROIDS_SUCCESS, payload:response.data.near_earth_objects});
        } catch(e){
            dispatch({type:AsteroidActionTypes.FETCH_ASTEROIDS_ERROR,
                     payload:'Произошла ошибка при загрузке астероидов'})
        }
    }
}
export const moonDistance = () => ({type:AsteroidActionTypes.ASTEROIDS_MOON_DISTANCE });
export const kilometersDistance = () => ({type:AsteroidActionTypes.ASTEROIDS_KILOMETERS_DISTANCE });