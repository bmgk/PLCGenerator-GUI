import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
    root: {
        height: 110,
        flexGrow: 1,
        maxWidth: 400,
    },
});

export const DashboardTree: React.FC = ({ tree }) => {
    const classes = useStyles();

    const renderTree = (nodes: any) => {
        console.log(nodes)
        return (
            <TreeItem key={nodes.name} nodeId={nodes.name} label={nodes.name}>
                {Array.isArray(nodes.children) ? nodes.children.map((node: any) => renderTree(node)) : null}
            </TreeItem>
        );
    };

    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {renderTree(tree)}
        </TreeView>
    );
}

export default DashboardTree;