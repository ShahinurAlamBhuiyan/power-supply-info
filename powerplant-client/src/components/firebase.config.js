import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAqlXp5Maiw857fYhvBe3DCK8OEfxyuAD8",
  authDomain: "power-supply-2ade9.firebaseapp.com",
  projectId: "power-supply-2ade9",
  storageBucket: "power-supply-2ade9.appspot.com",
  messagingSenderId: "1090962925039",
  appId: "1:1090962925039:web:b5246a04b1d9742fa1421a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export { auth, provider }