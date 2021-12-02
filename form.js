  const firebaseConfig = {
    apiKey: "AIzaSyCladEG0Wxkhsq8LpUx3GhEXad-Dd36ZRs",
    authDomain: "test-e8cd5.firebaseapp.com",
    projectId: "test-e8cd5",
    storageBucket: "test-e8cd5.appspot.com",
    messagingSenderId: "770405328905",
    appId: "1:770405328905:web:76caa5d65eedc9811c30d8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth =firebase.auth();
  function signUp()
  {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));
    alert("signed up");

  }