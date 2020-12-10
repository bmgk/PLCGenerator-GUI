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

export type HomeFormReponse = HomeFormReponseSingleElement[];

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
