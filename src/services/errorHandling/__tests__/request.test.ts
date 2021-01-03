import { extractErrorMessage } from '../request';
import {
  exampleErrorAcceptParameter1,
  exampleErrorAcceptParameter2,
} from '../../../../tests/responses';

const cannotSetWithYourself = 'Cannot Set Interlock With Yourself';
const duplicated = 'The following values is duplicated: [1]';

describe('request', () => {
  it('accept parameter with youself', () => {
    const result = extractErrorMessage(exampleErrorAcceptParameter1);
    expect(result).toStrictEqual([cannotSetWithYourself]);
  });

  it('accept parameter with youself and values are duplicated', () => {
    const result = extractErrorMessage(exampleErrorAcceptParameter2);
    expect(result).toStrictEqual([duplicated, cannotSetWithYourself]);
  });
});
