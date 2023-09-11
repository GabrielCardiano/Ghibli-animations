import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

function App() {

  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/favorites" component={ Favorites } />
    </Switch>
  );
}

export default App
