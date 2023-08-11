// create function to get information from local storage

/**
 *
 * @param key string
 * @returns any | null
 */
export const getLocalStorage = (key: string): any | null => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  }
  return null;
};
