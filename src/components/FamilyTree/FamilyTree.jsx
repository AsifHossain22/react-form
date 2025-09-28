import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssetsContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const [money, setMoney] = useState(0);

  const assests = "Diamond";
  const newAssets = "Gold";

  return (
    <div className="family-tree">
      <h1>Family Tree</h1>
      <h4>Total Family Money: {money}</h4>
      <MoneyContext value={[money, setMoney]}>
        <AssetsContext.Provider value={newAssets}>
          <Grandpa assests={assests}></Grandpa>
        </AssetsContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;

/*
 * 1. Create a context using createContext with a default value
 * Make sure you export the context to be used in other files
 */
