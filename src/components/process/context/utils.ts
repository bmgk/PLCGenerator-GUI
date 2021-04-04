import { ProcessDefinictionStep } from 'types';

export const createEmptyStep = (): ProcessDefinictionStep => ({
  ShortcutName: '',
  Comment: '',
  Actions: [],
});
