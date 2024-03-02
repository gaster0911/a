const firebaseConfig = {
  apiKey: "AIzaSyDk8QiJCII0yiZlyAwBU6iqPDtU19mlOJg",
  authDomain: "x-falso.firebaseapp.com",
  databaseURL: "https://x-falso-default-rtdb.firebaseio.com",
  projectId: "x-falso",
  storageBucket: "x-falso.appspot.com",
  messagingSenderId: "340023293306",
  appId: "1:340023293306:web:b19327ef46f405377e12c3"
};
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

