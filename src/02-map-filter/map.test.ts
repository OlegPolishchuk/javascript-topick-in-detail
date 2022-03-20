import {dimychTransformator, ManType} from "./map";

test('people should be a developers', () => {
    const people: Array<ManType> = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]

    const devs = people.map(dimychTransformator);

    expect(devs.length).toBe(3);

})