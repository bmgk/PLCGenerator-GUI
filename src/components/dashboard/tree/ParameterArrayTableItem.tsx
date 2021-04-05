import React from 'react';
import CommonTableRow from 'components/common/table/CommonTableRow';
import DashboardSelect from './Inputs/DashboardSelect';
import DashboardInput from './Inputs/DashboardInput';

import { HomeResponseTreeAvailableValues } from 'types';

type ParameterArrayTableItemProps = {
  label: string;
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

const ParemeterArrayTableItem: React.FC<ParameterArrayTableItemProps> = (
  props,
) => {
  const {
    values,
    label,
    avaliableValues,
    onChangeSelect,
    onChangeInput,
  } = props;
  return (
    <CommonTableRow label={label} name={avaliableValues.Name}>
      {Array.isArray(avaliableValues.Value) ? (
        <DashboardSelect
          key={JSON.stringify(values)}
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

export default ParemeterArrayTableItem;
