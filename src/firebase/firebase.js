import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAlKGckG39Hw5zm6rWk6zskfoX_cKkekxc',
  authDomain: 'chat-app-3c96c.firebaseapp.com',
  projectId: 'chat-app-3c96c',
  storageBucket: 'chat-app-3c96c.appspot.com',
  messagingSenderId: '291670964853',
  appId: '1:291670964853:web:00af9649991cf38850563c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

//Collections
export const CHANNELS = 'channels';
export const MESSAGES = 'messages';

export default database;
