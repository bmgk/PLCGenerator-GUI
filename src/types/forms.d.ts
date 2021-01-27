export type FileItem = {
  name: string;
  path: string;
};

export type HomeFormValues = {
  projectName: string;
  eplanTags: FileItem[];
  spsMatrix: FileItem[];
};
