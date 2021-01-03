import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import DashboardTreePanel from './DashboardTreePanel';
import {
  setLeaf,
  useDashboardDispatch,
  useDashboardStore,
} from './context';

import {
  HomeResponseTreeChildren,
  HomeFormTreeResponse,
} from 'types';

const useStyles = makeStyles({
  treeRoot: { height: 110 },
  treeContainer: { height: '90vh', overflowY: 'scroll', flex: 2 },
  container: { width: '100vw', margin: '0 auto', display: 'flex' },
  label: {},
  labelBold: { fontWeight: 800 },
});

const createLeaf = (nodes: HomeResponseTreeChildren) => ({
  Parameters: nodes.Parameters,
  Name: nodes.Name,
});

const getIdTree = (
  nodes: HomeFormTreeResponse | HomeFormTreeResponse,
  ids: string[],
) => {
  ids.push(nodes.Name);
  Array.isArray(nodes.Children)
    ? nodes.Children.map((node: HomeResponseTreeChildren) =>
        getIdTree(node, ids),
      )
    : null;
  return ids;
};

const isYellow = ({ Parameters }: HomeResponseTreeChildren) => {
  return (
    Parameters.some((el) => {
      if (Array.isArray(el.Value)) {
        return el.Value.length === 0;
      } else {
        return Object.keys(el.Value).length === 0;
      }
    }) &&
    Parameters.some((el) => {
      if (Array.isArray(el.Value)) {
        return el.Value.length >= 1;
      } else {
        return Object.keys(el.Value).length !== 0;
      }
    })
  );
};

const isGreen = ({ Parameters }: HomeResponseTreeChildren) => {
  return Parameters.every((el) => {
    if (Array.isArray(el.Value)) {
      return el.Value.length >= 1;
    } else {
      return Object.keys(el.Value).length !== 0;
    }
  });
};

const isPurple = ({ Parameters }: HomeResponseTreeChildren) => {
  return Parameters.some((el) => {
    if (Array.isArray(el.Value)) {
      return el.Value.length === 0 && el.AvailableValues.length !== 0;
    } else {
      return (
        Object.keys(el.Value).length === 0 &&
        el.AvailableValues.length !== 0
      );
    }
  });
};

const isBlack = ({ Parameters }: HomeResponseTreeChildren) => {
  return Parameters.length === 0;
};

const pickStyles = (
  node: HomeResponseTreeChildren,
): {
  color: 'black' | 'green' | 'yellow' | 'purple';
} => {
  if (isBlack(node)) return { color: 'black' };
  if (isYellow(node)) return { color: 'yellow' };
  if (isGreen(node)) return { color: 'green' };
  if (isPurple(node)) return { color: 'purple' };
  return { color: 'black' };
};

export const DashboardTree: React.FC = () => {
  const { tree, selectedLeaf } = useDashboardStore();
  const dispatch = useDashboardDispatch();
  const classes = useStyles();
  const expanded = useMemo(() => getIdTree(tree, []), [tree]);

  const renderTreeRoot = (nodes: HomeFormTreeResponse) => {
    return (
      <TreeItem
        data-testid={nodes.Name}
        key={nodes.Name}
        nodeId={`${nodes.Name}`}
        label={nodes.Name}
        onClick={() => dispatch(setLeaf(null))}
        style={{ color: 'black' }}
      >
        {Array.isArray(nodes.Children)
          ? nodes.Children.map((node: HomeResponseTreeChildren) =>
              renderTree(node),
            )
          : null}
      </TreeItem>
    );
  };

  const renderTree = (nodes: HomeResponseTreeChildren) => {
    const styles = pickStyles(nodes);

    return (
      <TreeItem
        data-testid={nodes.Name}
        key={nodes.Name}
        nodeId={`${nodes.Name}`}
        label={nodes.Name}
        onClick={() =>
          dispatch(
            setLeaf(createLeaf(JSON.parse(JSON.stringify(nodes)))),
          )
        }
        style={styles}
        classes={{
          label:
            styles.color !== 'black'
              ? classes.labelBold
              : classes.label,
        }}
      >
        {Array.isArray(nodes.Children)
          ? nodes.Children.map((node: HomeResponseTreeChildren) =>
              renderTree(node),
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
      <DashboardTreePanel
        key={selectedLeaf?.Name || 'Root'}
        selectedLeaf={selectedLeaf}
      />
    </div>
  );
};

export default DashboardTree;
