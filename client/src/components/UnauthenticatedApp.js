import { useGlobalContext } from "../context/GlobalContext"
import { LOGIN } from "../context/actions"

const UnauthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();

  return (
    <>
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
    </>
  )
}

export default UnauthenticatedApp();