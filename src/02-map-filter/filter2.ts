import {CityType, GovernentBuuildingsType} from "../01-hello-tests/02/02_02";

export  const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses =  city.houses.filter(house => house.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (govermentBuildings: Array<GovernentBuuildingsType>, staffCount: number) => {
    return govermentBuildings.filter(el => el.staffCount > staffCount)
}