export type loginInfoType = {
    session:string,
    userFio:string,
    userLogin:string,
    userRoles: Array<string>,
    readAccess: Set<string>,
    writeAccess: Set<string|unknown>,
}

export type updateLoginInfoAction = {
    type: 'SET_LOGIN_INFO',
    payload: loginInfoType,
}

export const setLoginInfo = (obj:loginInfoType) : updateLoginInfoAction => {
  return {
    type: 'SET_LOGIN_INFO',
    payload: obj,
  };
};
