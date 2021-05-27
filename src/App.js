import Menu from "./Menu";
import Marco from "./Marco";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

// Pages
import Home from "./Home";
import PageDos from "./PageDos";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/PageDos" component={PageDos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
