const admin = require('firebase-admin');

var serviceAccount = JSON.parse(process.env.CREDS);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL,
});

const database = admin.firestore()
module.exports = {admin,database}