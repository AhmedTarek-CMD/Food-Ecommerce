import "./ExplorMenu.css";
import { menu_list } from "../../assets/assets";

const ExplorMenu = ({ category, setCategory }) => {
  return (
    <div className="explor-menu" id="explor-menu">
      <h1>Explor Our Menu</h1>
      <p className="explor-menu-text">
        Discover a world of flavors with our carefully curated menu at Tomato.
        From classic favorites to modern culinary delights, every dish is
        crafted with passion and fresh, high-quality ingredients.
      </p>
      <div className="explor-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explor-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="Menu Image"
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

export default ExplorMenu;
