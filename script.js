$(document).ready(function(){

var magic8ball = {};
           
var listofanswers = ["Probably", "It is your destiny", "Not in your lifetime", "You know the answer in your heart", "Definitely", "No way"];

var randomNumber = Math.random();

var randomNumberArray = randomNumber * listofanswers.length;

var randomIndex = Math.floor(randomNumberArray);

var randomlistofanswers = listofanswers[randomIndex];

var buttonPrompt = function(){
        $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

var question = prompt("What is the question Your Excellency?");
  
        $("#8ball").effect("shake");        
        $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
            
        setTimeout(
               function(){
               $("#answer").text(randomlistofanswers);
              
          }, 500);
  
               $("#answer").text(randomlistofanswers);
               $("#answer").hide(); 
               $("#answer").fadeIn(4000);
};

               $("#questionButton").click(buttonPrompt);
               $("#answer").hide();  
  
});
