import {
  HomeResponseTreeChildren,
  HomeFormTreeResponse,
} from 'types';

export const createLeaf = (nodes: HomeResponseTreeChildren) => ({
  Parameters: nodes.Parameters,
  Name: nodes.Name,
});

export const getIdTree = (
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

const isAmber = ({ Parameters }: HomeResponseTreeChildren) => {
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

const isBlue = (
  node: HomeResponseTreeChildren,
  newAvaliableValues: string[],
) => {
  return newAvaliableValues.includes(node.Name);
};

export const pickStyles = (
  node: HomeResponseTreeChildren,
  newAvaliableValues: string[],
): {
  color: 'black' | '#ff9800' | '#43a047' | '#f50057' | '#2196f3';
} => {
  if (isBlue(node, newAvaliableValues)) return { color: '#2196f3' }; //blue
  if (isBlack(node)) return { color: 'black' };
  if (isAmber(node)) return { color: '#ff9800' }; //amber
  if (isGreen(node)) return { color: '#43a047' }; //primaryColor
  if (isPurple(node)) return { color: '#f50057' }; //secondaryColor
  return { color: 'black' };
};

export const isMatch = (
  node: HomeResponseTreeChildren,
  search: string,
) => {
  if (search === '') return false;
  return node.Name.toLowerCase().includes(search.toLowerCase());
};

export const findQuantity = (
  nodes: HomeFormTreeResponse,
  search: string,
) => {
  let matches: string[] = [nodes.Name];
  nodes.Children.map((node: HomeResponseTreeChildren) => {
    searchTreeQuantity(node, search, matches);
  });
  return matches;
};

const searchTreeQuantity = (
  nodes: HomeResponseTreeChildren,
  search: string,
  matches: string[],
) => {
  if (isMatch(nodes, search)) {
    matches.push(nodes.Name);
  }
  nodes.Children.map((node: HomeResponseTreeChildren) =>
    searchTreeQuantity(node, search, matches),
  );
};

export const findMatches = (
  nodes: HomeFormTreeResponse,
  search: string,
) => {
  let matches: string[] = [nodes.Name];
  nodes.Children.map((node: HomeResponseTreeChildren) =>
    searchTree(node, search, matches),
  );
  return matches;
};

const searchTree = (
  nodes: HomeResponseTreeChildren,
  search: string,
  matches: string[],
) => {
  if (checkSearch(nodes, search)) {
    matches.push(nodes.Name);
  }
  nodes.Children.map((node: HomeResponseTreeChildren) =>
    searchTree(node, search, matches),
  );
};

export const checkSearch = (
  node: HomeResponseTreeChildren,
  search: string,
): boolean => {
  if (isMatch(node, search)) {
    return true;
  }
  return node.Children.some((child) => checkSearch(child, search));
};

export const handleExpand = (matches: string[], id: string) => {
  if (matches.includes(id)) {
    return matches.filter((single) => single !== id);
  }
  return [...matches, id];
};
