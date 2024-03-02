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

//Añade tus enlaces de Firebase

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Bienvenido" + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "añadir el nombre de la sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nombre de la sala" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
