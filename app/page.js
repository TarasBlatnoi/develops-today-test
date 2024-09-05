import Image from "next/image";
import bgImage from "@/public/home-bg.jpeg";
import CarsAPI from "@/lib/api/cars/CarsAPI";
import MainSection from "./_components/MainSection";
import { Suspense } from "react";
import Spinner from "./_components/Spinner";

export default async function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start h-screen">
      <Image
        src={bgImage}
        fill
        quality={80}
        alt="car dealership"
        placeholder="blur"
        className="object-cover object-top"
      ></Image>
      <div className="absolute inset-0 bg-black opacity-55"></div>
      <h1 className="text-white text-8xl z-10 m-auto mt-24">
        Find car of your dream
      </h1>
      <div className="flex  justify-center h-full w-screen z-10 text-center">
        <Suspense fallback={<Spinner />}>
          <MainSection />
        </Suspense>
      </div>
    </main>
  );
}
