import React from 'react';

import AsteroidList from '../AsteroidList/AsteroidList';

import './App.scss'

function App() {
  return (
    <div className='app'>
      <header>
        <div >
          <h1 className='app__title'>ARMAGGEDON V</h1>
          <span className='app__description'>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</span>
        </div>
        <nav className='app__nav'>
          <button type='button' className='app__nav-asteroids app__button'>Астероиды</button>
          <button type='button' className='app__nav-destroy app__button'>Уничтожение</button>
        </nav>
        <hr/>
        <div className='app__inputs'>
          <label className='app__label-checkbox'>
            <input type='checkbox' className='app__input-dangerous'/>
            <span className='app__checkbox'/>
            <span className='app__title-input-dangerous'>Показать только опасные</span>
          </label>
          <div className='app__label-distance'>
            Расстояние 
            <label>
              <input type="radio" className="app__distance" name="distance" />
              <span className="app__distance-description"> в километрах, </span>
              <label>
              <input type="radio" className="app__distance" name="distance" />
              <span className="app__distance-description">в дистанциях до луны</span></label>
            </label>
          </div>
        </div>
      </header>
      <main className='app__main'>
       <AsteroidList/>
      </main>
    </div>
  );
}

export default App;
