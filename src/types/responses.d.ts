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

export type AcceptSingleParameterResponse = [
  { ElementName: string; ParameterName: string },
];
