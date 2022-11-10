import { Button, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import theme from "./mui/theme";
import SalesHistory from "./views/SalesHistory";

function App(data) {
  useEffect(() => {
    window.ZOHO.CRM.API.getRecord({
      Entity: "Contacts",
      RecordID: data.EntityId,
    })
      .then(function (resp) {
        console.log(resp.data[0].Last_Name);
      })
      .catch((err) => console.error("err", err));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <SalesHistory />
          </Route>
          <Route path="/test">
            <Link to="/">
              <Button color="primary" variant="contained">
                Back
              </Button>
            </Link>
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
