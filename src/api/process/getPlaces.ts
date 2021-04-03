import { IP } from 'api/config';
import axios from 'axios';

export const getPlaces = (): Promise<void> => {
  return axios.get(`${IP}/Api/Process/Places`, {
    headers: { 'Content-type': 'application/json' },
  });
};
