import axios from 'axios';

export const getCharacters = async (currentPage: number) => {
  let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

  let results = await axios
    .get(url)
    .then(res => res.data)
    .catch(e => console.log('err:' + e));
    console.log("api characters");

  return results;
};
