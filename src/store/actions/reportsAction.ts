export type reportsType = {
    startDate : string,
    endDate : string,
    reportType : string,
}

type updateReportsAction = {
    type: string,
    payload: reportsType,
}

export const getReportConfig = (reportConfig : reportsType) : updateReportsAction => {
  return {
    type: 'SET_REPORTS_CONFIG',
    payload: reportConfig,
  };
};
