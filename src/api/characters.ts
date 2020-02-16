import axios from 'axios';

export const getCharacters = async (currentPage: string) => {
  let results = await axios
    .get(currentPage)
    .then(res => res.data)
    .catch(e => Error(e));

  return results;
};
