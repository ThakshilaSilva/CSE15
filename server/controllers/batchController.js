const { connection } = require('../dbConnection');

const addEvent = (event) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO batchevent VALUE(?,?,?,?,?,?,?,?,?,?)", [
            event.eventName,
            event.date,
            event.description,
            event.photo1,
            event.photo2,
            event.photo3,
            event.photo4,
            event.album1,
            event.album2,
            event.album3
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

const getEvents = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM batchevent",
            (err, res) => {
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
    addEvent,
    getEvents
};