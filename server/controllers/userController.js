const { connection } = require('../dbConnection');

const getUser = (user) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT password FROM user where username=?", [user.username],
            (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
    });
};

const addNewUser = (user) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO user VALUE(?,?,?,?,?,?,?,?,?,?,null,null,?,?,null,?)", [
            user.username,
            user.fname,
            user.lname,
            user.nic,
            user.dob,
            user.gender,
            user.tp,
            user.address,
            user.email,
            user.stream,
            user.fb,
            user.linkedIn,
            user.password
        ], (err, res) => {
            if (err) {
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