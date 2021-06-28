import React, { useContext, createContext, useReducer, useState } from "react";
import {
  LOGIN,
  LOGOUT,
  ADD_PET,
  REMOVE_PET,
  // ADOPTSUBMIT
} from "./actions";


//creating a context
const GlobalContext = createContext();
//get context provider
const { Provider } = GlobalContext;
const petContext = createContext();

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
        case ADD_PET: {
          const newPetId = state.pets[state.pets.length - 1].id + 1;
    
          const newPet = { ...action.payload, id: newPetId };
    
          return {
            ...state,
            pets: [...state.pets, newPet],
          };
        }
        case REMOVE_PET: {
          return {
            ...state,
            students: [...state.students].filter(
              (student) => student.id !== action.payload
            ),
          };
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

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: 'Steve',
      breed: 'Cat',
    },
    {
      id: 2,
      name: 'Jack',
      breed: 'Dog',
    },
  ]);

  // Function to add a pet
  const addPet = (pet) => {
    const id = pets.length + 1;

    // We use the spread operator to fill in the details from the pet object that was passed while adding the new `id`
    const newpet = { ...pet, id };

    // Update state with the pets array with the newpet
    setPets([...pets, newpet]);
  };

  // Function to remove a pet
  const removePet = (id) => {
    // Copy the content of the pets array into our new list with the spread operator, then filter out the pet that matches the `id` that was passed
    const newPetsList = [
      ...pets.filter((pet) => pet.id !== id),
    ];

    // Update state with the new list after the pet has been removed
    setPets(newPetsList);
  };

  // List of options for the pet major
  const breed = [
    'Dog',
    'Cat',
  ];

  // The value prop expects an initial state object
  return (
    <petContext.Provider
      value={{ pets, addPet, removePet, breed }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </petContext.Provider>
  );
};

//custom hook to share the context
export const useGlobalContext = () => useContext(GlobalContext)