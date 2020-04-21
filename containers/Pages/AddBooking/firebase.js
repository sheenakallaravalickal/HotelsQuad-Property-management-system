import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAjzwU_TssJ32ZsY87AH9I4lQ8zbpjArbU',
  authDomain: 'hotel-pms-aba87.firebaseapp.com',
  databaseURL: 'https://hotel-pms-aba87.firebaseio.com',
  projectId: 'hotel-pms-aba87',
  storageBucket: 'hotel-pms-aba87.appspot.com',
  messagingSenderId: '111247790170',
  appId: '1:111247790170:web:02038dad924eb7258b4863',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;