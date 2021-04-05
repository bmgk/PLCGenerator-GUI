import React from 'react';
import { useTranslation } from 'react-i18next';
import TableHead from '@material-ui/core/TableHead';
import CommonTableRow from 'components/common/table/CommonTableRow';

const ProcessDefinitionStepDetailsHeader = () => {
  const { t } = useTranslation();

  return (
    <TableHead>
      <CommonTableRow
        label={'process-definition-details-header'}
        name={t('dashboard.dashboardTree.header.name')}
      >
        {t('dashboard.dashboardTree.header.value')}
      </CommonTableRow>
    </TableHead>
  );
};

export default ProcessDefinitionStepDetailsHeader;
