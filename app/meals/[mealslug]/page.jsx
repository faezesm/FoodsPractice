import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { getMeal } from "@/services/meals";

const MealDetailsPage = async ({ params }) => {
  
  const meal = await getMeal(params.mealslug);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            <Link href={`mailto: ${meal.creator_email}`}>{meal.creator}</Link>
          </p>
          <p className={classes.summery}>{meal.summery}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions}>{meal.instructions}</p>
      </main>
    </>
  );
};

export default MealDetailsPage;
