import axios from 'axios';
import { IEpisode } from '../types/episode';

export const getEpisodes = async (urls: string[]) => {
  let episodesName: string[] = [];
  let idList: string = '';
  const url = 'https://rickandmortyapi.com/api/episode/';

  for (let i = 0; i < urls.length; i++) {
    idList = idList.concat(urls[i].replace(url, '') + ',');
  }

  let results: IEpisode[] = await axios
    .get(url + idList)
    .then(res => res.data)
    .catch(e => Error(e));

  for (let i = 0; i < results.length; i++) {
    episodesName.push(results[i].name);
  }

  return episodesName;
};
