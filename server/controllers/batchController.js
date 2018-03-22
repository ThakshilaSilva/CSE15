const { connection } = require('../dbConnection');

const addEvent = (event) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO batchevent VALUE(?,?,?,?)", [
            event.eventName,
            event.date,
            event.description,
            event.album
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
    addEvent
};