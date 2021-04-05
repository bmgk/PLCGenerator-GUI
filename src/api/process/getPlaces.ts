import { IP } from 'api/config';
import axios from 'axios';
import { ProcessPlacesResoponse } from 'types';

export const getPlaces = (): Promise<ProcessPlacesResoponse> => {
  return axios
    .get(`${IP}/Api/Process/Places`, {
      headers: { 'Content-type': 'application/json' },
    })
    .then((res) => res.data.Places.map((Name: string) => ({ Name })));
};
