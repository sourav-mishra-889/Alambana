
  // Initialize Firebase (ADD YOUR OWN DATA)
// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyAD8yGB3Z64tmNh53ETHtLiNlnMkhC8WqQ",
    authDomain: "aalambana-ab91e.firebaseapp.com",
    databaseURL: "https://aalambana-ab91e-default-rtdb.firebaseio.com",
    projectId: "aalambana-ab91e",
    storageBucket: "aalambana-ab91e.appspot.com",
    messagingSenderId: "262397831152",
    appId: "1:262397831152:web:383c3fe5e027fe89701f35",
    measurementId: "G-21F7E5989Q"
  };



  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactform').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('full-name');
    var prior_job = getInputVal('prior job');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var company = getInputVal('company');
    var location = getInputVal('location');
    var why_aalambana = getInputVal('why aalambana');
   
  
    // Save message
    saveMessage(name, prior_job, email, phone, company, location, why_aalambana);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactform').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, prior_job , email, phone, company, location, why_aalambana){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      priorjob: prior_job,
      whyaalambana: why_aalambana,
      company:company,
      email:email,
      phone:phone,
      location: location
    });
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactform').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
  // Get values
  var name = getInputVal('full-name');
  var prior_job = getInputVal('prior job');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var company = getInputVal('company');
  var location = getInputVal('location');
  var why_aalambana = getInputVal('why aalambana');
 
  
    // Save message
    saveMessage(name, prior_job, email, phone, company, location, why_aalambana);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactform').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value; function saveMessage(name, prior_job , email, phone, company, location, why_aalambana){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
          name: name,
          prior_job: prior_job,
          why_aalambana: why_aalambana,
          company:company,
          email:email,
          phone:phone,
          location: location})}
  }
  
  // Save message to firebase
  function saveMessage(name, prior_job , email, phone, company, location, why_aalambana){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      prior_job: prior_job,
      why_aalambana: why_aalambana,
      company:company,
      email:email,
      phone:phone,
      location: location
    });
  }
