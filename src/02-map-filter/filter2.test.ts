import {AddressType, CityType} from "../01-hello-tests/02/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen } from "./filter2";
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


//01.дополните тип HousType (Добавьте порядковый id от 1 и по возрастанию
//02. создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Houses should be destroyed', ()=> {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

//01. дополните тип GovernentBuuildingsType
//02. заполните объект city, что бы тесты ниже прошли

test('buildings with correct staff count', ()=>{
    let buildings = getBuildingsWithStaffCountGreaterThen(city.govermentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
})