import {CityType} from "../02/02_02";
import {addMoneyToBudget, repairHouse} from "./03";

let city: CityType;

beforeEach(()=>{
    city = {
        title: 'New York',
        houses: [{
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


//01.создайте функцию для теста
test('Budget should changed for HOSPITAL', ()=>{
    addMoneyToBudget(city.govermentBuildings[0], 100000);

    expect(city.govermentBuildings[0].budget).toBe(300000);
})

//01. тесты должны быть пройдены

test('Budget should changed for FIRE-STATION', ()=>{
    addMoneyToBudget(city.govermentBuildings[1], -100000);

    expect(city.govermentBuildings[1].budget).toBe(400000);
})

test('House should be repaired', ()=>{
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})