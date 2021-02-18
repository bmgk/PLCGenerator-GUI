import axios from 'axios';
import { IP } from './../config';
import { AcceptSingleParameterResponse, SelectedLeaf } from 'types';

const parseValue = (value: any[] | any) => {
  if (Array.isArray(value)) {
    return value.map(parseSingleValue);
  }
  return parseSingleValue(value);
};

const parseSingleValue = (value: any) => {
  return Object.keys(value).reduce((acc, el) => {
    const element = value[el];
    if (Array.isArray(element)) {
      //@ts-ignore
      acc[el] = element.map(parseToNumberIfPossible);
      return acc;
    }
    //@ts-ignore
    acc[el] = parseToNumberIfPossible(element);
    return acc;
  }, {});
};

const parseToNumberIfPossible = (element: string) => {
  if (Number.isFinite(element) === true) return element;
  if (element === '') return null;

  return element !== null && element.match(/^[0-9]+$/) != null
    ? parseInt(element)
    : element;
};

export const acceptManyParameters = (
  selectedLeaf: SelectedLeaf,
): Promise<void> => {
  return axios.post(
    `${IP}/Api/Configure/Many`,
    selectedLeaf.Parameters.map((el) => ({
      ElementName: selectedLeaf.Name,
      Name: el.Name,
      Value: parseValue(el.Value),
    })),
    {
      headers: { 'Content-type': 'application/json' },
    },
  );
};

export const acceptSingleParameter = (
  selectedLeaf: SelectedLeaf,
  index: number,
): Promise<AcceptSingleParameterResponse> => {
  return axios
    .post(
      `${IP}/Api/Configure/Single`,
      {
        ElementName: selectedLeaf.Name,
        Name: selectedLeaf.Parameters[index].Name,
        Value: parseValue(selectedLeaf.Parameters[index].Value),
      },
      {
        headers: { 'Content-type': 'application/json' },
      },
    )
    .then((res) => res.data);
};
