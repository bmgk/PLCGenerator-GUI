import React from 'react';
import { Box } from '@material-ui/core';
import DashboardNavigation from './../components/dashboard/DashboardNavigation';
import DashboardTable from './../components/dashboard/DashboardTable';
import DashboardTree from './../components/dashboard/DashboardTree';

const Dashboard: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box display="flex" flexDirection="column">
      <DashboardNavigation value={value} setValue={setValue} />
      {value === 0 ? <DashboardTable /> : null}
      {value === 1 ? <DashboardTree /> : null}
    </Box>
  );
};

export default Dashboard;
