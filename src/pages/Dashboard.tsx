import React from 'react';
import Box from '@material-ui/core/Box';
import RouteNavigation from 'components/route/RouteNavigation';
import DashboardTable from 'components/dashboard/DashboardTable';
import DashboardTree from 'components/dashboard/DashboardTree';
import Process from './Process';

const Dashboard: React.FC = () => {
  const [value, setValue] = React.useState(2);

  return (
    <Box display="flex" flexDirection="column">
      <RouteNavigation value={value} setValue={setValue} />
      {value === 0 ? <DashboardTable /> : null}
      {value === 1 ? <DashboardTree /> : null}
      {value === 2 ? <Process /> : null}
    </Box>
  );
};

export default Dashboard;
