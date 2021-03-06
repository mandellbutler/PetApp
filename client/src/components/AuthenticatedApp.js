import { useGlobalContext } from "../context/GlobalContext"
import { LOGOUT } from "../context/actions"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdoptionPage from "../pages/AdoptionPage";
import Home from "../pages/HomePage";
import HumanProfile from "../pages/HumanProfile";
import PetProfile from "../pages/PetProfile";
import Search from "../pages/Search";
import Navbar from './NavBar';

const AuthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();

  return (
    <>
      <Router>

        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/adoption-page' component={AdoptionPage} />
          <Route exact path='/human-profile' component={HumanProfile} />
          <Route exact path='/pet-profile' component={PetProfile} />
          <Route exact path='/search' component={Search} />
          <Route render={() => <h1 className='display-2'>Welcome To Our Site!!</h1>} />
        </Switch>

      </Router>
    </>
  )
}

export default AuthenticatedApp;