import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          //   required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default ControlledField;
