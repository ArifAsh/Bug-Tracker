

export default (priority,typeNum) =>{
    const colors = ["#a30000","#ff0606","#FFA500","#00FF00"]
    const levels = ["High", "Medium","Low","Complete"]
    const types = ["Bug/Error","Feature Request","Other Comments", "Training/Document Request"]
    const index = priority-1;
    return{
        level:levels[index],
        color:colors[index],
        ticket:types[typeNum-1]

    } 
}