let {getUserObject}=require('../auth/jwtDecode')

exports.checkAuth=(req,res)=>{
    console.log("userAuth",req.session.jwt);
    var userObject=getUserObject(req.session.jwt);
    res.status(200).json({flag:"CONNECTED!!",userObject})
}