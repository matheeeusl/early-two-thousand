// save info on local storage

/**
 *
 * @param key string
 * @param data any
 */
export const saveLocalStorage = (key: string, data: any): void => {
  const stringData = JSON.stringify(data);
  localStorage.setItem(key, stringData);
};
