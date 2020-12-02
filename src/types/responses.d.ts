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
