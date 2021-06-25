import { useGlobalContext } from '../context/GlobalContext';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_HUMANS } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ name: '', email: '', password: '' });
  const [signup, { error, data }] = useMutation(ADD_HUMANS);
  const [state, dispatch] = useGlobalContext();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await signup({
      variables: {
        name: formState.name,
        email: formState.email,
        password: formState.password
      },
    });

    const token = mutationResponse.data.signup.token;
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
    <div>
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div >
          <label htmlFor="firstName">Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
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
          <button type="submit" onClick={() => dispatch({ type: ADD_HUMANS })}>Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;