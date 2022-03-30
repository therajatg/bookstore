function authReducer(authState, authAction) {
  switch (authAction.type) {
    case "FIRST_NAME":
      return {
        ...authState,
        user: { ...authState.user, firstName: authAction.authPayload },
      };
    case "LAST_NAME":
      return {
        ...authState,
        user: { ...authState.user, lastName: authAction.authPayload },
      };
    case "EMAIL":
      return {
        ...authState,
        user: { ...authState.user, email: authAction.authPayload },
      };
    case "PASSWORD":
      return {
        ...authState,
        user: { ...authState.user, password: authAction.authPayload },
      };
    case "CONFIRM_PASSWORD":
      return {
        ...authState,
        user: { ...authState.user, password: authAction.authPayload },
      };
    case "TOKEN":
      return { ...authState, token: authAction.authPayload };
    case "ERROR":
      return { ...authState, error: authAction.authPayload };
    default:
      return authState;
  }
}

export { authReducer };
