// import { useGlobalContext } from "../context/GlobalContext"
import { LOGIN } from "../context/actions"
import AdoptionPage from "../pages/AdoptionPage";
import Home from "../pages/HomePage";
import HumanProfile from "../pages/HumanProfile";
import PetProfile from "../pages/PetProfile";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Navbar from './NavBar';
import Signup from '../pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const UnauthenticatedApp = () => {
  // const [state, dispatch] = useGlobalContext();

  return (
    <>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/adoption-page' component={AdoptionPage} />
            {/* <Route exact path='/human-profile' component={HumanProfile} />
            <Route exact path='/pet-profile' component={PetProfile} /> */}
            <Route exact path='/search' component={Search} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </>
  )
}

export default UnauthenticatedApp;