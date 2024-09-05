class CarsAPI {
  async getTypes() {
    const res = await fetch(
      `${process.env.API_LINK}/GetVehicleTypesForMake/merc?format=json`
    );
    if (!res.ok) {
      throw new Error("Cannot get cars type");
    }
    return res.json();
  }

  async getVehicleData(makeId, year) {
    const res = await fetch(
      `${process.env.API_LINK}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    if (!res.ok) {
      throw new Error("Cannot get vehicle data");
    }
    return res.json();
  }
}

export default new CarsAPI();
