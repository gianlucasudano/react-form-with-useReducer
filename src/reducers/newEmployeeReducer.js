const newEmployeeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECT_COUNTRY": {
      return {
        ...state,
        ...{
          newClient: {
            ...state?.newClient,
            countryCode: payload.selectedCountryCode
          }
        },
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

    case "SET_FIELDS_CHANGES": {
      const { id, value } = payload;
      return {
        ...state,
        ...{
          newClient: {
            ...state?.newClient,
            [id]: value
          }
        }
      };
    }

    default:
      throw new Error();
  }
};

export default newEmployeeReducer;
