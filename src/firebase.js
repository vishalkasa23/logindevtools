import firebase from 'firebase';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBkbJ7qWQZ4r-HrLaflSCBRMd72Hk6eJwo",
    authDomain: "login-98ff2.firebaseapp.com",
    projectId: "login-98ff2",
    storageBucket: "login-98ff2.appspot.com",
    messagingSenderId: "564861327539",
    appId: "1:564861327539:web:721928bffd65bbf103f8c6"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;