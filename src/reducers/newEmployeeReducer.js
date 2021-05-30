const newEmployeeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECT_COUNTRY": {
      console.log({ payload });
      console.log(state);
      return {
        ...state
        // fields: [payload]
      };
    }

    case "SET_COUNTRY_FIELDS": {
      console.log({ payload });
      console.log(state);
      return {
        ...state
        // fields: [payload]
      };
    }

    default:
      throw new Error();
  }
};

export default newEmployeeReducer;
