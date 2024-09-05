import CarsAPI from "@/lib/api/cars/CarsAPI";
import CarFilterSelector from "./CarFilterSelector";

const MainSection = async () => {
  const { Results: carTypes } = await CarsAPI.getTypes();
  const makeNames = [];
  const optionsTypes = carTypes.map((carType) => {
    if (makeNames.includes(carType.MakeName)) {
      return;
    } else {
      makeNames.push(carType.MakeName);
    }
    return { value: carType.MakeId, label: carType.MakeName };
  });
  const filteredOptionTypes = optionsTypes.filter((option) => !!option);
  filteredOptionTypes.unshift({
    value: "",
    label: "Select car maker",
  });
  return (
    <>
      <CarFilterSelector makesOptions={filteredOptionTypes}></CarFilterSelector>
    </>
  );
};

export default MainSection;
