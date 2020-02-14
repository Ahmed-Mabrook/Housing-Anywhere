import React from 'react';
import { ICharacter } from '../../types/character';
import style from './character-profile.module.scss';

interface ICharacterProfileComponentProps {
  character: ICharacter;
}

export const CharacterProfileComponent = ({ character }: ICharacterProfileComponentProps) => {
  return (
    <div className={style['character-profile']}>
      <div className={style['character-profile-image']}>
        <img src={character.image} alt='not found' />
        <div className={style['character-profile-title']}>
          <h2 className={style['character-profile-name']}>{character.name}</h2>
          <div className={style['character-profile-created']}>
            <span>id:{character.id}</span> -
            <span> created in: {new Date(Date.parse(character.created)).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className={style['character-profile-body']}>
        <ul>
          <li>
            <span>STATUS</span> <span>{character.status}</span>
          </li>
          <li>
            <span>SPECIES</span> <span>{character.species}</span>
          </li>
          <li>
            <span>GENDER</span> <span>{character.gender}</span>
          </li>
          <li>
            <span>ORIGIN</span> <span>{character.origin.name}</span>
          </li>
          <li>
            <span>LAST LOCATION</span> <span>{character.location.name}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
