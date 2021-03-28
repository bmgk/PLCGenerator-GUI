import { ErrorBody500, GenericErrorResponse400 } from 'types';

export const exampleErrorAcceptParameter1: GenericErrorResponse400 = {
  Errors: [
    {
      FieldName: 'Robot',
      Rules: [
        {
          ErrorCode: 'Cannot Set Interlock With Yourself',
          Args: { PropertyName: 'Robot', PropertyValue: '116000R01' },
        },
      ],
    },
  ],
};

export const exampleErrorAcceptParameter2: GenericErrorResponse400 = {
  Errors: [
    {
      FieldName: 'Index',
      Rules: [
        {
          ErrorCode:
            'The following values is duplicated: {PropertyValues}',
          Args: {
            PropertyValues: '[1]',
            PropertyName: 'Index',
            PropertyValue:
              'Vass6Structure.ViewModels.Interlocks.InterlockViewModel[]',
          },
        },
      ],
    },
    {
      FieldName: 'Robot',
      Rules: [
        {
          ErrorCode: 'Cannot Set Interlock With Yourself',
          Args: { PropertyName: 'Robot', PropertyValue: '116000R01' },
        },
      ],
    },
  ],
};

export const exampleErrorHomeForm500: ErrorBody500 = {
  Args: ['2IA1PFK83PIN1,Output,BOOL,0,0,Standmenge'],
  ErrorCode:
    'Eplan Can Contain Only One Plc Symbols. Plese Repair Damaged symbols:{0}',
};
