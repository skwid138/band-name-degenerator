document.addEventListener('DOMContentLoaded', function() {
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });


    // *********    firebase commands **********

    // firebase serve  --  This will serve the app on port 5000 by default
    // firebase deploy  --  This will deploy the app to https://bandname-degenerator.web.app/

    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

    try {

        // Toggle to false to stop all console output
        const debug = true;

        function firestoreBandsCollection() {
            // Firebase app
            const app = firebase.app();
            // Firestore db
            const db = firebase.firestore();
            // Firestore bands collection
            const bandsCollection = db.collection(`bands`);

            return bandsCollection;
        }

        // Get Band Event Handler
        const getBandHandler = (e) => {
            // Prevent form from actually submitting
            e.preventDefault();

            // Get bands collection object
            const bandsCollection = firestoreBandsCollection();
            //debug && console.log(`bandsCollection: ${bandsCollection}`)

            const formEl = e.target.parentElement;

            const bandName = formEl.querySelector(`input#band_name`).value;
            debug && console.log(`bandName: ${bandName}`)

            // Band document
            const bandDoc = bandsCollection.doc(bandName);

            // Get and Output band document
            bandDoc.get()
            .then(doc => {

                // Band data markup
                let bandMarkup = ``;
                // Get the element to inject markup
                const bandDataEl = document.querySelector(`#bandData`);

                // If the band's document is in firestore
                if (doc.exists) {
                    // Get the document fields
                    const data = doc.data();
                    debug && console.log(data)

                    // Output the field data to the dom
                    bandMarkup += bandName + `<br>`;
                    bandMarkup += `Added by: ` + data.user + `<br>`;

                    // If there is a related band
                    if (data.related_band && (data.related_band !== undefined || data.related_band !== null)) {
                        bandMarkup += `Inspired by: ` + data.related_band + `<br>`;
                    }

                    bandDataEl.innerHTML = bandMarkup;

                } else {
                    bandMarkup += `No band document found for: ${bandName}`;
                    bandDataEl.innerHTML = bandMarkup;
                    console.log(bandMarkup)
                }
            });
        }

        // Add event listener for add button
        // Get band button element
        const getBandButtonEl = document.querySelector(`#getBandForm > button[type="submit"]`);
        getBandButtonEl.addEventListener(`click`, getBandHandler);

        // This will listen to firestore for changes and run everytime the document in the database changes it will update the dom
        // exampleBand.getSnapshot(doc => {
        //})

    

        // Update document
        function updateBand(e) {
            // Firestore db
            const db = firebase.firestore();
            // Firestore bands collection
            const bands = db.collection('bands');
            // Band document
            const band = bands.doc('Suicidewing');

            band.update({name})
        }

    
    } catch (e) {
      console.error(e);
    }
  });