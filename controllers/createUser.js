module.exports = {
    "createUser": (data, schema) => {
        return new Promise((resolve, reject) => {
            let message = '';
            schema.find({ email: data.email }, function (err, docs) {
                if (docs.length) {
                    message = "Email already exists!";
                    reject(message);
                } else {
                    let create = new schema();
                    create.name = data.name;
                    create.email = data.email;
                    create.password = data.password;
                    create.age = data.age;
                    create.save().then(save => {
                        message = "Data uploaded successfully!"
                        resolve(message);
                    }).catch(err => {
                        message = "Something went wrong!";
                        reject(new Error(message));
                    })
                }
            });
        })
    }
}