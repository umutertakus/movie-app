import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/movie/:imdbID" component={Detail}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
