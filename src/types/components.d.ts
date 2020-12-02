import { FormikHelpers } from "formik";
import { HomeFormValues } from "./forms";
import { HomeFormReponse } from "./responses";

export type HomeFormProps = {
  handleSubmit: (
    values: HomeFormValues,
    formikHelpers: FormikHelpers<HomeFormValues>
  ) => void;
};

export type DashboardTableProps = {
  rows: HomeFormReponse;
};
