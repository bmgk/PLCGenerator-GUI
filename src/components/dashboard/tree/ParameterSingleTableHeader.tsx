import React from 'react';
import { useTranslation } from 'react-i18next';
import TableHead from '@material-ui/core/TableHead';
import CommonTableRow from 'components/common/table/CommonTableRow';

const ParameterSingleTableHeader = () => {
  const { t } = useTranslation();

  return (
    <TableHead>
      <CommonTableRow
        label={'parameter-single-header'}
        name={t('dashboard.dashboardTree.header.name')}
      >
        {t('dashboard.dashboardTree.header.value')}
      </CommonTableRow>
    </TableHead>
  );
};

export default ParameterSingleTableHeader;
