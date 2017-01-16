export const LOGIN = 'LOGIN';

export const login = (isAuthenticated, user) => {
  return {
    type: LOGIN,
    isAuthenticated,
    user
  };
};
