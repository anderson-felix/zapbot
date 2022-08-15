type FuncType = (value: string, withCode?: boolean) => string;

const BRAZIL_CODE = '55';

export const formatPhoneNumber: FuncType = (value, withCode) => {
  const code = value.slice(0, 2);
  const isBrazilCode = code === BRAZIL_CODE;
  const ddd = isBrazilCode ? ` (${value.slice(2, 4)}) ` : '';

  const displayCode = withCode || !isBrazilCode ? `+${code}` : '';
  const restNumber = isBrazilCode
    ? `${value.slice(4, 9)}-${value.slice(9)}`
    : value.slice(2);

  return `${displayCode}${ddd}${restNumber}`;
};
