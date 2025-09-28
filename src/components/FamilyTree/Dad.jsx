import React from "react";
import Me from "./Me";
import Brother from "./Brother";
import Sister from "./Sister";

const Dad = ({ assests }) => {
  return (
    <div>
      <h3>Dad</h3>
      <section className="flex">
        <Me assests={assests}></Me>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
