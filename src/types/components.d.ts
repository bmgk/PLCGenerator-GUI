import { FormikHelpers } from "formik";
import { HomeFormValues } from "./forms";
import { HomeFormReponse, HomeFormTreeResponse, HomeResponseTreeAvailableValues } from "./responses";
import { SelectedLeaf } from "../components/dashboard";

export type HomeFormProps = {
  handleSubmit: (
    values: HomeFormValues,
    formikHelpers: FormikHelpers<HomeFormValues>
  ) => void;
};

export type DashboardProps = {
  tree: HomeFormTreeResponse;
  rows: HomeFormReponse;
};

export type DashboardTreePanelCreateTableBody = { carousele: number, selectedLeaf: SelectedLeaf }
export type DashboardParameterArrayTableBodyBody = { initialValues: any, carousele: number, index: number, selectedLeaf: SelectedLeaf }
export type DashboardParameterSingleTableBodyBody = { initialValues: any, carousele: number, selectedLeaf: SelectedLeaf }
export type DashboardTreePanelHeader = { selectedLeaf: SelectedLeaf, index: number, setIndex: React.Dispatch<React.SetStateAction<number>> }
export type DashboardSelectProps = {
  testId?: string;
  isCreate?: boolean;
  values: any, el: HomeResponseTreeAvailableValues;
  handleChange: (multiple: boolean) => ((event: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>, child: React.ReactNode) => void) | undefined;
}
export type DashboardInputProps = {
  testId?: string;
  values: any;
  el: HomeResponseTreeAvailableValues;
  handleChange: ((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined;
}