export const STORAGE_KEY = "userId";

export const getUserId = () => {
  const userId = sessionStorage.getItem(STORAGE_KEY);
  if (!userId) return null;
  return JSON.parse(userId);
};

export const setUserId = (userId: number) => {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(userId));
};

export const deleteUserId = () => {
  sessionStorage.removeItem(STORAGE_KEY);
};
