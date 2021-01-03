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

export type ErrorArg = { [key: string]: string };
export type ErrorRule = { ErrorCode: string; Args: ErrorArg };
export type ErrorBody = { FieldName: string; Rules: ErrorRule[] };
export type GenericErrorResponse = {
  Errors: ErrorBody[];
};
