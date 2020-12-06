import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { SelectedLeaf, useDashboardStore } from "./context";
const useStyles = makeStyles({
  panel: {
    display: "flex",
    flex: 3,
  },
  cardContainer: {
    minWidth: "100%",
    padding: "0 auto",
  },
  action: {
    flex: "0 0 auto",
    alignSelf: "flex-start",
    margin: 0,
  },
  root: {
    alignItems: "flex-start",
  },
  title: {
    textAlign: "center",
    fontSize: "3rem",
  },
});

const RootTreePanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.panel}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Typography>Pick item from tree</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const EmptyParametersPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.panel}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Typography>Parameters are empty</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const CardHeaderPanel: React.FC<{ selectedLeaf: SelectedLeaf }> = ({
  selectedLeaf,
}) => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const length = selectedLeaf.parameters.length;

  const handlePrev = () => {
    if (index === 0) {
      setIndex(length - 1);
    } else {
      const newIndex = index - 1;
      if (newIndex > length) setIndex(length - 1);
      setIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (index === length - 1) {
      setIndex(0);
    } else {
      const newIndex = index + 1;
      if (newIndex > length) setIndex(0);
      setIndex(newIndex);
    }
  };

  return (
    <CardHeader
      avatar={
        length > 1 ? (
          <IconButton aria-label="previous-parameter" onClick={handlePrev}>
            <ChevronLeftOutlinedIcon fontSize="large" />
          </IconButton>
        ) : null
      }
      action={
        length > 1 ? (
          <IconButton aria-label="next-parameter" onClick={handleNext}>
            <ChevronRightOutlinedIcon fontSize="large" />
          </IconButton>
        ) : null
      }
      title={selectedLeaf.parameters[index].name}
      classes={{
        root: classes.root,
        title: classes.title,
        action: classes.action,
      }}
    />
  );
};

export const DashboardTreePanel: React.FC = () => {
  const classes = useStyles();
  const { selectedLeaf } = useDashboardStore();

  if (selectedLeaf === null) return <RootTreePanel />;
  if (selectedLeaf.parameters.length === 0) return <EmptyParametersPanel />;

  return (
    <div className={classes.panel}>
      <Card className={classes.cardContainer}>
        <CardHeaderPanel selectedLeaf={selectedLeaf} />
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default DashboardTreePanel;
