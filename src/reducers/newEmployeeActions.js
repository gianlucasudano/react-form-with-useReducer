export const newEmployeeActionsActionTypes = {
  SELECT_COUNTRY: "SELECT_COUNTRY",
  SET_COUNTRY_FIELDS: "SET_COUNTRY_FIELDS"
};

export const setCountry = (payload) => ({
  type: newEmployeeActionsActionTypes.SELECT_COUNTRY,
  payload
});

export const setCountryFields = (payload) => ({
  type: newEmployeeActionsActionTypes.SET_COUNTRY_FIELDS,
  payload
});
