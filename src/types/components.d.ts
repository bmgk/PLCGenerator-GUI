import { FormikHelpers } from "formik";
import { HomeFormValues } from "./forms";
import { HomeFormReponse, HomeFormTreeResponse } from "./responses";

export type HomeFormProps = {
  handleSubmit: (
    values: HomeFormValues,
    formikHelpers: FormikHelpers<HomeFormValues>
  ) => void;
};

export type DashboardTableProps = {
  rows: HomeFormReponse;
};

export type DashboardProps = {
  tree: HomeFormTreeResponse;
  rows: HomeFormReponse;
};

export type DashboardTreeProps = {
  tree: HomeFormTreeResponse;
};
