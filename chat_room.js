//in indext.html 3,4,5 
/*<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/live/3.1/firebase.js"></script>*/

function getData() { firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
   Room_names = childKey; console.log("Room Name - " + Room_names); 
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row; }); }); }
getData;