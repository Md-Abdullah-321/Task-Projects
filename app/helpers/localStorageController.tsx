export const setState = (state: string, value: object[]) => {
  localStorage.setItem(state, JSON.stringify(value));
  return;
};

export const getState = (state: string) => {
  const storedValue = localStorage.getItem(state);
  if (storedValue) {
    return JSON.parse(storedValue);
  }
  return null;
};
