
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
    document.getElementById("user_name").innerHTML="Welcome " + user_name;
    
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Room Name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";

    }


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML +=row

      //End code
      });});}

      getData();
      
      function redirectToRoomName(name){
            localStorage.setItem("room_name" , name);
            window.location="kwitter_page.html";

      }

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";

      }

