  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBuVGR2zEf1GyQ4vGFgigEW6gUpfp6aK6Q",
    authDomain: "classtest-be14a.firebaseapp.com",
    databaseURL: "https://classtest-be14a-default-rtdb.firebaseio.com",
    projectId: "classtest-be14a",
    storageBucket: "classtest-be14a.appspot.com",
    messagingSenderId: "472323533583",
    appId: "1:472323533583:web:64c690c8d61ddf01e1ac7a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });

        document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();