const {returnJWT}=require('../auth/jwtSign')

exports.login=(req,res)=>{
    var jwtToken=returnJWT(req.body.username,req.body.password)
    req.session={
        jwt:jwtToken
    }
    res.status(200).json({flag:"AUTHENTICATED USER!!"})
}