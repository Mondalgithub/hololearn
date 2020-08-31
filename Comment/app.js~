// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCGK0LsgxI858mSf4sga3-lp5twDNoHMxM",
    authDomain: "contact-15eaa.firebaseapp.com",
    databaseURL: "https://contact-15eaa.firebaseio.com",
    projectId: "contact-15eaa",
    storageBucket: "contact-15eaa.appspot.com",
    messagingSenderId: "989280755491",
    appId: "1:989280755491:web:c8d29faa4f5fcc116f3696"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
