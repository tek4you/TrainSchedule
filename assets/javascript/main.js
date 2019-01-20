$(document).ready(function () {


  var config = {
    apiKey: "AIzaSyDkdGvislvyHwiw130aKfNYIDfFHYqy03k",
    authDomain: "test-db-1bb88.firebaseapp.com",
    databaseURL: "https://test-db-1bb88.firebaseio.com",
    projectId: "test-db-1bb88",
    storageBucket: "test-db-1bb88.appspot.com",
    messagingSenderId: "17401072436"
  };

firebase.initializeApp(config);

var dataRef = firebase.database();
 console.log(dataRef);


    // Initial Values
    var trainName = "";
    var destination = "";
    var startTime = "";
    var frequency = 0;

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      // $('#add-train').off();
      $('#add-train').on("click", function(event) {
        event.preventDefault();

      trainName = $("#name-input").val().trim();
      destination = $("#destination-input").val().trim();
      startTime = $("#startTime-input").val().trim();
      frequency = $("#frequency-input").val().trim();

      console.log({ 
        trainName: trainName,
        destination: destination,
        startTime: startTime,
        frequency: frequency, });
      });

      // Code for the push
      dataRef.ref().push({

        trainName: trainName,
        destination: destination,
        startTime: startTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });




