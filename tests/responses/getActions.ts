export const getActionsResponse = {
  AvailableActions: {
    '126030V01': {
      KKP: {
        ToolNames: ['KKP11', 'KKP12'],
        AvailableActions: ['Open', 'Close'],
      },
    },
    '116000R01': {},
    '126010R01': {
      Gripper: {
        ToolNames: ['G'],
        AvailableActions: [
          'TakePart',
          'TakePartEnter',
          'TakePartExit',
          'PutPart',
          'PutPartEnter',
          'PutPartExit',
        ],
      },
      Gluer: { ToolNames: ['KL1'], AvailableActions: ['Glue'] },
    },
    '126010R02': {
      Gripper: {
        ToolNames: ['G'],
        AvailableActions: [
          'TakePart',
          'TakePartEnter',
          'TakePartExit',
          'PutPart',
          'PutPartEnter',
          'PutPartExit',
        ],
      },
      Gluer: { ToolNames: ['KL1'], AvailableActions: ['Glue'] },
    },
    '126020R01': {
      Welder: { ToolNames: ['SZ1'], AvailableActions: ['Weld'] },
      WelderBox: { ToolNames: ['SK1'], AvailableActions: [] },
    },
    '126020R02': {
      Welder: { ToolNames: ['SZ1'], AvailableActions: ['Weld'] },
      WelderBox: { ToolNames: ['SK1'], AvailableActions: [] },
    },
    '126030R01': {
      Gripper: {
        ToolNames: ['G'],
        AvailableActions: [
          'TakePart',
          'TakePartEnter',
          'TakePartExit',
          'PutPart',
          'PutPartEnter',
          'PutPartExit',
        ],
      },
    },
    '136040R01': {
      Gripper: {
        ToolNames: ['G'],
        AvailableActions: [
          'TakePart',
          'TakePartEnter',
          'TakePartExit',
          'PutPart',
          'PutPartEnter',
          'PutPartExit',
        ],
      },
      Welder: { ToolNames: ['SZ1'], AvailableActions: ['Weld'] },
      WelderBox: { ToolNames: ['SK1'], AvailableActions: [] },
    },
  },
};
