import {
  extractErrorMessage400,
  extractErrorMessage500,
} from '../request';
import {
  exampleErrorAcceptParameter1,
  exampleErrorAcceptParameter2,
  exampleErrorHomeForm500,
} from '../../../../tests/responses';

const cannotSetWithYourself = 'Cannot Set Interlock With Yourself';
const duplicated = 'The following values is duplicated: [1]';
const sdfFileErorr =
  'Eplan Can Contain Only One Plc Symbols. Plese Repair Damaged symbols:2IA1PFK83PIN1,Output,BOOL,0,0,Standmenge';
describe('request', () => {
  it('accept parameter with youself', () => {
    const result = extractErrorMessage400(
      exampleErrorAcceptParameter1,
    );
    expect(result).toStrictEqual([cannotSetWithYourself]);
  });

  it('accept parameter with youself and values are duplicated', () => {
    const result = extractErrorMessage400(
      exampleErrorAcceptParameter2,
    );
    expect(result).toStrictEqual([duplicated, cannotSetWithYourself]);
  });

  it('accept home form, one field inside sdk file wrong', () => {
    const result = extractErrorMessage500(exampleErrorHomeForm500);
    expect(result).toStrictEqual(sdfFileErorr);
  });
});
