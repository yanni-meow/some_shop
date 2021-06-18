import moment from 'moment';
import 'moment/locale/ru';

interface state {
  startDate : string,
  endDate : string,
  reportType : string,
}

enum actionTypes {
  SET_REPORTS_CONFIG = 'SET_REPORTS_CONFIG'
}

const dateFormat = 'DD.MM.YYYY HH:mm';

const initialState : state = {
  startDate: (moment().startOf('month')).format(dateFormat),
  endDate: (moment().endOf('day')).format(dateFormat),
  reportType: 'generalReport',
};

export const reportsReducer = (state : state = initialState, action : any) => {
  switch (action.type) {
    case (actionTypes.SET_REPORTS_CONFIG): {
      const { payload } = action;
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
