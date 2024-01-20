import { SelectManufacturer } from ".";
import { fetchData } from "@/utils";
import CarCard from "./CarCard";
const CarCatalogue = async () => {
  const allCars = await fetchData();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <section className='max-w-[1440px] mx-auto px-6 sm:px-16 py-4'>
      <div>
        <h3 className='text-4xl'>Car Catalogue</h3>
        <p>explore </p>
      </div>
      <form className='flex gap-7'>
        <SelectManufacturer />
      </form>
      {!isDataEmpty ? (
        <section>
          {allCars?.map(car => (
            <>
              <CarCard car={car} />
            </>
          ))}
        </section>
      ) : (
        <section>NO!</section>
      )}
    </section>
  );
};

export default CarCatalogue;
