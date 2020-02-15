import React from 'react';
import style from './character-episodes.module.scss';
import { getEpisodes } from '../../api/episode';
import { SyncLoader } from 'react-spinners';

interface ICharacterEpisodesComponent {
  episodes: string[];
}

export const CharacterEpisodesComponent = (props: ICharacterEpisodesComponent) => {
  const [episodes, setEpisodes] = React.useState<string[]>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const loadEpisodes = async () => {
      const data = await getEpisodes(props.episodes);
      setEpisodes(data);
    };
    loadEpisodes();
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [props.episodes]);

  return episodes && !isLoading ? (
    <div className={style['character-episodes']}>
      <div className='character-information'>
        <h5>Episodes</h5>
        {episodes.map((episode: string, key: number) => (
          <div key={key}>
            <span className={style['character-episodes-name']}>{key + 1} </span>
            <span> {episode}</span>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className='spinner'>
      <SyncLoader size={6} color={'#ff9800'} />
    </div>
  );
};
