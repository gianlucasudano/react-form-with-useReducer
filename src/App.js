import React, { useReducer } from "react";
import NoSsr from "@material-ui/core/NoSsr";
import { ThemeProvider } from "@emotion/react";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { formData, mocksData } from "./data/mocks";
import newEmployeeReducer from "./reducers/newEmployeeReducer";
// import isPropValid from "@emotion/is-prop-valid";
// import styled from "@emotion/styled";
import NewEmployee from "./components/organisms/NewEmployee/NewEmployee";
const theme = createMuiTheme();

// could be an option from user setting
const initialCountry = "ES";

const NewEmployeeWrapper = () => {
  const [state, dispatch] = useReducer(newEmployeeReducer, {
    countryFields: {
      [initialCountry]: formData[initialCountry],
      selectedCountryCode: initialCountry
    }
  });

  const countrySelectorProps = {
    options: mocksData.countries,
    label: mocksData.terms.countriesSelectorLabel,
    selectedCountryCode: state?.countryFields?.selectedCountryCode,
    dispatch
  };

  return (
    <NewEmployee
      countrySelectorProps={countrySelectorProps}
      newEmployeeProps={state}
    />
  );
};

export default function App() {
  return (
    <NoSsr>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="sm">
            <Box my={4}>
              <Typography variant="h5" component="h1" gutterBottom>
                New Employee
              </Typography>

              <NewEmployeeWrapper />
            </Box>
          </Container>
        </ThemeProvider>
      </MuiThemeProvider>
    </NoSsr>
  );
}
