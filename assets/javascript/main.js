 $(document).ready(function(){

  var todayWeather;
  var api = "http://api.openweathermap.org/data/2.5/weather?q"
  var apiKey= "aa82df93fb94f1a0f4faf0f48caeea1d"
  var units = "&units=metric";
  var distinationCity = "Denver ";
  var input;




  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + distinationCity + "&appid=166a433c57516f51dfab1f7edaed8413&units=metric";

     $.ajax({
  	  url: queryURL,
  	  method: "GET"

     }).done(function(response) {
         console.log(response);
         var temprature = response.main.temp;
         console.log(temprature);
         $(".panal-heading").html(temprature);
         $("#temprature").append(response.main.temp);
         $("#humidity").append(response.main.humidity);
         $("#wind").append(response.wind.speed);
    });  
   


    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA15Ov9f5jM84BedjQw-ASIeOuJ4qUoh98",
    authDomain: "myweatherapi-1ee55.firebaseapp.com",
    databaseURL: "https://myweatherapi-1ee55.firebaseio.com",
    projectId: "myweatherapi-1ee55",
    storageBucket: "myweatherapi-1ee55.appspot.com",
    messagingSenderId: "906555122342"
  };
  firebase.initializeApp(config);

   firebase.database().ref().orderByChild('dateAdded').limitToLast(1).on("child_added", function(snapshot){
     $("#distinationCity").html(snapshot.val());
   });

   // $("#commentForm").validate();

   
    // configration for slid photo's
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide=1;

    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    var interval;

   // start slidingright to left

    function startSlider(){
      interval =  setInterval (function() {   
        $slideContainer.animate({'margin-left': '-=' +width}, animationSpeed, function(){
        currentSlide++;
        if (currentSlide===$slides.length){
             currentSlide = 1;// 
             $slideContainer.css('margin-left', 0);
           }
          });
      }, pause);
  
 }
    function stopSlider(){
        clearInterval(interval);
      }
      
      // slider stops when mouse move to the sliding area
    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    startslider();
 });

//  var button = select("#submit");
//  button.mousePressed(todayWeather);

//  function todayWeather(){

//  var url = api + input.value() + apiKey + units;
//  loadJSON(url, gotData);
// }




