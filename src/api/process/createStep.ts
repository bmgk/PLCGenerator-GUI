import { IP } from 'api/config';
import axios from 'axios';
import {
  ProcessPlacesResoponse,
  ProcessPlaceSingle,
  ProcessDefinictionCreate,
} from 'types';

export const createPlace = (
  { Name: Element }: ProcessPlaceSingle,
  Steps: ProcessDefinictionCreate[],
): Promise<ProcessPlacesResoponse> => {
  return axios
    .post(
      `${IP}/Api/Process/Place`,
      {
        Element,
        Branches: { Steps },
      },
      {
        headers: { 'Content-type': 'application/json' },
      },
    )
    .then((res) => res.data);
};
