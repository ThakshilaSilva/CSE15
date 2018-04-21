const { connection } = require('../dbConnection');

const getUser = (user) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM user where username=?", [user.username],
            (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
                //console.log(password);
            })
    }).catch((error) => {
        reject(error);
    });
};

getUsers = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM user",
            (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            }
        )
    }).catch((error) => {
        reject(error);
    });
}

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

const updateUser = (user) => {
    //console.log(user.linkedIn);
    return new Promise((resolve, reject) => {
        connection.query("UPDATE user SET FirstName=?, LastName=?, ContactNo=?, Address=?, Facebook=?, LinkedIn=? WHERE Username=?", [
            user.firstname,
            user.lastname,
            user.tp,
            user.address,
            user.fb,
            user.linkedIn,
            user.username
        ], (err, result) => {
            if (err) {
                reject(err);
                console.log("ERROR " + err);
            }
            resolve(result);
            //console.log("res " + result);
        });
    }).catch((error) => {
        reject(error);
    });
}

module.exports = {
    getUser,
    addNewUser,
    updateUser
};