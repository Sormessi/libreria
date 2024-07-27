import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BookDetails from './pages/BookDetails';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/books/:id" component={BookDetails} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
