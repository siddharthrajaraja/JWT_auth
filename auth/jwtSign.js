const jwt=require('jsonwebtoken')

exports.returnJWT=(username,password)=>{
    let payload={
        username:username,
        password:password
    }
    return jwt.sign(payload,process.env.JWT_KEY);
}