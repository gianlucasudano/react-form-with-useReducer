const newEmployeeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECT_COUNTRY": {
      return {
        ...state,
        ...{
          countryFields: {
            ...state.countryFields,
            ...payload
          }
        }
      };
    }

    case "SET_COUNTRY_FIELDS": {
      const mergedCountryFields = {
        ...state.countryFields,
        ...payload
      };

      return {
        ...state,
        ...{ countryFields: mergedCountryFields }
      };
    }

    default:
      throw new Error();
  }
};

export default newEmployeeReducer;
