var firebaseConfig = {
    apiKey: "AIzaSyCL8DOuWtaQ0Xt2bxmudQ53BgHVh88P_hY",
    authDomain: "kwitter-1-ff68d.firebaseapp.com",
    databaseURL: "https://kwitter-1-ff68d-default-rtdb.firebaseio.com",
    projectId: "kwitter-1-ff68d",
    storageBucket: "kwitter-1-ff68d.appspot.com",
    messagingSenderId: "134570843574",
    appId: "1:134570843574:web:efc993e7b11e1df9b43517"
  };

 

firebase.initializeApp(firebaseConfig)

firebase.database().ref("/").child(user_name).update
({
    purpose:"adding user"
});

function logout()
{
    window.location = "kwitter_login.html"
}