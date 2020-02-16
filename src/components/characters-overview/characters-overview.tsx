import React from 'react';
import { ICharacter } from '../../types/character';
import style from './characters-overview.module.scss';
import { CharacterProfileComponent } from '../character-profile/character-profile';
import { getCharacters } from '../../api/characters';

export const CharactersOverviewComponent = () => {
  let url = `https://rickandmortyapi.com/api/character/?page=1`;
  const [currentPage, setCurrentPage] = React.useState<string>(url);
  const [characters, setCharacters] = React.useState<ICharacter[]>([]);
  const [infoPage, setInfoPage] = React.useState<any>({});

  React.useEffect(() => {
    const loadCharacters = async () => {
      const data = await getCharacters(currentPage);
      data && setCharacters(data.results);
      data && setInfoPage(data.info);
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
          <span onClick={() => (infoPage.prev ? setCurrentPage(infoPage.prev) : '')}>Previous Page</span>
          <span onClick={() => (infoPage.next ? setCurrentPage(infoPage.next) : '')}>Next Page</span>
        </div>
      </div>
    </div>
  );
};
