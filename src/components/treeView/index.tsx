import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { Checkbox } from '@mui/material';

interface RenderTree {
  id: string;
  name: string;
  children?: readonly RenderTree[];
}

const data: RenderTree = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1'
    },
    {
      id: '2',
      name: 'Child - 2'
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4'
        }
      ]
    }
  ]
};

export const RichObjectTreeView = () => {
  const renderTree = (nodes: RenderTree) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label="rich object"
      //   defaultCollapseIcon={
      //     <Checkbox
      //       checked={true}
      //       indeterminate={true}
      //       // onChange={handleChange1}
      //     />
      //   }
      //   defaultExpanded={['root']}
      //   defaultExpandIcon={
      //     <Checkbox
      //       checked={true}
      //       indeterminate={true}
      //       // onChange={handleChange1}
      //     />
      //   }
      defaultExpanded={['1']}
      defaultCollapseIcon={
        <Checkbox
          checked={true}
          indeterminate={false}
          // onChange={handleChange1}
        />
      }
      defaultExpandIcon={
        <Checkbox
          checked={true}
          indeterminate={true}
          // onChange={handleChange1}
        />
      }
      defaultEndIcon={
        <Checkbox
          checked={false}
          indeterminate={false}
          // onChange={handleChange1}
        />
      }
      //   sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {renderTree(data)}
    </TreeView>
  );
};
