import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RegisterPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
