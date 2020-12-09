import { FormikHelpers } from "formik";
import { HomeFormValues } from "./forms";
import { HomeFormReponse, HomeFormTreeResponse } from "./responses";
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
export type DashboardTreePanelTableBody = { initialValues: any, carousele: number, index: number, selectedLeaf: SelectedLeaf }
export type DashboardTreePanelHeader = { selectedLeaf: SelectedLeaf, index: number, setIndex: React.Dispatch<React.SetStateAction<number>> }