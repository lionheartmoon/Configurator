export const getErrorByPath = (errors: any, path: string) =>
  path.split(".").reduce((obj, key) => {
    if (!obj) return undefined;
    if (key.match(/^\d+$/)) {
      return obj[Number(key)];
    }
    return obj[key];
  }, errors);
