import { dashboardReducer } from './../dashboardReducer';
import { appendNewAvaliableValues } from '../dashboardActions';
import { DashboardState } from '../dashboardContext';
import {
  homeFormSubmitWithIds,
  homeFormSubmitTreeForTests,
} from '../../../../../tests/responses';

describe('dashboardReducer', () => {
  it('appendNewAvaliableValues', () => {
    const initial: DashboardState = {
      tree: homeFormSubmitTreeForTests,
      newAvaliableValues: ['121050', '121060R01'],
      rows: homeFormSubmitWithIds,
      selectedLeaf: null,
    };
    const result = dashboardReducer(
      initial,
      appendNewAvaliableValues(
        ['121060', '123456', 'OMG_WTF'],
        '121060R01',
      ),
    );
    expect([...result.newAvaliableValues].sort()).toEqual(
      ['121060', '123456', 'OMG_WTF', '121050'].sort(),
    );
    expect([...result.newAvaliableValues].sort()).not.toEqual(
      ['121060R01'].sort(),
    );
  });
});
