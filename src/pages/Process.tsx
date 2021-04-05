import React from 'react';
import ProcessDefinition from 'components/process/ProcessDefinition';
import ProcessPlacesList from 'components/process/ProcessPlacesList';

const Process = () => {
  return (
    <>
      <ProcessPlacesList />
      <ProcessDefinition />
    </>
  );
};

export default Process;
