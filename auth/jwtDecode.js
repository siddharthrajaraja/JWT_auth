const jwt=require('jsonwebtoken')

exports.getUserObject=(token)=>{
    return jwt.verify(token,process.env.JWT_KEY)
}