import React from "react";
import Special from "./Special";

const Cousin = ({ name, assests }) => {
  return (
    <div>
      <h3>{name}</h3>

      {name === "Shamlan" && <Special assests={assests}></Special>}
    </div>
  );
};

export default Cousin;
