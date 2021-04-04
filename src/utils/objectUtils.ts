import _ from 'lodash';

export const isDeepEqual = (value: any, other: any) => {
  return _.isEqual(value, other);
};

export const cloneDeep = <T>(value: T): T => {
  return _.cloneDeep(value);
};
