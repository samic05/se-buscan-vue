export const setUser = (state, user) => {
  console.log(user);
  state.user = user;
  localStorage.clear();
  localStorage.setItem("accessToken", user.stsTokenManager.accessToken);
  localStorage.setItem("refreshToken", user.stsTokenManager.refreshToken);
  localStorage.setItem("displayName", user.displayName);
  localStorage.setItem("email", user.email);
};
