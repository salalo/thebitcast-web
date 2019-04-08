export const login = state => {
  state.isLogged = true;
};

export const authStatusUpdated = (state, isLogged) => {
  state.islogged = isLogged;
};

export const loginTry = state => {
  state.loginTries++;
};
