import { GenericErrorResponse, ErrorRule } from 'types';

export const extractErrorRequest = (error: any) => {
  return extractErrorMessage(error.response.data).join('\n');
};

export const extractErrorMessage = ({
  Errors,
}: GenericErrorResponse) => {
  return Errors.reduce((acc: string[], el) => {
    const errorMessages = el.Rules.map((el) => injectVariables(el));
    return acc.concat(errorMessages);
  }, []);
};

const injectVariables = (rule: ErrorRule) => {
  const args = Object.keys(rule.Args);
  return args.reduce((acc, el) => {
    return acc.replace(`{${el}}`, rule.Args[el]);
  }, rule.ErrorCode);
};
