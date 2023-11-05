import React, { useState } from "react";

const SignUp = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 async function signUp(e) {
    e.preventDefault();
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      body: JSON.stringify({fullname,email,password}),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="signup">
      <form action="" onSubmit={signUp}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button> Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
