import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyAWf5p5TDOL16Am1nOs9Vv5Q3ypzO62PcY',
  authDomain: 'fireblog-app-react.firebaseapp.com',
  databaseURL: 'fireblog-app-react.firebaseapp.com',
  storageBucket: 'gs://fireblog-app-react.appspot.com',
  projectId: "fireblog-app-react",
  appId: "1:960157715205:web:076034fde72382cb54c56c",
  messagingSenderId: "960157715205"
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default firebaseApp;