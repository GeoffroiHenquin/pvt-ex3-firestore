import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCDd3wn5EyoL0xkVL9aJJwTJTvVlUdIYso",
  authDomain: "gh-pvt-hiver-2021.firebaseapp.com",
  projectId: "gh-pvt-hiver-2021",
  storageBucket: "gh-pvt-hiver-2021.appspot.com",
  messagingSenderId: "949483338277",
  appId: "1:949483338277:web:77f719554efd941946ddcc"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;