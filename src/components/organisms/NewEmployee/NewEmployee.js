import React from "react";
import CountrySelector from "./elements/CountrySelector/CountrySelector";
import Input from "../../molecules/Input/Input";
const NewEmployee = ({ countrySelectorProps, fieldsProps }) => {
  const { callback, label, itemId, options, ...rest } = countrySelectorProps;
  return (
    <form>
      <CountrySelector
        callback={callback}
        label={label}
        itemId={itemId}
        options={options}
        {...rest}
      />
      {fieldsProps.map(({ id, label, type, ...rest }, index) => (
        <Input
          label={label}
          itemId={id}
          key={id}
          type={type}
          callback={(e) => console.log(e)}
          {...rest}
        />
      ))}
    </form>
  );
};

export default NewEmployee;
