import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"
import "firebase/auth"


const app = initializeApp({
  apiKey: "AIzaSyAP73lv7p9VyUr6-ImTGXv09IMxioI4nu0",
  authDomain: "christmas-app-75dc0.firebaseapp.com",
  projectId: "christmas-app-75dc0",
  storageBucket: "christmas-app-75dc0.appspot.com",
  messagingSenderId: "467528913655",
  appId: "1:467528913655:web:b9a26c243fd6b7c06f79f2",
  measurementId: "${config.measurementId}"
  })
  
  export const auth = getAuth(app)
  export default app