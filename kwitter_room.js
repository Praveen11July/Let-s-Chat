
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC4fy-XEwaldt2hwHvR7pZr7SUG1s0_frw",
      authDomain: "let-s-chat-edf38.firebaseapp.com",
      databaseURL: "https://let-s-chat-edf38-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-edf38",
      storageBucket: "let-s-chat-edf38.appspot.com",
      messagingSenderId: "489241059985",
      appId: "1:489241059985:web:22413ad897176ef45d9530",
      measurementId: "G-64V5WMECZG"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"   
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}
    


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      <input type="text" id="input"></input>

      //End code
      });});}
getData();
