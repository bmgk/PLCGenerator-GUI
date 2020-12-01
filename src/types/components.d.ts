import { FormikHelpers } from "formik";
import { HomeFormValues } from "./forms";

export type HomeFormProps = {
  handleSubmit: (
    values: HomeFormValues,
    formikHelpers: FormikHelpers<HomeFormValues>
  ) => void;
};
