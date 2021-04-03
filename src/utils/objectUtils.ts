import _ from 'lodash';

export const isDeepEqual = (value: any, other: any) => {
  return _.isEqual(value, other);
};
