export const newEmployeeActionsActionTypes = {
  SELECT_COUNTRY: "SELECT_COUNTRY",
  SET_COUNTRY_FIELDS: "SET_COUNTRY_FIELDS",
  DELETE_FIELD_ERROR: "DELETE_FIELD_ERROR",
  GET_FIELD_ERROR: "GET_FIELD_ERROR"
};

export const setCountry = (payload) => ({
  type: newEmployeeActionsActionTypes.SELECT_COUNTRY,
  payload
});

export const setCountryFields = (payload) => ({
  type: newEmployeeActionsActionTypes.SET_COUNTRY_FIELDS,
  payload
});

export const deleteFieldError = (payload) => ({
  type: newEmployeeActionsActionTypes.DELETE_FIELD_ERROR,
  payload
});

export const getFieldError = (payload) => ({
  type: newEmployeeActionsActionTypes.GET_FIELD_ERROR,
  payload
});
