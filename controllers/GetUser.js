module.exports = {
    "getUser": (schema) => {
        return new Promise((resolve, reject) => {
            schema.find({},{ password: 0, deleted: 0, __v: 0 } ).exec(function(err, result){
                if(err){
                    console.log(err);
                    reject(err);
                } 
                else{
                    console.log(result);
                    resolve(result);
                }
            })
        })
    }
}