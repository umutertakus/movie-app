import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListMovie from "./components/ListMovie";

function App() {
  return (
    <div>
      <Header />
      <form>
        <input type="text" />
        <button>Search</button>
        <select>
          <option value="movie">Movie</option>
          <option value="series">TV Series</option>
        </select>
      </form>

      <ListMovie />
      <Footer />
      <Router>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
