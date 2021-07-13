/* eslint-disable array-callback-return */
import {ICard} from '../../types/iasteroidCard'

import './AsteroidCard.scss';

const AsteroidCard: React.FC <ICard> = ({asteroid}) => {
    
    let cardStyle = 'card';
    if(asteroid.is_potentially_hazardous_asteroid){
        cardStyle = 'card card--danger-asteroid';
    } else {
        cardStyle = 'card card--not-danger-asteroid';
    }
    let danger = asteroid.is_potentially_hazardous_asteroid?'опасен': 'не опасен';


    let currentDate = Date.now();
    let newTime = asteroid.close_approach_data.filter((item)=> item.epoch_date_close_approach > currentDate);
    
    let formatter = new Intl.DateTimeFormat("ru", {        
        year: "numeric",
        month: "long",
        day: "numeric"
      });

    const approachDate: string = formatter.format(new Date(newTime[0].close_approach_date))
    const estimatedDiameter: string = (asteroid.estimated_diameter.kilometers.estimated_diameter_max).toFixed();
    const missDistance = new Intl.NumberFormat('ru-RU').format(+(+newTime[0].miss_distance.kilometers).toFixed());     

    return(
        <div className={cardStyle}>
            <div className='card__header'>
                <div className='card__asteroid'><img alt='asteroid' src='./img/asteroid-card.svg'/></div>
                <div className='card__asteroid-name'>{asteroid.name}</div>
            </div>   
            <div className='card__body'>
                <div>
                    <div className='card__display-name'>{asteroid.name}</div>
                    <div className='card__body-date'>Дата<div className='card__body-dotted'></div> <span className='card__asteroid-data'>{approachDate}</span></div>
                    <div className='card__body-distance'>Расстояние<div className='card__body-dotted'></div><span className='card__asteroid-data'>{missDistance +' км'}</span></div>
                    <div className='card__asteroid-info'>Размер<div className='card__body-dotted'></div><span className='card__asteroid-data'>{estimatedDiameter +' км'}</span></div>
                </div>
                <div className='card__button'>
                    Оценка:
                    <span className='card__danger'>{danger}</span>
                    <button className='card__destroy-button' type='button'>На уничтожение</button>
                </div>
            </div>         
            
        </div>
    )
}

export default AsteroidCard;