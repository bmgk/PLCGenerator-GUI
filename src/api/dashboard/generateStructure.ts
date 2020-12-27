import axios from 'axios';
import { IP } from '../config';

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
