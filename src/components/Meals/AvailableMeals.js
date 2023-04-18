import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "https://react-http-7e647-default-rtdb.firebaseio.com/meals.json"
      );

      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();
      console.log(Object.entries(data));
      console.log(data);

      let loadedMeals = [];
      // Object.keys(data).forEach((key) => {
      //   return loadedMeals.push({
      //     id: key,
      //     name: data[key].name,
      //     description: data[key].description,
      //     price: data[key].price,
      //   });
      // });

      for (const [id, { name, description, price }] of Object.entries(data)) {
        loadedMeals.push({
          id,
          name,
          description,
          price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHasError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealIsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (hasError) {
    return (
      <section className={classes.mealsError}>
        <p>{hasError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
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
