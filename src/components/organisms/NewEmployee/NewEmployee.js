import React, { useCallback, useRef } from "react";
import CountrySelector from "./elements/CountrySelector/CountrySelector";
import Input from "../../molecules/Input/Input";
import {
  getFieldError,
  deleteFieldError,
  setCountry,
  setCountryFields
} from "../../../reducers/newEmployeeActions";

// we don't have API implemented and we need mocks data
import { formData } from "../../../data/mocks";

const NewEmployee = ({ countrySelectorProps, newEmployeeProps, children }) => {
  const {
    dispatch,
    label,
    itemId,
    options,
    selectedCountryCode,
    ...rest
  } = countrySelectorProps;

  const { countryFields, fieldsInError } = newEmployeeProps;
  const selectedCountryCodeRef = useRef();
  const handleFilterChange = useCallback(
    (event) => {
      const { value } = event.target;
      selectedCountryCodeRef.current = value;
      if (!countryFields[value]) {
        // we want avoid to call API if country fields are already in the state
        dispatch(
          setCountryFields({
            [value]: formData[value],
            selectedCountryCode: value
          })
        );
      }

      dispatch(
        setCountry({
          selectedCountryCode: value
        })
      );
    },
    [countryFields, dispatch]
  );

  const handleInputChange = useCallback(
    (event) => {
      const { id, value } = event.target;
      if (value.trim()) {
        dispatch(deleteFieldError({ id, value }));
      }
    },
    [dispatch]
  );

  const dispatchErrorCallback = ({ id, value }) => {
    return dispatch(getFieldError({ id, value }));
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(
      "JSON data: ",
      JSON.stringify(
        Array.from(e.target).reduce((acc, current) => {
          const { id, value } = current;
          if (id && id !== "submit") {
            acc[id] = value;
          }
          return acc;
        }, {}),
        null,
        2
      )
    );
    // TODO:
    // here we need to reset form
    // avoid multiple click on button
  }, []);

  const filteredFieldsInError = Object.keys(fieldsInError).reduce(
    (acc, current) => {
      if (fieldsInError[current] === true) {
        acc[current] = fieldsInError[current];
      }
      return acc;
    },
    {}
  );

  const isSubmitDisabled =
    Object.keys(filteredFieldsInError).length === 0 ? false : true;

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <CountrySelector
          callback={handleFilterChange}
          label={label}
          itemId={itemId}
          options={options}
          {...rest}
        />
        {countryFields[
          selectedCountryCodeRef?.current || selectedCountryCode
        ].map(({ id, label, type, ...rest }, index) => (
          <Input
            label={label}
            itemId={id}
            key={id}
            type={type}
            callback={handleInputChange}
            dispatchErrorCallback={dispatchErrorCallback}
            {...rest}
          />
        ))}
        <button id="submit" disabled={isSubmitDisabled} value="Submit">
          Submit
        </button>
      </form>
      {children}
    </>
  );
};

export default NewEmployee;
