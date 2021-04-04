export type HomeFormReponseSingleElement = {
  id: number;
  operandIdentifier: number;
  address: number;
  name: string;
  dataType: string;
  comment: string;
  accessibleFromHmi: boolean;
  visibleInHmiEngineering: boolean;
  writableFromHmi: boolean;
};

export type HomeFormReponseSingleElementWithId = HomeFormReponseSingleElement & {
  id: number;
};

export type HomeFormReponseWithId = HomeFormReponseSingleElementWithId[];

type HomeResponseTreeAvailableValues = {
  Name: string;
  Type: string;
  MultiSelect: boolean;
  Value: string[] | number[] | any;
};

type HomeResponseTreeParameters = {
  Name: string;
  Value: any[] | any;
  AvailableValues: HomeResponseTreeAvailableValues[];
};

type HomeResponseTreeChildren = {
  Parameters: HomeResponseTreeParameters[];
  Children: HomeResponseTreeChildren[];
  Name: string;
};

export type HomeFormTreeResponse = {
  Name: string;
  Children: HomeResponseTreeChildren[];
};

export type AcceptSingleParameterResponse = [
  { ElementName: string; ParameterName: string },
];
export type ProcessPlaceSingle = {
  Name: string;
};
export type ProcessPlacesResoponse = ProcessPlaceSingle[];
export type ProcessActionSingle = {
  [key: string]: {
    [key: string]: {
      ToolNames: string[];
      AvailableActions: string[];
    }[];
  };
};
export type ProcessActionResponse = {
  AvailableActions: ProcessActionSingle;
};
export type ProcessDefinictionStep = {
  ShortcutName: string;
  Comment: string;
  Actions: {
    Element: string;
    ToolType: string;
    ActionName: string;
    ToolName: string;
    TypeConditions: null;
  }[];
};
export type ProcessDefinictionResponse = {
  Element: string;
  Branches: {
    Steps: ProcessDefinictionStep[];
  }[];
};
export type ProcessDefinictionCreate = ProcessDefinictionStep;
export type ErrorArg400 = { [key: string]: string };
export type ErrorRule400 = { ErrorCode: string; Args: ErrorArg400 };
export type ErrorBody400 = {
  FieldName: string;
  Rules: ErrorRule400[];
};
export type GenericErrorResponse400 = {
  Errors: ErrorBody400[];
};

export type ErrorArg500 = string[];
export type ErrorBody500 = { ErrorCode: string; Args: ErrorArg500 };
export type GenericErrorResponse500 = ErrorBody500;
