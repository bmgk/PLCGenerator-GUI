import { FormikHelpers } from 'formik';
import { SelectOption } from 'react-select-material-ui';
import { HomeFormValues } from './forms';
import {
  HomeFormReponseWithId,
  HomeFormTreeResponse,
  HomeResponseTreeAvailableValues,
} from './responses';

import { SelectedLeaf } from 'types';

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

export type DashboardTreePanelCreateTableBody = {
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
export type DashboardSelectProps = {
  testId?: string;
  isCreate?: boolean;
  values: any;
  el: HomeResponseTreeAvailableValues;
  handleChange: (
    value: string | string[],
    option?: SelectOption | SelectOption[],
  ) => void;
};
export type DashboardInputProps = {
  testId?: string;
  values: any;
  el: HomeResponseTreeAvailableValues;
  handleChange:
    | ((
        event: React.ChangeEvent<
          HTMLTextAreaElement | HTMLInputElement
        >,
      ) => void)
    | undefined;
};

export type CardSubmitPanelProps = {
  submit: () => Promise<void>;
};
export type RootPanelProps = {
  submit: () => Promise<void>;
};
