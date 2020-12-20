import axios from 'axios';
import { IP } from './../config';

import {
  HomeFormValues,
  HomeFormReponse,
  HomeFormTreeResponse,
} from 'types';

export const submitHomeForm = (
  form: HomeFormValues,
): Promise<HomeFormReponse> => {
  return axios
    .post(
      `${IP}/Api/Structure/CreateFromTags`,
      {
        LineName: form.projectName,
        TagPaths: form.eplanTags.map((el) => el.path),
      },
      {
        headers: { 'Content-type': 'application/json' },
      },
    )
    .then((el) => el.data);
};

export const submitHomeFormTree = (
  form: HomeFormValues,
): Promise<HomeFormTreeResponse> => {
  return axios.get(`${IP}/Api/Structure`).then((el) => el.data);
};
