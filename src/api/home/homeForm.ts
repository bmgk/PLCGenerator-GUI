import { homeFormSubmitWithIds, homeFormSubmitTree } from "../../../tests/responses";

import { HomeFormValues, HomeFormReponse } from "../../types";

export const submitHomeForm = (
  form: HomeFormValues
): Promise<HomeFormReponse> => {
  return Promise.resolve(homeFormSubmitWithIds);
};

export const submitHomeFormTree = (
  form: HomeFormValues
): Promise<any> => {
  return Promise.resolve(homeFormSubmitTree);
}