import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    description: "Spaghetti with a rich meat sauce",
    price: 12.99,
  },
  {
    id: 2,
    name: "Chicken Caesar Salad",
    description:
      "Grilled chicken with romaine lettuce, croutons, and Caesar dressing",
    price: 8.99,
  },
  {
    id: 3,
    name: "Beef Burger",
    description: "Grilled beef patty with lettuce, tomato, and cheese on a bun",
    price: 10.99,
  },
  {
    id: 4,
    name: "Vegetable Curry",
    description: "A spicy vegetarian curry with chickpeas and potatoes",
    price: 9.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
