export const buildQueryParams = (data?: Object) =>
  Object.entries(data || {})
    .map(item => `${item[0]}=${item[1]}`)
    .join('&');
