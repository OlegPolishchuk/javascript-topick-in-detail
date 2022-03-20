import {AddressType, CityType} from "../01-hello-tests/02/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen } from "./filter2";
import {createMessages, getStreetsTitleOfHouses, getStreetsTitlesOfGovermentsBuildings} from "./map2";
let city: CityType;

beforeEach(()=>{
    city = {
        title: 'New York',
        houses: [{
            id: 1,
            buildedAt: 2021,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            },
        },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                },
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                },
            }],
        govermentBuildings: [
            {type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {street: {title: 'Central Street'}, number: 10}},
            {type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {street: {title: 'South Street'}, number: 10}}
        ],
        citizensNumber: 1000000
    }
})


//01.создайте в том же файле еще одну функцию, чтобы тесты прошли
test('list of streets titles of goverments buildings', ()=> {
    let streets =  getStreetsTitlesOfGovermentsBuildings(city.govermentBuildings)

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe('Central Street');
    expect(streets[1]).toBe('South Street');
})

test('List of streets titles', () => {
    let streets = getStreetsTitleOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe('White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('Happy street')
})

test('create greeting messages for streets' , () => {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')
})