import { initializeApp } from "firebase-admin";
import { getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const getDb = () => {
  if (getApps().length === 0) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  return getFirestore();
};


const getDb = () => {
    if(getApps().length === 0) {
        initializeApp({
            credential: cert(serviceAccount),
        })
    }
    return getFirestore
}







const getAttendees = async () =>{

    const db = getDb()
    //Get the collection
    const attendeeCollection = db.collection('attendees')
    //then get all the docs of the collection 
    try {
        const snapshot = await attendeeCollection.get()
        const attendees = []
         snapshot.docs.forEach(doc => {
             attendees.push({id: doc.id, ...doc.data()})
         })

         return attendees;

    } catch (error) {
        console.error(error)
    }

}



const getDataInfo = async () => {
  const db = getDb();
  // get the collection
  const dataInfoCollection = db.collection("informations");
  // then get all the docs of the collection
  try {
    const snapshot = await dataInfoCollection.get();
    const informations = [];
    snapshot.docs.forEach((doc) => {
      informations.push({ id: doc.id, ...doc.data() });
    });

    return informations;
  } catch (error) {
    console.error(error);
  }
};



const addAttendee = async (attendee) => {
    const db = getDb()
    //Get the collection
    const attendeeCollection = db.collection('attendees')

    const res = await attendeeCollection.add(attendee)

    return res.id;
}

const addDataInfo = async (information) => {
    const db = getDb()
    const dataInfoCollection = db.collection('informations')

    const res = await dataInfoCollection.add(information)
    return res.id;
}


// const addResult = await addAttendee({name:"darie", age:33})

// const res = await getAttendees()

// console.log("This is the result", res)


const addResult = await addDataInfo({ name: "Carlie", awesome : true})

const res = await getDataInfo()
console.log('This is the result', res)