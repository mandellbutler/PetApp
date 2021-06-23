import React, { useState } from 'react';
import AuthenticatedApp from './components/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp';
import { GlobalProvider } from "./context/GlobalContext"
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);

  const logout = () => setLoggedIn(false);

  return (
    <div className="">

    </div>
  );
}

export default App;
