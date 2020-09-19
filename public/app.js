document.addEventListener('DOMContentLoaded', function() {
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

    try {

        // Firebase app
        const app = firebase.app();

        // Firestore db
        const db = firebase.firestore();
      
        const exampleBand = db.collection('bands').doc('FbXERUorPm6VJ8WQTZIz');

        exampleBand.get()
        .then(doc => {
            const data = doc.data();
            document.write(data.name + `<br>`);

            //const addDate = new Date(data.date_added)
            //document.write(addDate + `<br>`);
            document.write(`Added by: ` + data.user + `<br>`);

            const inspiredBand = db.collection('bands').doc(data.inspired_by);

            let inspiredBandName = `Band name that inspired this band name`;
            // inspiredBand.get()
            // .then(doc => {
            //     inspiredBandName = doc.data().name;
            // });

            document.write(`Inspired by: ` + inspiredBandName + `<br>`);

        })

    
    } catch (e) {
      console.error(e);
    }
  });