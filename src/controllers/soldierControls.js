const { admin, database } = require('../utils/firebase');
const fetch = require("node-fetch");

const visualizationUpdate = (uid, latitude, longitude, message) => {
    return new Promise( async (resolve, reject) => {
        fetch('https://58d749a5.ngrok.io/nlp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text:message,
                coords:{
                    lat:latitude,
                    lon:longitude
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                console.log('visualid', data.visualizationId)
                // const userRef = database.collection('Visualization')
                let firebaseData = {
                    visualizationId: data.visualizationId,
                    latitude: data.new_lat,
                    longitude: data.new_lon,
                    uid:uid
                };
                console.log("Firebase data in -> ", firebaseData)
                let setDoc = database.collection('Visualization').doc(`${uid+1}`).set(firebaseData);
                resolve({
                    statusCode:200,
                    message: "Stored succesfully into the database"
                })
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    })
};

const getLocation = () => {
    return new Promise( (resolve, reject) => {
        let soldiersRef = database.collection('Soldier');
        let allSoldiers = soldiersRef.get()
        .then(snapshot => {
            let soldierList = []
            snapshot.forEach(doc => {
                soldierList.push(doc.data());
            });
            resolve({
                statusCode: 200,
                payload: {
                    msg: "here is the data",
                    data: soldierList
                }
            })
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
        
    })        
}

const readGeolocation = () => {
    return new Promise( (resolve, reject) => {
        let soldiersRef = database.collection('Visualization');
        let allSoldiers = soldiersRef.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.data())
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
        
    })        
}

module.exports = {
    visualizationUpdate,
    getLocation,
    readGeolocation
}