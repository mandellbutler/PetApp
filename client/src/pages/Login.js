import React from "react";
import { useGlobalContext } from '../context/GlobalContext';
import { LOGIN } from "../context/actions"

function Login() {
  const [state, dispatch] = useGlobalContext();
  return (
    <div>
      <section>
        <form>
          <h2>Sign Up</h2>
          <div>
            <label>Name:</label>
            <input></input>
          </div>
          <div>
            <label>Email:</label>
            <input></input>
          </div>
          <div>
            <label>Password:</label>
            <input type="password"></input>
          </div>
          <div>
            <button onClick={() => dispatch({ type: LOGIN })}>Submit</button>
          </div>
        </form>
      </section>
      <section>
        <form>
          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input></input>
          </div>
          <div>
            <label>Password:</label>
            <input type="password"></input>
          </div>
          <div>
            <button onClick={() => dispatch({ type: 'LOGIN' })}>Login</button>
          </div>
        </form>
      </section>
    </div>

  )
}


export default Login;