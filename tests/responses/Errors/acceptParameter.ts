import { GenericErrorResponse } from 'types';

export const exampleErrorAcceptParameter1: GenericErrorResponse = {
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

export const exampleErrorAcceptParameter2 = {
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
