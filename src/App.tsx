import React from 'react';
import './App.scss';
import { CharactersOverviewComponent } from './components/characters-overview/characters-overview';

const App = () => {
  return (
    <div className='App'>
      <div className={'header'}>
        <div>
          <h2>Housing Anywhere Assessment</h2>
          <span className='uk-visible@m'>all rick and morty character's profile!</span>
          <span className='uk-hidden@m uk-visible@s'>the rick and morty api</span>
          <span className='uk-hidden@s'>get schwifty</span>
        </div>
      </div>
      <CharactersOverviewComponent />
    </div>
  );
};

export default App;
