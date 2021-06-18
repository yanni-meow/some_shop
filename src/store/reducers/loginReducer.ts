interface state {
  session : string,
  userFio : string,
  userLogin : string,
  userRoles : Array<string>,
  readAccess : Set<string|unknown> | null,
  writeAccess: Set<string|unknown> | null,
}

enum actionTypes {
  SET_LOGIN_INFO = 'SET_LOGIN_INFO'
}

const initialState:state = {
  session: '',
  userFio: '',
  userLogin: '',
  userRoles: [],
  readAccess: new Set(['/axiostest/']),
  writeAccess: null,
};

export const loginReducer = (state:state = initialState, action:any) => {
  switch (action.type) {
    case (actionTypes.SET_LOGIN_INFO): {
      const { payload } = action;
      return { ...state, ...payload };
    }
    default: {
      return state;
    }
  }
};
