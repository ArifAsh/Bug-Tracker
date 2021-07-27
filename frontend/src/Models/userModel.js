export default user

function user(user){
    if(user!==undefined){
        this.fullName = user.fullName;
        this.userName = user.userName;
        this.password = user.password;
        this.email = user.email;
        this.role = user.role;
    }
}