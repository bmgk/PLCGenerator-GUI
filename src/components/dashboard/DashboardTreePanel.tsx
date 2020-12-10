import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { SelectedLeaf, useDashboardStore, } from "./context";
import {
  CardHeaderPanel,
  EmptyParametersPanel,
  ParameterCreateTableBody,
  ParameterArrayTableBody,
  RootTreePanel,
  CardSubmitPanel,
  ParameterSingleTableBody
} from "./treePanel";

const useStyles = makeStyles((theme) => ({
  treePanelContainer: {
    display: "flex",
    height: "90vh",
    flex: 3,
  },
  cardContainer: {
    minWidth: "100%",
    overflowY: "scroll",
    padding: "0 auto",
  },
}));

const extractInitialValue = (selectedLeaf: SelectedLeaf, index: number, setIndex: React.Dispatch<React.SetStateAction<number>>) => {
  let initialValues;
  try {
    initialValues = selectedLeaf.Parameters[index].Value;
  }
  catch {
    initialValues = selectedLeaf.Parameters[0].Value;
    setIndex(0)
  }
  return initialValues;
}

export const DashboardTreePanel: React.FC = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const { selectedLeaf } = useDashboardStore();

  if (selectedLeaf === null)
    return <RootTreePanel />;

  if (selectedLeaf.Parameters.length === 0)
    return <EmptyParametersPanel />;

  const initialValues = extractInitialValue(selectedLeaf, index, setIndex);

  return (
    <div className={classes.treePanelContainer}>
      <Card className={classes.cardContainer}>
        <CardHeaderPanel selectedLeaf={selectedLeaf} index={index} setIndex={setIndex} />
        <CardContent key={`${index}-${selectedLeaf.Name}`}>
          {Array.isArray(initialValues) ?
            initialValues.map((el: any, i: number) => <ParameterArrayTableBody key={`${i}-${selectedLeaf.Name}`} selectedLeaf={selectedLeaf} initialValues={el} carousele={index} index={i} />)
            : <ParameterSingleTableBody selectedLeaf={selectedLeaf} initialValues={initialValues} carousele={index} />}
          {Array.isArray(initialValues) ? <ParameterCreateTableBody key={`${index}-${selectedLeaf.Name}`} selectedLeaf={selectedLeaf} carousele={index} /> : null}
        </CardContent>
        <CardSubmitPanel />
      </Card>
    </div>
  );
};

export default DashboardTreePanel;



