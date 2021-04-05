import React from 'react';
import CommonTableRow from 'components/common/table/CommonTableRow';
import DashboardSelect from './Inputs/DashboardSelect';
import DashboardInput from './Inputs/DashboardInput';

import { HomeResponseTreeAvailableValues } from 'types';

type ParameterSingleTableItemProps = {
  values: any;
  avaliableValues: HomeResponseTreeAvailableValues;
  onChangeSelect: (
    name: string,
  ) => (event: any, value: string | string[] | null) => void;
  onChangeInput: (
    name: string,
  ) => (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
};

const ParameterSingleTableItem: React.FC<ParameterSingleTableItemProps> = (
  props,
) => {
  const {
    values,
    avaliableValues,
    onChangeSelect,
    onChangeInput,
  } = props;
  return (
    <CommonTableRow
      name={avaliableValues.Name}
      label={'parameter-single-row'}
    >
      {Array.isArray(avaliableValues.Value) ? (
        <DashboardSelect
          values={values}
          avaliableValues={avaliableValues}
          handleChange={onChangeSelect(avaliableValues.Name)}
        />
      ) : (
        <DashboardInput
          values={values}
          avaliableValues={avaliableValues}
          handleChange={onChangeInput(avaliableValues.Name)}
        />
      )}
    </CommonTableRow>
  );
};

export default ParameterSingleTableItem;
