import React from 'react';
import { ICharacter } from '../../types/character';
import style from './character-profile.module.scss';
import { LocationAndOriginComponent } from '../location-and-origin/location-and-origin';

interface ICharacterProfileComponentProps {
  character: ICharacter;
}

export const CharacterProfileComponent = ({ character }: ICharacterProfileComponentProps) => {
  const [currentTab, setCurrentTab] = React.useState<number>(1);

  return (
    <div className={style['character-profile']}>
      <div className={style['character-profile-image']}>
        <img src={character.image} alt='not found' />
        <div className={style['character-profile-title']}>
          <h2 className={style['character-profile-name']}>{character.name}</h2>
          <div className={style['character-profile-created']}>
            <span>id: {character.id}</span> -
            <span> created in: {new Date(Date.parse(character.created)).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className={style['character-profile-body']}>
        <ul>
          <li style={currentTab === 1 ? { backgroundColor: 'orange' } : {}} onClick={() => setCurrentTab(1)}>
            Information
          </li>
          <li style={currentTab === 2 ? { backgroundColor: 'orange' } : {}} onClick={() => setCurrentTab(2)}>
            Location
          </li>
          <li style={currentTab === 3 ? { backgroundColor: 'orange' } : {}} onClick={() => setCurrentTab(3)}>
            Episodes
          </li>
        </ul>
        {currentTab === 1 ? (
          <div className={style['character-profile-information']}>
            {character.status && (
              <div>
                <span>STATUS</span> <span>{character.status}</span>
              </div>
            )}
            {character.species && (
              <div>
                <span>SPECIES</span> <span>{character.species}</span>
              </div>
            )}
            {character.gender && (
              <div>
                <span>GENDER</span> <span>{character.gender}</span>
              </div>
            )}
            {/* {character.origin.name && (
            <li className={style[character.origin.name !== 'unknown' ? 'character-profile-links' : '']}>
              <span>ORIGIN</span> <span>{character.origin.name}</span>
            </li>
          )}
          {character.location.name && (
            <li
              className={style[character.location.name !== 'unknown' ? 'character-profile-links' : '']}
              onMouseEnter={() => alert('yo')}
            >
              <span>LAST LOCATION</span> <span>{character.location.name}</span>
            </li>
          )} */}
          </div>
        ) : (
          currentTab === 2 && (
            <LocationAndOriginComponent locationURL={character.location.url} originURL={character.origin.url} />
          )
        )}
      </div>
    </div>
  );
};
