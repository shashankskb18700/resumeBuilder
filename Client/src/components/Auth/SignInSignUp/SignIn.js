import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");

  return (
    <div>
      <form>
        <input
          type="name"
          name="name"
          placeholder="entre your email"
          // onChange={onChange}
        />
        <input
          type="password"
          name="password"
          // onChange={onChange}
          placeholder="entre your password"
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
