import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyDx_oSaKT1oubqmG00c35XcuXbM89Vofug",

  authDomain: "usicamm-pro.firebaseapp.com",

  projectId: "usicamm-pro",

  storageBucket: "usicamm-pro.firebasestorage.app",

  messagingSenderId: "1087395164951",

  appId: "1:1087395164951:web:cd409261a55d01f0267d52"

}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export default app