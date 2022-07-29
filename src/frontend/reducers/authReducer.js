function authReducer(state, action) {
  switch (action.type) {
    case "TOKEN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export { authReducer };
