import React from "react";

function Login() {
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
            <input></input>
          </div>
          <div>
            <button>Submit</button>
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
            <input></input>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </section>
    </div>

  )
}


export default Login;