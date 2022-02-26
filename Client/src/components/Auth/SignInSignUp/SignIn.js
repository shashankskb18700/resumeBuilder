import React from "react";

const SignIn = () => {
  return (
    <div>
      <form>
        <input type="name" name="name" placeholder="entre your email" />
        <input
          type="password"
          name="password"
          placeholder="entre your password"
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
