import axios from 'axios';
import { IP } from './../config';

import {
  HomeFormValues,
  HomeFormReponseWithId,
  HomeFormTreeResponse,
} from 'types';

export const submitHomeForm = (
  form: HomeFormValues,
): Promise<HomeFormReponseWithId[]> => {
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
    .then((el) =>
      el.data.map((el: HomeFormReponseWithId, id: number) => ({
        ...el,
        id,
      })),
    );
};

export const submitHomeFormTree = (): Promise<
  HomeFormTreeResponse
> => {
  return axios.get(`${IP}/Api/Structure`).then((el) => el.data);
};
