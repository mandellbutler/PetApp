import React, { useContext, createContext, useReducer } from "react";
import {
  LOGIN,
  LOGOUT
} from "./actions";


//creating a context
const GlobalContext = createContext();
//get context provider
const { Provider } = GlobalContext;

//creating a reducer
const reducer = (state, action) => {
  switch (action.type) {
    //add actions
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      }
    case LOGOUT:
      return {
        ...state,
        loggedIn: false
      }
    default:
      return state
  }
}
//creating a custom provider
export const GlobalProvider = (props) => {
  //setup state
  const [state, dispatch] = useReducer(reducer, {
    loggedIn: false
  })
  //pass the state to the context provider
  return <Provider value={[state, dispatch]} {...props} />
}



//custom hook to share the context
export const useGlobalContext = () => useContext(GlobalContext)