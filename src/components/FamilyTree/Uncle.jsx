import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <Cousin name="Maruf"></Cousin>
        <Cousin name="Shahida"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
