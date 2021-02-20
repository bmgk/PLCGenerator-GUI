import {
  GenericErrorResponse400,
  ErrorRule400,
  ErrorBody500,
} from 'types';

export const extractErrorRequest400 = (error: any) => {
  return extractErrorMessage400(error.response.data).join('\n');
};

export const extractErrorMessage400 = ({
  Errors,
}: GenericErrorResponse400) => {
  return Errors.reduce((acc: string[], el) => {
    const errorMessages = el.Rules.map((el) =>
      injectVariables400(el),
    );
    return acc.concat(errorMessages);
  }, []);
};

const injectVariables400 = (rule: ErrorRule400) => {
  const args = Object.keys(rule.Args);
  return args.reduce((acc, el) => {
    return acc.replace(`{${el}}`, rule.Args[el]);
  }, rule.ErrorCode);
};

export const extractErrorRequest500 = (error: any) => {
  return extractErrorMessage500(error.response.data);
};

export const extractErrorMessage500 = (body: ErrorBody500) => {
  const args = body.Args;
  return args.reduce((acc, el, index) => {
    return acc.replace(`{${index}}`, body.Args[index]);
  }, body.ErrorCode);
};
