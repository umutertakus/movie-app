import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListMovie from "./components/ListMovie";
import Search from "./components/Search";

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
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
