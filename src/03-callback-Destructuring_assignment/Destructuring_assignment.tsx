import React, {useState} from "react";

export type LessonType = {title: string}
export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

// const ManComponent : React.FC<PropsType> = ( props ) => {
//     // можно деструктурировать сразу в параметрах функции Reacr.FC<PropsType> = ( {title, mam} )
//     const { title, man } = props;
//
//
//     return (
//         <div>
//             <h1>{title}</h1>
//             <hr/>
//             <div>{man.name}</div>
//             <div>{props.car.model}</div>
//         </div>
//     )
// }

const ManComponent : React.FC<PropsType> = ( {title, man, ...props} ) => {
   // props =>  ток, что осталось когда мы забрали title и man (food, car)
    // так же модно сделать чуть иначе  =>    const {title, man, ...restProps} = props; ( props в параметрах функции)


    // useState возвращает массив
    // первый элемент -- message -- равен initState,
    // второй элемент --setMessage -- это функция
    const [message, setMessage] =  useState<string>('hello')

    // если нужно завбрать второй элемент из массива, нужно первый элемент отделить занятой
    // const [, les2] = props.lessons

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            <div>{props.car.model}</div>
        </div>
    )
}