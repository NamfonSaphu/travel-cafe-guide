import { Suspense } from "react";
import LandmarkContainer from "./home/LandmarkContainer";
import LoadingCard from "@/components/card/LoadingCard";

export default async function Home({ searchParams }: { searchParams: { search?: string } }) {
  const search = await searchParams.search
  console.log(search)
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} />
      </Suspense>
    </section>
  );
}
