import { IP } from 'api/config';
import axios from 'axios';
import {
  ProcessDefinictionResponse,
  ProcessPlaceSingle,
} from 'types';

export const getProcessDefinition = (
  place: ProcessPlaceSingle,
): Promise<ProcessDefinictionResponse> => {
  return axios
    .get(`${IP}/Api/Process/Place/${place.Name}`, {
      headers: { 'Content-type': 'application/json' },
    })
    .then((res) => res.data);
};
