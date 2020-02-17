import axios from 'axios';

export const getLocationAndOrigin = async (locationURL: string, originURL: string) => {
  let location = await axios
    .get(locationURL)
    .then(res => res.data)
    .catch(e => console.error(e));

  let origin = await axios
    .get(originURL)
    .then(res => res.data)
    .catch(e => console.error(e));

  return { location, origin };
};
