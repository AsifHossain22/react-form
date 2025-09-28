import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const Grandpa = ({ assests }) => {
  return (
    <div>
      <h2>Grandpa</h2>
      <section className="flex">
        <Dad assests={assests}></Dad>
        <Uncle></Uncle>
        <Aunt assests={assests}></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;
