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

    case "DELETE_FIELD_ERROR": {
      const { id } = payload;
      return {
        ...state,
        ...{
          fieldsInError: {
            ...state?.fieldsInError,
            [id]: false
          }
        }
      };
    }

    case "GET_FIELD_ERROR": {
      const { id } = payload;
      return {
        ...state,
        ...{
          fieldsInError: {
            ...state?.fieldsInError,
            [id]: true
          }
        }
      };
    }

    default:
      throw new Error();
  }
};

export default newEmployeeReducer;
