import CarsAPI from "@/lib/api/cars/CarsAPI";
import generateYears from "@/utils/generateYears";

export async function generateStaticParams() {
  const { Results: carTypes } = await CarsAPI.getTypes();
  const makeIds = carTypes.map((car) => car.MakeId.toString());
  const years = generateYears(2015);
  const paramsArr = [];
  for (let i = 0; i < years.length; i++) {
    for (let j = 0; j < makeIds.length; j++) {
      paramsArr.push({ makeId: makeIds[j], year: years[i].value });
    }
  }
  return paramsArr;
}

export default async function Page({ params }) {
  const { Results: cars, Count } = await CarsAPI.getVehicleData(
    params.makeId,
    params.year
  );
  return (
    <>
      <h1 className="text-center mt-10 text-3xl">Cars for you</h1>
      <div className="grid grid-cols-4 gap-5 p-10">
        {cars.map((car) => {
          return (
            <div key={car.Model_ID} className="text-center">
              <h2>Maker: {car.Make_Name}</h2>
              <p>Model name: {car.Model_Name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
