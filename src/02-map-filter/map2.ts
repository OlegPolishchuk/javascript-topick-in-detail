import {GovernentBuuildingsType, HouseType} from "../01-hello-tests/02/02_02";

export const getStreetsTitlesOfGovermentsBuildings = (govermentBuildings: Array<GovernentBuuildingsType>) => {
    return govermentBuildings.map(el => el.address.street.title)
}

export const getStreetsTitleOfHouses = (houses: Array<HouseType>) => {
    return houses.map(house => house.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}