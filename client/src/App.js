import AuthenticatedApp from './components/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp';
import { useGlobalContext } from "./context/GlobalContext"
import './App.css';
import React, { useState } from "react";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

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
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp />
      )}
    </ApolloProvider>
  );
}

export default App;
