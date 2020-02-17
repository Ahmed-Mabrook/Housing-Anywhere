import axios from 'axios';

export const getCharacters = async (currentPage: string) => {
  let results = await axios
    .get(currentPage)
    .then(res => res.data)
    .catch(e => console.error(e));

  return results;
};
