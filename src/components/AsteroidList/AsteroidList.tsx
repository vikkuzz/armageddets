import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../hooks/useTypesSelector';
import { fetchAsteroids } from '../../store/action-creators/asteroid';

import AsteroidCard from '../AsteroidCard/AsteroidCard';

import './AsteroidList.scss';

const AsteroidList: React.FC = () => {
    const {asteroids,loading,error} = useTypesSelector((state)=>state.asteroid);
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(fetchAsteroids())
    },[dispatch]);
    
    if(loading){
        return <h1>Идет загрузка...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div className='asteroid-list'>
            {asteroids.map((asteroid)=>{
                
                return(
                    
                    <AsteroidCard key={asteroid.id} asteroid={asteroid}/>
                )
            })}            
        </div>
    );
};

export default AsteroidList;