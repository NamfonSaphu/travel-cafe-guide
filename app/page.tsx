import { Suspense } from "react";
import LandmarkContainer from "./home/LandmarkContainer";
import LoadingCard from "@/components/card/LoadingCard";

export default async function Home({ searchParams }: { searchParams: { search?: string, category?: string } }) {
  const {search, category} = await searchParams
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} category={category}/>
      </Suspense>
    </section>
  );
}
