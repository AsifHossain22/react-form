import React from "react";
import Cousin from "./Cousin";

const Aunt = ({ assests }) => {
  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <Cousin assests={assests} name="Shamlan"></Cousin>
        <Cousin name="Salman"></Cousin>
      </section>
    </div>
  );
};

export default Aunt;
