import { dashboardTableTranslations } from './dashboardTable';
import { dashboardTree } from './dashboardTree';
import { dashboardNavigationTranslations } from './dashboardNavigation';
import { dashboardSelectTranslations } from './dashboardSelect';

export const dashboardTranslations = {
  ...dashboardTableTranslations,
  ...dashboardTree,
  ...dashboardNavigationTranslations,
  ...dashboardSelectTranslations,
};
