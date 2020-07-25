const md5=require('md5')
exports.hash=(password)=>{
    return md5(password);
}