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
  


var dataRef = firebase.database();
 console.log(dataRef);


    // Initial Values
    var trainName = "";
    var destination = "";
    var startTime = "";
    var frequency = 0;
    var nextTrain = 0;
    var tMinutesTillTrain = 0;

    
function nextArrival(firstTime, tFrequency) {


  // var tFrequency = 3;
  
  // Time is 3:30 AM
  var firstTime = "03:30";
  
  // First Time (pushed back 1 year to make sure it comes before current time)
  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConverted);
  
  // Current Time
  var currentTime = moment();
  console.log("CURRENT TIME: " + currentTime.format("hh:mm"));
  
  // Difference between the times
  var diffTime = currentTime.diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);
  
  // Time apart (remainder)
  var tRemainder = diffTime % tFrequency;
  console.log(tRemainder);
  
  // Minute Until Train
  var tMinutesTillTrain = tFrequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
  
  // Next Train
  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
  
    }
  

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
    

     
      // Code for the push
      dataRef.ref().push({

        trainName: trainName,
        destination: destination,
        startTime: startTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });

      nextArrival(startTime, frequency);

      dataRef.ref().orderByChild("dateAdded").on("child_added", function(snapshot) {
        // Change the HTML to reflect
        $("#trainName-display").append('<p>' + snapshot.val().trainName);
        $("#destination-display").append('<p>' + snapshot.val().destination);
        $("#frequency-display").append('<p>' + snapshot.val().frequency);
        $("#nextArrival-display").append('<p>' + nextTrain);
        $("#minutesAway-display").append('<p>' + tMinutesTillTrain);
  
      });


});
