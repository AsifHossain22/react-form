import React, { createContext } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssetsContext = createContext("");

const FamilyTree = () => {
  const assests = "Diamond";
  const newAssets = "Gold";

  return (
    <div className="family-tree">
      <h1>Family Tree</h1>
      <AssetsContext.Provider value={newAssets}>
        <Grandpa assests={assests}></Grandpa>
      </AssetsContext.Provider>
    </div>
  );
};

export default FamilyTree;
