export const newEmployeeActionsActionTypes = {
  SELECT_COUNTRY: "SELECT_COUNTRY",
  SET_COUNTRY_FIELDS: "SET_COUNTRY_FIELDS",
  SET_FIELDS_CHANGES: "SET_FIELDS_CHANGES"
};

export const setCountry = (payload) => ({
  type: newEmployeeActionsActionTypes.SELECT_COUNTRY,
  payload
});

export const setCountryFields = (payload) => ({
  type: newEmployeeActionsActionTypes.SET_COUNTRY_FIELDS,
  payload
});

export const setFieldsChanges = (payload) => ({
  type: newEmployeeActionsActionTypes.SET_FIELDS_CHANGES,
  payload
});
