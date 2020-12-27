import fs from 'fs';
import * as elektronDashboard from './../dashboard';
import { homeFormSubmitTreeForTests } from '../../../../tests/responses';

describe('dashboard-electron', () => {
  it('saveDraft', () => {
    jest
      .spyOn(elektronDashboard, 'pickFolder')
      .mockImplementation(() => Promise.resolve('c:\\data'));

    jest.spyOn(fs, 'writeFileSync').mockImplementationOnce(() => {});

    const result = elektronDashboard.saveDraft(
      homeFormSubmitTreeForTests,
    );
    expect(result).resolves.toMatch(/PLCGENERATOR/i);
  });
});
