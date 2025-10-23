import Link from "next/link";
import { Suspense } from "react";

import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All Meals",
  discription: "Brows the",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          delicious meals , created{" "}
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>
          choose your favorit recipe and cook it yourself. it is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">share your favorit recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>fetching meals... </p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
