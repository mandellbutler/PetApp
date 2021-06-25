import React, { useState } from "react";
// import { useGlobalContext } from '../context/GlobalContext';
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from '../utils/auth';
// import { update } from "../../../server/models/Dog";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

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
        variable: { ...formState },
      });

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
          <h2>Sign Up</h2>
          <div>
            <input
              className="form-input"
              placeholder="Name"
              name="name"
              type="name"
              value="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="form-input"
              placeholder="youremail@ilovepets.com"
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
      <section>
        <form>
          <h2>Login</h2>
          <div>
            <input
              className="form-input"
              placeholder="youremail@ilovepets.com"
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
            <button type="submit">Login</button>
          </div>
        </form>
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