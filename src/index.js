import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import RtlLayout from "layouts/rtl";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ReactNotification />
      <ThemeEditorProvider>
        <HashRouter>
          <Switch>
            {/* <Route path={`/auth`} component={AuthLayout} /> */}
            <Route path={`/admin`} component={AdminLayout} />
            {/* <Route path={`/rtl`} component={RtlLayout} /> */}
            <Redirect from="/" to="/admin" />
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
