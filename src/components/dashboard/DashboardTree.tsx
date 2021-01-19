import React, { useState, useMemo, useRef } from 'react';
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

import { SearchTree } from './tree';
import {
  getIdTree,
  pickStyles,
  checkSearch,
  createLeaf,
  searchQuantityResults,
} from './utils';

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
  searchContent: { background: '#3D9970' },
});

export const DashboardTree: React.FC = () => {
  const {
    tree,
    selectedLeaf,
    newAvaliableValues,
  } = useDashboardStore();
  const [search, setSearch] = useState('');
  const dispatch = useDashboardDispatch();
  const classes = useStyles();
  const expanded = useMemo(() => getIdTree(tree, []), [tree]);
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSearch(event.target.value);
  };

  const renderTreeRoot = (
    nodes: HomeFormTreeResponse,
    search: string,
  ) => {
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
              renderTree(node, search),
            )
          : null}
      </TreeItem>
    );
  };

  const renderTree = (
    nodes: HomeResponseTreeChildren,
    search: string,
  ) => {
    const styles = pickStyles(nodes, newAvaliableValues);
    const isMatch = checkSearch(nodes, search);

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
          content: isMatch ? classes.searchContent : '',
        }}
      >
        {Array.isArray(nodes.Children)
          ? nodes.Children.map((node: HomeResponseTreeChildren) =>
              renderTree(node, search),
            )
          : null}
      </TreeItem>
    );
  };

  const quantity = useMemo(
    () => searchQuantityResults(tree, search),
    [tree, search],
  );

  const treeItems = useMemo(() => renderTreeRoot(tree, search), [
    tree,
    search,
  ]);

  return (
    <div className={classes.container}>
      <div className={classes.treeContainer}>
        <SearchTree onChange={handleChange} quantity={quantity} />
        <TreeView
          className={classes.treeRoot}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
        >
          {treeItems}
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
