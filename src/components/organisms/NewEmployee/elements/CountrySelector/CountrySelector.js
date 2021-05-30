import React, { useMemo } from "react";
import Select from "../../../../molecules/Select/Select";
const CountrySelector = ({ itemId = "countrySelector", options, ...rest }) => {
  const countries = useMemo(
    () =>
      options.map((country) => {
        return {
          label: country.countryName,
          value: country.countryCode
        };
      }),
    [options]
  );
  return <Select itemId={itemId} options={countries} {...rest} />;
};

export default CountrySelector;
