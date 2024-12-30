import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ getCategory, setCategori }) => {
  //const [meyve1,meyve2] = ["elma","armut"];

  const meyveler = {
    meyve1: "elma",
    meyve2: "armut",
    sihirliMeyve: "mango",
  };

  const { meyve1, meyve2 } = meyveler;
  //const meyve1 = meyveler.meyve1;
  //const meyve2 = meyveler.meyve2;

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience ,
        one delicious meal at a time.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategori((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={getCategory === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />

              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
