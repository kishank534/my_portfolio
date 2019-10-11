
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBwJJJcPht54110PUa2DcS9PN4iFbvAjcQ",
    authDomain: "formdemo-bd8d4.firebaseapp.com",
    databaseURL: "https://formdemo-bd8d4.firebaseio.com",
    projectId: "formdemo-bd8d4",
    storageBucket: "formdemo-bd8d4.appspot.com",
    messagingSenderId: "294048106350",
    appId: "1:294048106350:web:6238ab21c160d67a9ae37f",
    measurementId: "G-5JMY23JEKS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

//   let formMessage = firebase.database().ref('register');

  //listen for submit event//(1)
  document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let bio = document.querySelector('#bio').value;
    let job = document.querySelector('#job').value;
    let interest = document.querySelector('#interest').value;
  
    //send message values
    sendMessage(name, email, password, bio, job, interest);
  
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(name, email, password, bio, job, interest) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      password: password,
      bio: bio,
      job: job,
      Interest: interest
    });
  }