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
  // state.countryFields.selectedCountryId

  const { countryFields } = newEmployeeProps;

  const handleFilterChange = useCallback(
    (event) => {
      console.log(event);
      const { value } = event.target;
      console.log("countryFields", countryFields[value]);
      if (!countryFields[value]) {
        console.log("dentro if", countryFields[value]);
        // we want avoid to call API if country fields are alreay in the state
        dispatch(
          setCountry({
            countryFields: { [value]: formData[value] }
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
        // selectedCountryId={selectedCountryId}
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
