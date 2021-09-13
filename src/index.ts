import { initializeApp, FirebaseOptions } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import axios from 'axios';
const project_id = process.env.project_id;
(async () => {

  const url = `https://${project_id}.web.app/__/firebase/init.json`;
  const response = await axios.get<FirebaseOptions>(url);
  initializeApp(response.data);

  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "/channel/test/event"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
})();
