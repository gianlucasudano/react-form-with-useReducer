const checkForValidation = ({ validationRules, value }) => {
  switch (validationRules?.type) {
    case "MIN_MAX":
      if (!/^[0-9]+$/.test(value)) {
        return true;
      }
      const { max, min } = validationRules;
      const noLimitsRange = !max && !min;
      const overLimit = value > max;
      const underLimit = value < min;
      if (noLimitsRange) {
        return false;
      }
      return overLimit || underLimit ? true : false;

    default:
      break;
  }
};

export default checkForValidation;
