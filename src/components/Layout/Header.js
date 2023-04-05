import React from "react";
import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals for life</h1>
        <button type="button">Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious foods!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
