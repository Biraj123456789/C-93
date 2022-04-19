
//ADD YOUR FIREBASE LINKS HERE
firebaseConfig = {
      apiKey: "AIzaSyC_72eTtb-_96078gUeOsdV_1rSTsKi6UI",
      authDomain: "c-93-d2a50.firebaseapp.com",
      projectId: "c-93-d2a50",
      storageBucket: "c-93-d2a50.appspot.com",
      messagingSenderId: "1079108964410",
      appId: "1:1079108964410:web:e4b4856e1cb875120ae503"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
