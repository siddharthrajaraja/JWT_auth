var {login}=require('./controller/login')
var {checkAuth}=require('./controller/checkAuth')
module.exports=function(app){

    app.post('/login',login)
    app.get('/checkAuth',checkAuth)
    

}