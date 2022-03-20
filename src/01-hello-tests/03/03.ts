import {student, StudentType} from "../02/02";
import {GovernentBuuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) =>{
    return a + b
}

// export const addSkill = (student: StudentType, skill: string)=>{
//     student.technologies.push({
//         id: new Date().getTime(),
//         title: skill
//     })
// }

export const addMoneyToBudget = (building: GovernentBuuildingsType, budget: number)=> {
    building.budget += budget;
}

export  const repairHouse = (houseType: HouseType)=> {
    houseType.repaired = true
}