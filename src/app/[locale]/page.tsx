import { Suspense } from "react";

import { Container, PostItem } from "@/components";
import {
  AIDrivenTripPlannerSetcion,
  OurSolutionSection,
  PlanningTripSection,
  RatingSection,
  RecentsPostsSection,
  TeamSection,
  WaitlistSection,
} from "@/sections";

import styles from "./home.module.scss";

type HomePageType = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: HomePageType) {
  return (
    <div>
      <Container>
        <div className={styles.secitionContainer}>
          <Suspense>
            <AIDrivenTripPlannerSetcion locale={locale} />
            <PlanningTripSection locale={locale} />
            <OurSolutionSection locale={locale} />
            <RatingSection locale={locale} />
            <WaitlistSection locale={locale} />
            <RecentsPostsSection locale={locale} />
          </Suspense>
        </div>
      </Container>

      <TeamSection locale={locale} />
    </div>
  );
}
