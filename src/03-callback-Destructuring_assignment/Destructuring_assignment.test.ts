import {rename} from "fs";
import {ManType} from "./Destructuring_assignment";



let props: ManType;
beforeEach(() => {
    props = {
        name: 'Oleg',
        age: 29,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Nez street'
            }
        }
    }
})


test('', () => {

    const a = props.age;
    const l = props.lessons;

    //Destructuring_assignment

    const {age, lessons} = props;

    const {age: ag, lessons: le} = props; // сокращения

    // const streetTitle = props.address.street.title

    const {title} = props.address.street;


    expect(age).toBe(29)
    expect(lessons.length).toBe(2)

})


test('', ()=> {
    // деструктуризация массивов
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    // пример
    const [ls1, ls2] = props.lessons;


    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')

})