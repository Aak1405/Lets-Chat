
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC_BgCHHqL_Bru4tRQKcJvWYZBJWtEuuyc",
      authDomain: "kwitter-90269.firebaseapp.com",
      databaseURL: "https://kwitter-90269-default-rtdb.firebaseio.com",
      projectId: "kwitter-90269",
      storageBucket: "kwitter-90269.appspot.com",
      messagingSenderId: "511534081923",
      appId: "1:511534081923:web:ffd0f7e19bbf27064978b6"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
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
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirect(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row ;     //End code
      });});}
getData();

function redirect(name)
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