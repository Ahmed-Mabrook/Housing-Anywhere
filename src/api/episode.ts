import axios from 'axios';

export const getEpisodes = async (url: string) => {
  let results = await axios
    .get(url)
    .then(res => res.data)
    .catch(e => console.log('err:' + e));
  console.log(results);

  return results;
};
