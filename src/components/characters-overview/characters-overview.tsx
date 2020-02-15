import React from 'react';
import { ICharacter } from '../../types/character';
import style from './characters-overview.module.scss';
import { CharacterProfileComponent } from '../character-profile/character-profile';
import { getCharacters } from '../../api/characters';

interface ICharactersOverviewComponentProps {}

export const CharactersOverviewComponent = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [characters, setCharacters] = React.useState<ICharacter[]>([]);

  React.useEffect(() => {
    const loadCharacters = async () => {
      const data = await getCharacters(currentPage);
      data && setCharacters(data.results);
    };
    loadCharacters();
    window.scroll({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className={style['characters-overview']}>
      <div className='uk-container'>
        <div className='uk-grid uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l'>
          {characters.length > 0 &&
            characters.map((character: ICharacter, key: number) => (
              <div key={key} className={style['characters-overview-item']}>
                <CharacterProfileComponent character={character} />
              </div>
            ))}
        </div>
        <div className={style['characters-overview-pagination']}>
          <span onClick={() => (currentPage > 1 ? setCurrentPage(currentPage - 1) : '')}>Previous Page</span>
          <span onClick={() => setCurrentPage(currentPage + 1)}>Next Page</span>
        </div>
      </div>
    </div>
  );
};
