import { FormikHelpers } from 'formik';
import { SelectOption } from 'react-select-material-ui';
import { HomeFormValues } from './forms';
import {
  HomeFormReponseWithId,
  HomeFormTreeResponse,
  HomeResponseTreeAvailableValues,
} from './responses';

import { SelectedLeaf, GenericErrorResponse } from 'types';

export type HomeFormProps = {
  handleSubmit: (
    values: HomeFormValues,
    formikHelpers: FormikHelpers<HomeFormValues>,
  ) => void;
};

export type DashboardProps = {
  tree: HomeFormTreeResponse;
  rows: HomeFormReponseWithId[];
};

export type ParameterCreateProps = {
  carousele: number;
  selectedLeaf: SelectedLeaf;
};

export type DashboardParameterArrayTableBodyBody = {
  initialValues: any;
  carousele: number;
  index: number;
  selectedLeaf: SelectedLeaf;
};

export type DashboardParameterSingleTableBodyBody = {
  initialValues: any;
  carousele: number;
  selectedLeaf: SelectedLeaf;
};

export type DashboardTreePanelHeader = {
  selectedLeaf: SelectedLeaf;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type DashboardTreePanelProps = {
  selectedLeaf: SelectedLeaf | null;
};

export type DashboardSelectProps = {
  testId?: string;
  values: any;
  avaliableValues: HomeResponseTreeAvailableValues;
  handleChange: (
    value: string | string[],
    option?: SelectOption | SelectOption[],
  ) => void;
};

export type DashboardInputProps = {
  testId?: string;
  values: any;
  avaliableValues: HomeResponseTreeAvailableValues;
  handleChange:
    | ((
        event: React.ChangeEvent<
          HTMLTextAreaElement | HTMLInputElement
        >,
      ) => void)
    | undefined;
};

export type CardSubmitPanelProps = {
  submit: () => Promise<void | GenericErrorResponse>;
};

export type DashboardNavigationProps = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export type DashboardMenuProps = {
  submitStructure: () => void;
  saveDraft: () => void;
  showSettings: () => void;
  importDraft: () => void;
};

export type NotificationProps = {
  success: string;
  setSucces: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};
