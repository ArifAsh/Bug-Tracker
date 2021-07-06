import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];


    data.push(new bugModel({
        _id:234345,
        name:"Crash on load",
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
        _id:237645,
        name:" Wont load",
        details:"crashes after 3 seconds",
        steps: "Open app and it crashes",
        version:"V2.0",
        type: 4,
        assigned: "Joe Mama",
        creator: "JOe Bloggs",
        priority: 3,
        time:"23:38"
    }))
    data.push(new bugModel({
        _id:134343,
        name:" Test data",
        details:" suspect data",
        steps: "Open app and it crashes",
        version:"V2.0",
        type: 3,
        assigned: "Mr test",
        creator: "Arif Ash",
        priority: 2,
        time:"22:00"
    }))
    data.push(new bugModel({
        _id:134003,
        name:" Bug tracker",
        details:" Not trackin g bugs",
        steps: "Bugs never tracked",
        version:"V2.0",
        type: 2,
        assigned: "Mr test",
        creator: "Arif Ash",
        priority: 2,
        time:"22:00"
    }))
    data.push(new bugModel({
        _id:174103,
        name:" Sorting visualizer",
        details:" Can not see merge sort",
        steps: "merge sort not dispalyed on screen",
        version:"V2.0",
        type: 1,
        assigned: "Mr test",
        creator: "Arif Ash",
        priority: 2,
        time:"22:00"
    }))
    data.push(new bugModel({
        _id:134503,
        name:" Pathfinder Visualizer",
        details:"Can not add nodes to grid",
        steps: "Click on empty grid but nothing happens",
        version:"V2.0",
        type: 1,
        assigned: "Mr test",
        creator: "Arif Ash",
        priority: 3,
        time:"22:00"
    }))
    data.push(new bugModel({
        _id:134503,
        name:" Sudoku Game and Solver",
        details:"Can not add nodes to grid",
        steps: "Click on empty grid but nothing happens",
        version:"V2.0",
        type: 3,
        assigned: "Mr test",
        creator: "Arif Ash",
        priority: 4,
        time:"22:00"
    }))




    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;
}