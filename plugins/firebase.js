// plugins/firebase.js
import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDm-ZT14k1IY46KVPHSgAVuFyDp2XAPWcY",
  authDomain: "java-chat-da1c5.firebaseapp.com",
  databaseURL: "https://java-chat-da1c5-default-rtdb.firebaseio.com",
  projectId: "java-chat-da1c5",
  storageBucket: "java-chat-da1c5.firebasestorage.app",
  messagingSenderId: "640579667183",
  appId: "1:640579667183:web:0743612460d8215661c71a"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('db', db);
});
