import React, { useCallback } from "react";
import CountrySelector from "./elements/CountrySelector/CountrySelector";
import Input from "../../molecules/Input/Input";
import {
  setCountry,
  setCountryFields
} from "../../../reducers/newEmployeeActions";

// we don't have API implemented and we need mocks data
import { formData } from "../../../data/mocks";

const NewEmployee = ({ countrySelectorProps, newEmployeeProps }) => {
  const {
    dispatch,
    label,
    itemId,
    options,
    selectedCountryId,
    ...rest
  } = countrySelectorProps;

  const { countryFields } = newEmployeeProps;

  const handleFilterChange = useCallback(
    (event) => {
      const { value } = event.target;
      if (!countryFields[value]) {
        // we want avoid to call API if country fields are already in the state
        dispatch(
          setCountryFields({
            [value]: formData[value],
            selectedCountryId: value
          })
        );
      }

      dispatch(
        setCountry({
          selectedCountryId: value
        })
      );
    },
    [countryFields, dispatch]
  );

  return (
    <form>
      <CountrySelector
        callback={handleFilterChange}
        label={label}
        itemId={itemId}
        options={options}
        {...rest}
      />
      {countryFields[selectedCountryId].map(
        ({ id, label, type, ...rest }, index) => (
          <Input
            label={label}
            itemId={id}
            key={id}
            type={type}
            callback={(e) => console.log(e)}
            {...rest}
          />
        )
      )}
    </form>
  );
};

export default NewEmployee;
