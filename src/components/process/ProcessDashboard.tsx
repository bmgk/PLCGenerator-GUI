import React from 'react';
import ProcessDefinition from './ProcessDefinition';
import ProcessPlacesList from './ProcessPlacesList';

const ProcessDashboard = () => {
  return (
    <>
      <ProcessPlacesList />
      <ProcessDefinition />
    </>
  );
};

export default ProcessDashboard;
