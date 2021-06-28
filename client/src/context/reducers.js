// Import our actions. Actions are in all caps.
import {
    ADD_PET,
  } from './actions';
  
  // Reducer accepts state and an action, returns a new state
  export default function reducer(state, action) {
    switch (action.type) {
      case ADD_PET: {
        const newPetId = state.pets[state.pets.length - 1].id + 1;
  
        const newPet = { ...action.payload, id: newPetId };
  
        return {
          ...state,
          pets: [...state.pets, newPet],
        };
      }
      
      default:
        return state;
    }
  }
  