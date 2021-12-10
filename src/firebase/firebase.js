import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"
import "firebase/auth"


const app = initializeApp({
    apiKey: "AIzaSyDYBc-y75dUs9yZVjJT8GTBXf-Kw7wriTo",
    authDomain: "christmas-list-e18e6.firebaseapp.com",
    databaseURL: "https://christmas-list-e18e6-default-rtdb.firebaseio.com",
    projectId: "christmas-list-e18e6",
    storageBucket: "christmas-list-e18e6.appspot.com",
    messagingSenderId: "846250414357",
    appId: "1:846250414357:web:b9ec196b208596fa1f591c",
    measurementId: "${config.measurementId}"
  })
  
  export const auth = getAuth(app)
  export default app