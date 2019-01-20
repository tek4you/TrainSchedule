$(document).ready(function () {


  
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBOuyBGDRSuL4bqKxQkvA19fNk9k1R14o8",
      authDomain: "trainschedule-5c2b7.firebaseapp.com",
      databaseURL: "https://trainschedule-5c2b7.firebaseio.com",
      projectId: "trainschedule-5c2b7",
      storageBucket: "trainschedule-5c2b7.appspot.com",
      messagingSenderId: "159091987138"
    };
    firebase.initializeApp(config);
  


var database = firebase.database();
 console.log(database);


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
      database.ref().push({

        trainName:  trainName,
        destination: tdestination,
        startTime:  startTime,
        frequency:  frequency,
        // dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });




