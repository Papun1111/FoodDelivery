import React from "react";
import "./ExploreMenu.css";
import { menu_list, assets } from "../../assets/assets";
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore</h1>
      <p className="explore-menu-text">
        Ready to explore a world of flavors? Browse our extensive menu filled
        with culinary delights from around the globe. Whether you're craving the
        comfort of classic dishes or adventurous enough to try exotic new
        flavors, our menu has something to satisfy every palate. Click below to
        start your delicious journey!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-item">
<img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
<p>{item.menu_name}</p>
          </div>;
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
