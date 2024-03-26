import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDan-R9xDjhHW7ki1XNGV2t2GhGssCrpg0",
    authDomain: "todo-crud-da919.firebaseapp.com",
    projectId: "todo-crud-da919",
    storageBucket: "todo-crud-da919.appspot.com",
    messagingSenderId: "666387919958",
    appId: "1:666387919958:web:51ca74f076831d9ab277f7",
    measurementId: "G-QZLQZ39HY9"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;