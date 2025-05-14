import { Suspense } from "react";
import LandmarkContainer from "./home/LandmarkContainer";
import LoadingCard from "@/components/card/LoadingCard";

export default function Home() {
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer />
      </Suspense>
    </section>
  );
}
