const checkForValidation = ({ validationRules, value }) => {
  switch (validationRules?.type) {
    case "MIN_MAX":
      const trimmedValue = value.trim();
      if (!/^[0-9]+$/.test(trimmedValue)) {
        return true;
      }
      const { max, min } = validationRules;
      const noLimitsRange = !max && !min;
      const overLimit = trimmedValue > max;
      const underLimit = trimmedValue < min;
      if (noLimitsRange) {
        return false;
      }
      return overLimit || underLimit ? true : false;

    default:
      break;
  }
};

export default checkForValidation;
