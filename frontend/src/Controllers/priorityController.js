

export default (priority) =>{
    const colors = ["#b33a3a","#FFA500","#32cd32"]
    const levels = ["High", "Medium","Low"]
    const index = priority-1;
    return{
        level:levels[index],
        color:colors[index]

    } 
}