import React, { useState } from "react";
import { useGlobalContext } from '../context/GlobalContext';
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from '../utils/auth';
import { TextInput, Button } from "react-materialize";
// import { update } from "../../../server/models/Dog";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);
  const [state, dispatch] = useGlobalContext();

  //update the state based on the user input
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('FormState: ', formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      console.log("Data: ", data)
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    //clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (

    <div>
      <section>
        <form onSubmit={handleFormSubmit}>
          <h2>Login</h2>
          <div>
            <input
              className="form-input"
              placeholder="email@email.com"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="form-input"
              placeholder="*******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button type="submit" className="deep-orange accent-2 valign-center" onClick={() => dispatch({ type: LOGIN })}>Login</Button>
          </div>
        </form>
        <div>
          <p>Not a Member Yet? <a href="/signup">Sign Up</a></p>
        </div>
      </section>
    </div>

  )
};


// function Login() {
//   const [state, dispatch] = useGlobalContext();
//   return (
//     <div>
//       <section>
//         <form >
//           <h2>Sign Up</h2>
//           <div>
//             <label>Name:</label>
//             <input></input>
//           </div>
//           <div>
//             <label>Email:</label>
//             <input></input>
//           </div>
//           <div>
//             <label>Password:</label>
//             <input type="password"></input>
//           </div>
//           <div>
//             <button onClick={() => dispatch({ type: LOGIN })}>Submit</button>
//           </div>
//         </form>
//       </section>
//       <section>
//         <form>
//           <h2>Login</h2>
//           <div>
//             <label>Email:</label>
//             <input></input>
//           </div>
//           <div>
//             <label>Password:</label>
//             <input type="password"></input>
//           </div>
//           <div>
//             <button onClick={() => dispatch({ type: 'LOGIN' })}>Login</button>
//           </div>
//         </form>
//       </section>
//     </div>

//   )
// }


export default Login;