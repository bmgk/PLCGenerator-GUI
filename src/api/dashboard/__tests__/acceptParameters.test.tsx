import axios from 'axios';
import {
  acceptManyParameters,
  acceptSingleParameter,
} from '../acceptParameter';

const selectedLeafValueArray = {
  Parameters: [
    {
      AvailableValues: [
        {
          Name: 'Name2',
          Type: 'String',
          MultiSelect: true,
          Value: ['test1', 'test2'],
        },
        {
          Name: 'Index',
          Type: 'UInt16',
          MultiSelect: false,
          Value: [
            999,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
          ],
        },
        {
          Name: 'Index2',
          Type: 'UInt16',
          MultiSelect: true,
          Value: [
            999,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
          ],
        },
      ],
      Name: 'Parts',
      Value: [
        {
          Name: 'TEST',
          Name1: ['test1', 'test2'],
          Index: '1',
          Index2: ['1', '2', '3'],
        },
      ],
    },
  ],
  Name: '126020V01BGT11',
};

const selectedLeafValueObject = {
  Parameters: [
    {
      AvailableValues: [
        {
          Name: 'Name2',
          Type: 'String',
          MultiSelect: true,
          Value: ['test1', 'test2'],
        },
        {
          Name: 'Index',
          Type: 'UInt16',
          MultiSelect: false,
          Value: [
            999,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
          ],
        },
        {
          Name: 'Index2',
          Type: 'UInt16',
          MultiSelect: true,
          Value: [
            999,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
          ],
        },
      ],
      Name: 'Parts',
      Value: {
        Name: 'TEST',
        Name1: ['test1', 'test2'],
        Index: '1',
        Index2: ['1', '2', '3'],
      },
    },
  ],
  Name: '126020V01BGT11',
};

const selectedLeafValueObjectEmptyString = {
  Parameters: [
    {
      AvailableValues: [
        {
          Name: 'Name2',
          Type: 'String',
          MultiSelect: true,
          Value: ['test1', 'test2'],
        },
        {
          Name: 'Index',
          Type: 'UInt16',
          MultiSelect: false,
          Value: [
            999,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
          ],
        },
        {
          Name: 'Index2',
          Type: 'UInt16',
          MultiSelect: true,
          Value: [
            999,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
          ],
        },
      ],
      Name: 'Parts',
      Value: {
        Name: '',
        Name1: ['test1', 'test2'],
        Index: '',
        Index2: ['1', '2', '3'],
      },
    },
  ],
  Name: '126020V01BGT11',
};
describe('acceptParameters', () => {
  it('check body request, acceptMany value array', () => {
    const axiosSpy = jest.spyOn(axios, 'post');
    acceptManyParameters(selectedLeafValueArray);
    expect(axiosSpy).toHaveBeenCalled();
    expect(axiosSpy).toHaveBeenCalledWith(
      expect.any(String),
      [
        {
          ElementName: '126020V01BGT11',
          Name: 'Parts',
          Value: [
            {
              Name: 'TEST',
              Name1: ['test1', 'test2'],
              Index: 1,
              Index2: [1, 2, 3],
            },
          ],
        },
      ],
      { headers: { 'Content-type': 'application/json' } },
    );
  });

  it('check body request, acceptMany value object', () => {
    const axiosSpy = jest.spyOn(axios, 'post');
    acceptManyParameters(selectedLeafValueObject);
    expect(axiosSpy).toHaveBeenCalled();
    expect(axiosSpy).toHaveBeenCalledWith(
      expect.any(String),
      [
        {
          ElementName: '126020V01BGT11',
          Name: 'Parts',
          Value: {
            Name: 'TEST',
            Name1: ['test1', 'test2'],
            Index: 1,
            Index2: [1, 2, 3],
          },
        },
      ],
      { headers: { 'Content-type': 'application/json' } },
    );
  });

  it('check body request, accepSingle value array', () => {
    const axiosSpy = jest.spyOn(axios, 'post');
    acceptSingleParameter(selectedLeafValueArray, 0);
    expect(axiosSpy).toHaveBeenCalled();
    expect(axiosSpy).toHaveBeenCalledWith(
      expect.any(String),
      {
        ElementName: '126020V01BGT11',
        Name: 'Parts',
        Value: [
          {
            Name: 'TEST',
            Name1: ['test1', 'test2'],
            Index: 1,
            Index2: [1, 2, 3],
          },
        ],
      },
      { headers: { 'Content-type': 'application/json' } },
    );
  });

  it('check body request, accepSingle value object empty string values', () => {
    const axiosSpy = jest.spyOn(axios, 'post');
    acceptSingleParameter(selectedLeafValueObjectEmptyString, 0);
    expect(axiosSpy).toHaveBeenCalled();
    expect(axiosSpy).toHaveBeenCalledWith(
      expect.any(String),
      {
        ElementName: '126020V01BGT11',
        Name: 'Parts',
        Value: {
          Name: null,
          Name1: ['test1', 'test2'],
          Index: null,
          Index2: [1, 2, 3],
        },
      },
      { headers: { 'Content-type': 'application/json' } },
    );
  });

  it('check body request, accepSingle value object', () => {
    const axiosSpy = jest.spyOn(axios, 'post');
    acceptSingleParameter(selectedLeafValueObject, 0);
    expect(axiosSpy).toHaveBeenCalled();
    expect(axiosSpy).toHaveBeenCalledWith(
      expect.any(String),
      {
        ElementName: '126020V01BGT11',
        Name: 'Parts',
        Value: {
          Name: 'TEST',
          Name1: ['test1', 'test2'],
          Index: 1,
          Index2: [1, 2, 3],
        },
      },
      { headers: { 'Content-type': 'application/json' } },
    );
  });
});
