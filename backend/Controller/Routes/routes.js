const express = require('express')
const router = express.Router()
const newUserModel = require('../../Model/UserModel')
const userSession = require('../../Model/userSession')
const bugModel = require('../../Model/bugModel')



router.post('/signUp',async (request,response)=>{
    if(!request.body.fullName){
        return response.send({
            success:false,
            message:"Error: Fullname cannot be blank"
        })
    
    }
    if(!request.body.userName){
        return response.send({
            success:false,
            message:"Error: Username cannot be blank"
        })
    }
    if(!request.body.email){
        return response.send({
            success:false,
            message:"Error: Email cannot be blank"
        })
    }
    if(!request.body.password){
        return response.send({
            success:false,
            message:"Error: Password cannot be blank"
        })
    }
    const email = request.body.email.toLowerCase();
    //Check email doesn't already exist then save
    newUserModel.find({
        email:email
    },(err,previousUsers)=>{
        if(err){
            return response.send('Error: Server Error');
        }else if(previousUsers.length>0){
            return response.send('Error: Account already exist.')

        }
    })
    const securePass = new newUserModel().generateHash(request.body.password)
    const user= new newUserModel({
        fullName: request.body.fullName,
        userName: request.body.userName,
        email: request.body.email,
        password: securePass,
        role: request.body.role,
    })
    user.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error=>{response.json(error)})
})
router.post('/signIn',(request,response)=>{
   
    if(!request.body.email){
       
        return response.send({
            success:false,
            message:"Error: Email cannot be blank"
        })
    }
    
    if(!request.body.password){
        return response.send({
            success:false,
            message:"Error: Password cannot be blank"
        })
    }
    const email = request.body.email.toLowerCase();
    newUserModel.find({
        email: email,
    },(err,users)=>{
        if(err){
            return response.send({
                success:false,
                message:'Error: Server Error'
            });
        }
        if(users.length != 1){
            
            return response.send({
                success:false,
                message:'Error: Incorrect Email or Password'
            });
        }

        const user = users[0];
        if(!user.validPassword(request.body.password)){
            return response.send({
                success:false,
                message:'Error: Invalid Password'
            });
        }
        // otherwise correct user entered so create user session
        const newSession = new userSession({
            userId: user._id,
        });
        newSession.save((err,doc)=>{
            if(err){
                return response.send({
                    success:false,
                    message:'Error: Server Error'
                });
            }
            return response.send({
                success:true,
                message:'Valid sign in',
                token: doc._id,
                user:user
            })
        })
    });
});

router.get('/verify',(request,response)=>{
    //Get token and verify its one of a kind and not deleted
    const {query} = request;
    const {token} = query;


    userSession.find({
        _id: token,
        isDeleted: false
    },(err,sessions)=>{
        if(err){
            return response.send({
                success: false,
                message: "Error : Server error"
            });
        }
        if (sessions.length != 1){
            console.log(sessions)
            return response.send({
                success: false,
                message: "Error: Invalid"
            })
        }else{
            return response.send({
                sessions
            })
        }
    })
});

router.get('/logout',(request,response)=>{
    const {query} = request;
    const {token} = query;


    userSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    },{$set: {
        isDeleted:true}
    }
    ,null,(err,sessions)=>{
        if(err){
            return response.send({
                success: false,
                message: "Error : Server error"
            });
        }
      
        return response.send({
            success:true,
            message:"All good"
            });
        
    })
})

router.post('/createBug',(request,response)=>{
    const ticket = new bugModel({
        bugName :request.body.name,
        bugDetails : request.body.details,
        bugSteps : request.body.steps,
        bugType : request.body.type,
        bugPriority : request.body.priority,
        bugAssigned: request.body.assigned,
        bugCreator : request.body.creator,
    });
    ticket.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error=>{response.json(error)})

})
router.post('/update',(request,response)=>{
    const {query} = request;
    const {token} = query;

    bugModel.findOneAndUpdate({
        _id: token,
    },{$set: {
        bugName :request.body.name,
        bugDetails : request.body.details,
        bugSteps : request.body.steps,
        bugType : request.body.type,
        bugPriority : request.body.priority,
        bugAssigned: request.body.assigned,
        bugCreator : request.body.creator,}
    }
    ,null,(err,bugs)=>{
        if(err){
            return response.send({
                success: false,
                message: "Error : Server error"
            });
        }
      
        return response.send({
            success:true,
            message:"All good"
            });
        
    })

})
router.post('/delete',(request,response)=>{
    const {query} = request;
    const {token} = query;

    bugModel.findOneAndDelete({
        _id: token,
    }
    ,null,(err,bugs)=>{
        if(err){
            return response.send({
                success: false,
                message: "Error : Server error"
            });
        }
      
        return response.send({
            success:true,
            message:"All good"
            });
        
    })
})


module.exports = router