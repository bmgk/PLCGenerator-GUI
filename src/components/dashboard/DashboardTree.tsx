import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

import DashboardTreePanel from "./DashboardTreePanel";
import { setLeaf, useDashboardDispatch, useDashboardStore } from "./context";

import {
  HomeResponseTreeChildren,
  HomeFormTreeResponse,
} from "types";

const useStyles = makeStyles({
  treeRoot: { height: 110 },
  treeContainer: { height: "90vh", overflowY: "scroll", flex: 2 },
  container: { width: "100vw", margin: "0 auto", display: "flex" },
});

const createLeaf = (nodes: HomeResponseTreeChildren) => ({
  Parameters: nodes.Parameters,
  Name: nodes.Name,
});

const getIdTree = (
  nodes: HomeFormTreeResponse | HomeFormTreeResponse,
  ids: string[]
) => {
  ids.push(nodes.Name);
  Array.isArray(nodes.Children)
    ? nodes.Children.map((node: HomeResponseTreeChildren) =>
      getIdTree(node, ids)
    )
    : null;
  return ids;
};

export const DashboardTree: React.FC = () => {
  const { tree } = useDashboardStore();
  const dispatch = useDashboardDispatch();
  const classes = useStyles();
  const expanded = useMemo(() => getIdTree(tree, []), [tree]);

  const renderTreeRoot = (nodes: HomeFormTreeResponse) => {
    return (
      <TreeItem
        key={nodes.Name}
        nodeId={`${nodes.Name}`}
        label={nodes.Name}
        onClick={() => dispatch(setLeaf(null))}
        style={{ color: 'green' }}
      >
        {Array.isArray(nodes.Children)
          ? nodes.Children.map((node: HomeResponseTreeChildren) =>
            renderTree(node)
          )
          : null}
      </TreeItem>
    );
  };

  const renderTree = (nodes: HomeResponseTreeChildren) => {
    return (
      <TreeItem
        key={nodes.Name}
        nodeId={`${nodes.Name}`}
        label={nodes.Name}
        onClick={() => dispatch(setLeaf(createLeaf(JSON.parse(JSON.stringify(nodes)))))}
        style={{ color: nodes.Parameters.length === 0 ? 'green' : 'red' }}
      >
        {Array.isArray(nodes.Children)
          ? nodes.Children.map((node: HomeResponseTreeChildren) =>
            renderTree(node)
          )
          : null}
      </TreeItem>
    );
  };

  const treeMemo = useMemo(() => renderTreeRoot(tree), [tree]);

  return (
    <div className={classes.container}>
      <div className={classes.treeContainer}>
        <TreeView
          className={classes.treeRoot}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
        >
          {treeMemo}
        </TreeView>
      </div>
      <DashboardTreePanel />
    </div>
  );
};

export default DashboardTree;
