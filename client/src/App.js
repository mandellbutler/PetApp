import AuthenticatedApp from './components/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp';
import { useGlobalContext } from "./context/GlobalContext"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { LOGIN, LOGOUT } from './context/actions'
import auth from './utils/auth'

import './App.css';
import React, { useEffect, useState } from "react";
// import ApolloClient from 'apollo-boost';

//construct main graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

//construct requesrt middleware that will attach the JWT to every request as an  'authorization
const authLink = setContext((_, { headers }) => {
  //get the authentication token from local storage (if it exists)
  const token = localStorage.getItem('id_token');
  //return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  //set up our client to execute the 'authLink' middleware prior to making the request to Graphql API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [state, dispatch] = useGlobalContext();

   useEffect(() => {
     persistLogin()
   }, [] )

   const persistLogin = () => {
    // check if your logged in
    if (auth.loggedIn()) {
      // get the token from local storage
      const token = auth.getToken();
      dispatch({
        type: LOGIN,
        payload: { token }
      })
    } else {
      dispatch({
        type: LOGOUT
      })
    }
  }
     

   
  return (

    <ApolloProvider client={client}>
      {state.token ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp />
      )}
    </ApolloProvider>
  );
}

export default App;
