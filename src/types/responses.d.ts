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
  name: string;
  type: string;
  multiSelect: boolean;
  value: string[] | number[] | any;
};

type HomeResponseTreeParameters = {
  name: string;
  value: any[] | any;
  availableValues: HomeResponseTreeAvailableValues[];
};

type HomeResponseTreeChildren = {
  parameters: HomeResponseTreeParameters[];
  children: HomeResponseTreeChildren[];
  name: string;
};

export type HomeFormTreeResponse = {
  name: string;
  children: HomeResponseTreeChildren[];
};
