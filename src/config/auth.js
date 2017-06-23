import firebase from 'firebase';
require('dotenv').config();

const config = {
  apiKey: "AIzaSyATOpITUFqvWLpJvNOlMEBY6gqp5AE6Wfo",
  authDomain: "masterseeker.firebaseapp.com",
  databaseURL: "https://masterseeker-29b11.firebaseio.com"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth