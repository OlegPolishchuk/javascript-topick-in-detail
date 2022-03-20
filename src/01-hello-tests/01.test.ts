import {sum} from "./01";
import {mult} from './01';
import splitIntoWords from './01';

test('sun should be correct', ()=>{
    let a = 1;
    let b = 2;
    let c = 3;

    //action
    const result = sum(a,b)

    //expect result
    expect(result).toBe(3);
})

test('sun should be correct', ()=>{
    let a = 1;
    let b = 2;
    let c = 3;

    //action
    const result = sum(a,c)

    //expect result
    expect(result).toBe(4);
})

test('mult should be correct', ()=>{
    let a = 1;
    let b = 2;
    let c = 3;

    //action
    const result = mult(a,c)

    //expect result
    expect(result).toBe(3);
})

test('splitIntoWords should be correct', ()=>{
    const string1 = 'Hello my friend!';
    const str2 = 'JS  programming language';

    const result  = splitIntoWords(string1);
    const result2 = splitIntoWords(str2);


    expect(result.length).toBe(3);
    expect(result[0]).toBe('hello');
    expect(result[1]).toBe('my');
    expect(result[2]).toBe('friend');

    expect(result2.length).toBe(3);
    expect(result2[0]).toBe('hello');
    expect(result2[1]).toBe('my');
    expect(result2[2]).toBe('friend');
})