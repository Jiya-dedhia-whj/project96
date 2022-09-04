var firebaseConfig = {
  apiKey: "AIzaSyAbzlbpi0i2X_gyQ8MyiR77g9GaguRe-fc",
  authDomain: "bbmp-901f1.firebaseapp.com",
  databaseURL: "https://bbmp-901f1-default-rtdb.firebaseio.com",
  projectId: "bbmp-901f1",
  storageBucket: "bbmp-901f1.appspot.com",
  messagingSenderId: "31887810202",
  appId: "1:31887810202:web:5146dd6bf57252120ec923",
  measurementId: "G-JJ80JSGS89"
};

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function add_room(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "add your room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
      }

      function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
});});}
getData();

function redirecttoroomnames(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}
function logout(){
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
   window.location = "index.html";
}