/* eslint-disable no-console */

import { AxiosError } from 'axios';

const logUnknownErrorFormat = (context: string, error: unknown) => {
  console.error(`${context.toLocaleLowerCase()}: ${error}`);
};

const logAxiosError = (context: string, error: AxiosError) => {
  console.error(
    `${context.toLocaleUpperCase()}: ${(error.response?.data as any).message}`,
  );
};

const logUnexpectedError = (context: string, error: Error) => {
  console.error(`${context.toLocaleUpperCase()}: ${error.message}`);
};

export const logError = (context: string, error: any): void => {
  if (typeof error !== 'object') logUnknownErrorFormat(context, error);
  else if ((error as any).response) logAxiosError(context, error as AxiosError);
  else logUnexpectedError(context, error);
};
