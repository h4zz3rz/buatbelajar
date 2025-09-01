<!-- firebase.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyARnF7pHM9i2xmd2Dh68bVx8Bh9tCOah6I",
    authDomain: "bisinis-unbaned-testing1.firebaseapp.com",
    projectId: "bisinis-unbaned-testing1",
    storageBucket: "bisinis-unbaned-testing1.appspot.com",
    messagingSenderId: "161325332962",
    appId: "1:161325332962:web:de5be6347fd8e36f12e1bb",
    measurementId: "G-BSC9JH7NDY"
  };

  // Init Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export { auth, db };
</script>
