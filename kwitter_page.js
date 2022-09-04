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
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("message").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("message").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();
