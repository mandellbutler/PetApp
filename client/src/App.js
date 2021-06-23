// import AuthenticatedApp from './components/AuthenticatedApp';
// import UnauthenticatedApp from './components/UnauthenticatedApp';
import { useGlobalContext } from "./context/GlobalContext"
import './App.css';
import React, { useState } from "react";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdoptionPage from "./pages/AdoptionPage";
import Home from "./pages/HomePage";
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
  const [state, dispatch] = useGlobalContext();


  return (

    <ApolloProvider client={client}>
      {state.token ? (
        <Router>

          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/adoption-page' component={AdoptionPage} />
            <Route exact path='/human-profile' component={HumanProfile} />
            <Route exact path='/pet-profile' component={PetProfile} />
            <Route exact path='/search' component={Search} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>

        </Router>
      ) : (
        UnauthenticatedApp
      )}
    </ApolloProvider>
  );
}

export default App;
