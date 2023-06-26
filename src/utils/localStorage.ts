export type LocalStorageName = "USER" | "LANG";

export const setLocalStorage = <T = any>(name: LocalStorageName, value: T) => {
  window.localStorage.setItem(name, JSON.stringify(value));
  window.dispatchEvent(new Event("storage"));
};

export const getLocalStorage = <T = any>(
  name: LocalStorageName,
  defaultValue: T
): T => {
  const rs = window.localStorage.getItem(name);
  if (rs === null || rs === undefined) {
    return defaultValue;
  }
  return JSON.parse(rs);
};

export const removeLocalStorage = (name: LocalStorageName) => {
  window.localStorage.removeItem(name);
  window.dispatchEvent(new Event("storage"));
};
