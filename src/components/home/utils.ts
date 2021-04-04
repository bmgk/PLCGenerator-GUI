import { isDeepEqual } from 'utils/objectUtils';
import { FileItem, HomeFormValues } from 'types';

export const initialValues: HomeFormValues = {
  projectName: '',
  eplanTags: [],
  spsMatrix: [],
};

export const isDisabled = (values: HomeFormValues) => {
  return values.eplanTags.length === 0 || values.projectName === '';
};

export const handleFileAppend = (
  push: (element: FileItem) => void,
  values: FileItem[],
) => (event: React.ChangeEvent<HTMLInputElement>) => {
  event.persist();
  const file = (event.target.files && event.target.files[0]) || null;

  if (file != null) {
    const element: FileItem = { name: file.name, path: file.path };
    if (!values.some((file) => isDeepEqual(file, element))) {
      push(element);
    }
  }
};

export const handleRemoveItem = (
  e: React.MouseEvent<HTMLInputElement, MouseEvent>,
) => {
  //@ts-ignore
  e.target.value = null;
};
