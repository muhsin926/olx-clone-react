import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAkb3SKeHMtPTEnYoKE7I8XSAqDZPKi0CQ",
    authDomain: "olx-clone-946f5.firebaseapp.com",
    projectId: "olx-clone-946f5",
    storageBucket: "olx-clone-946f5.appspot.com",
    messagingSenderId: "117292316881",
    appId: "1:117292316881:web:f3039ce9ef978861d12df0",
    measurementId: "G-V5QECGK1J9"
  };

  export default firebase.initializeApp(firebaseConfig)