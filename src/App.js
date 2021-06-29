import "./App.css";
import ListOfGif from "./views/ListOfGif";
import ListOneGif from "./views/ListOneGIf";
import Home from "./views/Home";
import logo from "./serchgif.png";

import { Link, Route } from "wouter";

function App() {
  return (
    <section className="App">
      <header className="App-content">
        <Link to="/">
          <img alt="Logo" className="logo" src={logo} />
        </Link>
        <Route path="/gif/:keyword" component={ListOfGif} />
        <Route path="/" component={Home} />
        <Route path="/gif/details/:id" component={ListOneGif} />
      </header>
    </section>
  );
}

export default App;
