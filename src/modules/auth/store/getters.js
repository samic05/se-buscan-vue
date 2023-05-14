export const userName = (state) => {
  return state.user?.displayName;
};
export const isLogged = (state) => {
  return state.user !== null;
};
export const getUserId = (state) => {
  return state.user.uid;
};
