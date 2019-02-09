const db = require('./dbConnections');
const User = require('./userDb');

function createUser(req,res,next){
    let user = new User({
        email : req.body.email,
        name : req.body.name,
        password : req.body.password
    });
    user.save((err,u)=>{
        if(err && err.code === 11000)
            res.status(400).send({"msg":"Email already exist"});
        else if(err)
            res.status(500).send({"msg":"something Broke!!"});
        else
            res.send({msg:"New User Created"});
    });
}

function loginUser(req,res) {
    User.findOne({
        email : req.body.email,
        password : req.body.password
    }, (err, data)=>{
        if(err)
            res.status(500).send({"msg":"something Broke!!"});
        else if(data)
            res.send({msg:"Welcome "+data.name});
        else
            res.status(401).send({msg:"Email or password invalid"});
    });
}

function forget(req,res) {
    let pass = Math.random().toString(36).substring(2, 15);
    User.updateOne(
        {"email" : req.body.email},
        { $set: { "password" :  pass} },
        (error , data)=>{
            if(error)
                res.status(500).send({msg:"Something Broke!!"});
            else if(data.n===0)
                res.status(401).send({msg:"Invalid Email"});
            else
                res.send({newPassword:pass});
        }
    );
}
module.exports = {
    createUser,
    loginUser,
    // updateUser,
    forget
};
