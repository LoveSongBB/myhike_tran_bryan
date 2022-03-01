//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------


var firebaseConfig = {

  apiKey: "AIzaSyA37EMXC_wOreM-EHJa8j67JWCe6vkIatQ",

  authDomain: "fir-08-comp1800.firebaseapp.com",

  projectId: "fir-08-comp1800",

  storageBucket: "fir-08-comp1800.appspot.com",

  messagingSenderId: "878189634953",

  appId: "1:878189634953:web:8a4e2a7a1ca8e090006d58",

  measurementId: "G-K808H8VVQL"
};


//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();