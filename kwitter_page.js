//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDNgUyWG9aPfCOEAZcRhA0ZUO1BFBJTjNs",
      authDomain: "class-test-282f4.firebaseapp.com",
      databaseURL: "https://class-test-282f4-default-rtdb.firebaseio.com",
      projectId: "class-test-282f4",
      storageBucket: "class-test-282f4.appspot.com",
      messagingSenderId: "809551987983",
      appId: "1:809551987983:web:84e94355d99d2221e9aa7a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
      
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name= message_data ['name'];
message= message_data ['message']; 
like= message_data ['like'];
x1 = "<h4> " + name + "<img class='user_tick' src='tick.png'> </h4>";
x2 = "<h4 class='message_h4'> " + message + "</h4>";
x3 = "<button class='btn btn-warning' id="+ firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
x4 = "<span class='glyphicon glyphyicon-thumbs-up'> Like: " + like + "</span> </button> <hr>";
row = x1 + x2 + x3 + x4;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clickedonlike");     
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

      
