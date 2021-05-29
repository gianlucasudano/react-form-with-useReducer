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
import Input from "./components/molecules/Input/Input";
// import isPropValid from "@emotion/is-prop-valid";
// import styled from "@emotion/styled";

const theme = createMuiTheme();

export default function App() {
  return (
    <NoSsr>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="sm">
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                Simple app template
              </Typography>
              <Typography variant="h5" component="h1" gutterBottom>
                React, emotion, material-ui, jest, props-type, string-template
              </Typography>

              <Input
                label="ciccio"
                itemId="prova"
                type="text"
                callback={(e) => console.log(e)}
              />
            </Box>
          </Container>
        </ThemeProvider>
      </MuiThemeProvider>
    </NoSsr>
  );
}
