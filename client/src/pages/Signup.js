import { useGlobalContext } from '../context/GlobalContext';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_HUMANS } from '../utils/mutations';
import { TextInput, Button } from 'react-materialize';
import 'materialize-css';
import { MdPets } from "react-icons/md";



function Signup(props) {
  const [formState, setFormState] = useState({ name: '', email: '', password: '' });
  const [signup, { error, data }] = useMutation(ADD_HUMANS);
  const [state, dispatch] = useGlobalContext();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("FormState: ", formState)
    const mutationResponse = await signup({
      variables: {
        name: formState.name,
        email: formState.email,
        password: formState.password
      },
    });
    console.log("Mut Resp: ", mutationResponse)
    const token = mutationResponse.data.addHuman.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div class="container" id="signupForm">
      <section>
        <div class="formHeader">
          <h2>Signup</h2>
          <MdPets size={80} />
        </div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <TextInput
              placeholder="Name"
              name="name"
              type="firstName"
              id="firstName TextInput-4"
              onChange={handleChange}
            />
          </div>
          <div >
            <label htmlFor="email">Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div >
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div>
            <Button type="submit" className="deep-orange accent-2 valign-center" onClick={() => dispatch({ type: ADD_HUMANS })}>Signup</Button>
          </div>
        </form>
        <div>
          <p>Already a member? <a href="/login">Login</a></p>
        </div>
      </section>
    </div>
  );
}

export default Signup;