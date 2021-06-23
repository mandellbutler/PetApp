import React from "react";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdoptionPage from "./pages/AdoptionPage";
import HomePage from "./pages/HomePage";
import HumanProfile from "./pages/HumanProfile";
import PetProfile from "./pages/PetProfile";
import Search from "./pages/Search";
import Navbar from './components/NavBar';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/adoption-page' component={AdoptionPage} />
              <Route exact path='/human-profile' component={HumanProfile} />
              <Route exact path='/pet-profile' component={PetProfile} />
              <Route exact path='/search' component={Search} />
              <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Switch>
          </>
        </Router>
    </ApolloProvider>
  );
}

export default App;
