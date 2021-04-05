import axios from 'axios';
import { IP } from 'api/config';

import { HomeFormTreeResponse } from 'types';

export const generateStructure = (Path: string) => {
  return axios
    .post(
      `${IP}/Api/Project/GenerateAndExport`,
      { Path },
      {
        headers: { 'Content-type': 'application/json' },
      },
    )
    .then((res) => res.data);
};

export const importDraft = (tree: HomeFormTreeResponse) => {
  return axios.post(`${IP}/Api/Configure`, tree, {
    headers: { 'Content-type': 'application/json' },
  });
};
