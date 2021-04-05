import { IP } from 'api/config';
import axios from 'axios';
import { ProcessPlaceSingle, ProcessActionResponse } from 'types';

export const getActions = (
  place: ProcessPlaceSingle,
): Promise<ProcessActionResponse> => {
  return axios
    .get(`${IP}/Api/Process/Actions/${place.Name}`, {
      headers: { 'Content-type': 'application/json' },
    })
    .then((res) => res.data);
};
