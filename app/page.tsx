import { CarCatalogue, Hero } from "@/components";

export default async function Home() {
  return (
    <main className=' bg-gradient-to-t from-sky-400 to-sky-200 oveflow-hidden'>
      <Hero />
      <CarCatalogue />
    </main>
  );
}
