import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];


    data.push(new bugModel({
        _id:234345,
        name:"crash on load",
        details:"crashes after 3 seconds",
        steps: "Open app and it crashes",
        version:"V2.0",
        type: 1,
        assigned: "Arif Ash",
        creator: "JOe Bloggs",
        priority: 1,
        time:"23:38"
    }))
    data.push(new bugModel({
        _id:234345,
        name:" wont load",
        details:"crashes after 3 seconds",
        steps: "Open app and it crashes",
        version:"V2.0",
        type: 4,
        assigned: "Joe Mama",
        creator: "JOe Bloggs",
        priority: 3,
        time:"23:38"
    }))

    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;
}