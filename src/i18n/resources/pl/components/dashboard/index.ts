import { dashboardNavigationTranslations } from './dashboardNavigation';
import { dashboardTableTranslations } from './dashboardTable';
import { dashboardTreeTranslations } from './dashboardTree';
import { dashboardSelectTranslations } from './dashboardSelect';

export const dashboardTranslations = {
  ...dashboardTableTranslations,
  ...dashboardTreeTranslations,
  ...dashboardNavigationTranslations,
  ...dashboardSelectTranslations,
};
