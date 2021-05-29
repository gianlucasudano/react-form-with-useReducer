import React from "react";
import Select from "../../../../molecules/Select/Select";
const CountrySelector = ({ itemId = "countrySelector", options, ...rest }) => {
  const countries = options.map((country) => {
    return {
      label: country.countryName,
      value: country.countryCode
    };
  });
  return <Select itemId={itemId} options={countries} {...rest} />;
};

export default CountrySelector;
