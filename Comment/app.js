// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCV_HDvJ5BfZPThD1kOZknexlEvDWamksg",
    authDomain: "hololearn-f6aa4.firebaseapp.com",
    databaseURL: "https://hololearn-f6aa4.firebaseio.com",
    projectId: "hololearn-f6aa4",
    storageBucket: "hololearn-f6aa4.appspot.com",
    messagingSenderId: "46126094570",
    appId: "1:46126094570:web:6275bf61d8bd1768a15f93"
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

    sendEmail(name, email, message);
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
    retrieveInfos();
}

//Retrive Infos
function retrieveInfos() {
    let ref = firebase.database().ref("infos");
    ref.on("value", gotData);
}

function gotData(data) {
    let info = data.val();
    let keys = Object.keys(info);

    for(let i = 0; i < keys.length; i++) {
	let infoData = keys[i];
	let name = info[infoData].name;
	let email = info[infoData].email;
	let message = info[infoData].message;
	console.log(name, email, message);

	let infosResults = document.querySelector(".infosResults");

	infosResults.innerHTML += `<div>
<p><strong>Name: <strong/>${name} <br/>
<a><strong>Email: <strong/>${email}</a> <br/>
<a><strong>Message: <strong/>${message}</a>
</p>
</div>`;
    }
}

retrieveInfos();


//Send Email info
function sendEmail(name, email, message) {
    Email.send({
	Host: "smtp.gmail.com",
	Username: 'hololearn2021@gmail.com',
	Password: "nmsxlrmxzqicczrt",
	To: 'hololearn2021@gmail.com',
	From: 'hololearn2021@gmail.com',
	Subject: `Message From: ${name}`,
	Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("Mail sent successfully"))
}
