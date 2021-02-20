import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { acceptSingleParameter } from '../../api/dashboard';
import { submitHomeFormTree } from '../../api/home';

import {
  appendNewAvaliableValues,
  setTree,
  useDashboardDispatch,
} from './context';
import {
  CardHeaderPanel,
  EmptyParametersPanel,
  ParameterCreate,
  ParameterArrayTableBody,
  RootTreePanel,
  CardSubmitPanel,
  ParameterSingleTableBody,
} from './tree';
import {
  AcceptSingleParameterResponse,
  DashboardTreePanelProps,
  GenericErrorResponse400,
  HomeFormTreeResponse,
  SelectedLeaf,
} from 'types';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    minWidth: '100%',
    overflowY: 'scroll',
    padding: '0 auto',
  },
}));

const extractInitialValue = (
  selectedLeaf: SelectedLeaf,
  index: number,
  setIndex: React.Dispatch<React.SetStateAction<number>>,
) => {
  let initialValues;
  try {
    initialValues = selectedLeaf.Parameters[index].Value;
  } catch {
    initialValues = selectedLeaf.Parameters[0].Value;
    setIndex(0);
  }
  return initialValues;
};

export const DashboardTreePanel: React.FC<DashboardTreePanelProps> = (
  props,
) => {
  const { selectedLeaf } = props;
  const classes = useStyles();
  const [carousele, setCarousele] = useState(0);
  const dispatch = useDashboardDispatch();

  if (selectedLeaf === null) return <RootTreePanel />;

  if (selectedLeaf.Parameters.length === 0)
    return <EmptyParametersPanel />;

  const initialValues = useMemo(
    () => extractInitialValue(selectedLeaf, carousele, setCarousele),
    [selectedLeaf, carousele, setCarousele],
  );

  const handleSubmitParameter = (): Promise<void | GenericErrorResponse400> => {
    const handleAppendNewValues = (
      response: AcceptSingleParameterResponse,
    ) => {
      const newAvaliableValues = response.map((el) => el.ElementName);
      dispatch(
        appendNewAvaliableValues(
          newAvaliableValues,
          selectedLeaf.Name,
        ),
      );
      return submitHomeFormTree();
    };

    const handleSaveTree = (res: HomeFormTreeResponse) => {
      dispatch(setTree(res));
      return Promise.resolve();
    };

    return acceptSingleParameter(selectedLeaf, carousele)
      .then(handleAppendNewValues)
      .then(handleSaveTree);
  };

  return (
    <Box display="flex" height="90vh" flex={3}>
      <Card className={classes.cardContainer}>
        <CardHeaderPanel
          selectedLeaf={selectedLeaf}
          index={carousele}
          setIndex={setCarousele}
        />
        <CardContent key={`${carousele}-${selectedLeaf.Name}`}>
          {Array.isArray(initialValues) ? (
            initialValues.map(
              (singleInitialValues: any, index: number) => (
                <ParameterArrayTableBody
                  key={`${index}-${selectedLeaf.Name}`}
                  selectedLeaf={selectedLeaf}
                  initialValues={singleInitialValues}
                  carousele={carousele}
                  index={index}
                />
              ),
            )
          ) : (
            <ParameterSingleTableBody
              selectedLeaf={selectedLeaf}
              initialValues={initialValues}
              carousele={carousele}
            />
          )}
          {Array.isArray(initialValues) ? (
            <ParameterCreate
              key={`${carousele}-${selectedLeaf.Name}`}
              selectedLeaf={selectedLeaf}
              carousele={carousele}
            />
          ) : null}
          <Box
            padding="2rem 0"
            display="flex"
            flexDirection="row-reverse"
          >
            <CardSubmitPanel submit={handleSubmitParameter} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardTreePanel;
