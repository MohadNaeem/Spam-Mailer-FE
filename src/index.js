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
import UserReports from "./views/admin/default";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ReactNotification />
      <ThemeEditorProvider>
        <HashRouter basename="/">
          <Switch>
            {/* <Route path={`/auth`} component={AuthLayout} /> */}
            <Route path={`/`} component={UserReports} />
            {/* <Route path={`/rtl`} component={RtlLayout} /> */}
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
