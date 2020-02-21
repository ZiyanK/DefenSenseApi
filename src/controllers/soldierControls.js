const { admin, database } = require('../utils/firebase')

const visualizationUpdate = (uid, latitude, longitude, message) => {
    return new Promise( async (resolve, reject) => {
        fetch('https://example.com/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                const userRef = database.collection('Visualization')
                let firebaseData = {
                    visualizationId: data.visualizationId,
                    latitude: data.latitude,
                    longitude: data.longitude,
                  };
                let setDoc = db.collection('cities').set(data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    })
};

module.exports = {
    visualizationUpdate
}