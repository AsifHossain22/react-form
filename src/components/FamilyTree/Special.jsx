import React, { useContext } from "react";
import { AssetsContext } from "./FamilyTree";

const Special = ({ name, assests }) => {
  const newAssets = useContext(AssetsContext);
  console.log("New Assets", newAssets);

  return (
    <div>
      <h3>Special: {name}</h3>
      <p>Assets: {assests}</p>
      <p>New Assets: {newAssets}</p>
    </div>
  );
};

export default Special;
