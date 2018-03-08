const {connection} = require('../dbConnection');

const getUser = (user) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM user where username=?", [user.username],
    (err, res) => {
        if(err){
            reject (err);
        }
        resolve(res);
    })
    });
};

const addNewUser = (user) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO user VALUE(?,?)", [
            user.username,
            user.password
        ], (err, res) => {
            if(err){
                reject(err);
            }
            resolve(res);
        });
    }).catch((error) => {
        reject(error);
    });

}

module.exports = {
    getUser,
    addNewUser
};