interface state {
    currCatalog : string,
  }
  
  enum actionTypes {
    SET_CATALOG = 'SET_CATALOG'
  }
  
  const initialState:state = {
    currCatalog: '/',
  };
  
  export const catalogReducer = (state:state = initialState, action:any) => {
    switch (action.type) {
      case (actionTypes.SET_CATALOG): {
        const { payload } = action;
        return { ...state, ...payload };
      }
      default: {
        return state;
      }
    }
  };
  