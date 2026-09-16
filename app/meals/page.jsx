import Link from "next/link";
import classes from "./page.module.css";
import MealsGride from "@/components/meals/meals-grid";
import { getMeals } from "@/services/meals";

const  MealsPage = async() => {
  const meals =await getMeals()
  return (
    <div>
      <header className={classes.header}>
        <h1>
          Delicius meals, created {""}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite</p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share Meals</Link>
        </p>
      </header>
      <main className={classes.main}>
        {}
        <MealsGride meals={meals} />
      </main>
    </div>
  );
};

export default MealsPage;
