import React from 'react';
import { ICharacter } from '../../types/character';
import style from './character-profile.module.scss';
import { LocationAndOriginComponent } from '../location-and-origin/location-and-origin';
import { ProfileTabsComponent } from '../profile-tabs/profile-tabs';
import { CharacterEpisodesComponent } from '../character-episodes/character-episodes';

interface ICharacterProfileComponentProps {
  character: ICharacter;
}

export const CharacterProfileComponent = ({ character }: ICharacterProfileComponentProps) => {
  const [currentTab, setCurrentTab] = React.useState<number>(0);
  const tabs: string[] = ['Information', 'Location', 'Episodes'];
  return (
    <div className={style['character-profile']}>
      <div className={style['character-profile-image']}>
        <img src={character.image} alt='not found' />
        <div className={style['character-profile-image-overlay']}>
          <div className={style['character-profile-title']}>
            <h2>{character.name}</h2>
            <div>
              <span> created in: {new Date(Date.parse(character.created)).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style['character-profile-tabs']}>
        <ProfileTabsComponent tabs={tabs} onTabSelected={setCurrentTab} />
      </div>
      <div className={style['character-profile-body']}>
        {currentTab === 0 ? (
          <div className='character-information'>
            <h5>Information</h5>
            {character.status && (
              <div>
                Status<span>{character.status}</span>
              </div>
            )}
            {character.species && (
              <div>
                Species<span>{character.species}</span>
              </div>
            )}
            {character.gender && (
              <div>
                Gender<span>{character.gender}</span>
              </div>
            )}
          </div>
        ) : currentTab === 1 ? (
          <LocationAndOriginComponent locationURL={character.location.url} originURL={character.origin.url} />
        ) : (
          currentTab === 2 && <CharacterEpisodesComponent episodes={character.episode} />
        )}
      </div>
    </div>
  );
};
