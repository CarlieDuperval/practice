import { initializeApp, cert, getApps} from "firebase-admin/app"
import { getFirestore} from "firebase-admin/firestore"

import serviceAccount from "./credentials.js";


// import { initializeApp, cert, getApp } from "firebase-admin/app";
// import {} from "firebase-admin"

// import ServiceAccount from './credentials.js';
// import { DownscopedClient } from "google-auth-library";


const getDb = () => {
    if (getApp.length === 0){
        initializeApp({
            credential: cert(serviceAccount)

    })

}
return getFirestore();
}


getAttendees = () => {
    const db = getDb()
    // get the collection
    const attendeeCollection = db.collection('attendees')
    // then all the docs of the collection
    try {
        const snapshot = await attendeeCollection.get()
        const attendees =[]
        const attendees = snapshot.docs.forEach( el => {
            attendees.push({id: doc.id, ...doc.data()}) // to acccess the data 
        })
        return attendees
    } catch (error) {
        console.error(error)
        
    }

}




attendeeCollection
.get()
.then(snapshot =>)


const res = await getAttendees()
console.log("This is the result", res)