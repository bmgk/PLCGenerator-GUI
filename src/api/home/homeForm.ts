import { homeFormSubmitWithIds } from "../../../tests/responses";

import { HomeFormValues, HomeFormReponse } from "../../types";

export const submitHomeForm = (
  form: HomeFormValues
): Promise<HomeFormReponse> => {
  return Promise.resolve(homeFormSubmitWithIds);
};
