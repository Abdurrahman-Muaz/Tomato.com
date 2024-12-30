import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownLoad from "../../components/AppDownload/AppDownLoad";

const HOME = () => {
  const [getCategory, setCategori] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu getCategory={getCategory} setCategori={setCategori} />
      <FoodDisplay category={getCategory} />
      <AppDownLoad />
    </div>
  );
};

export default HOME;
