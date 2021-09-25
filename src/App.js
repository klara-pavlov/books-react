import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Favorites from './components/Favorites'
import { BookProvider } from './contexts/BookContext'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <BookProvider>
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
