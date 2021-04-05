import { processDetailsTranslations } from './processDetails';
import { processDeleteTialogTranslations } from './processDeleteDialog';
import { processActionFormTranslations } from './processActionForm';
import { processDefinitionTranslations } from './processDefinition';

export const processTranslations = {
  ...processDetailsTranslations,
  ...processDeleteTialogTranslations,
  ...processActionFormTranslations,
  ...processDefinitionTranslations,
};
