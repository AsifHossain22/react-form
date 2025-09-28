import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Friend = () => {
  const [money, setMoney] = use(MoneyContext);

  return (
    <div>
      <h2>Friend</h2>
      <p>Family got: {money}</p>
    </div>
  );
};

export default Friend;
